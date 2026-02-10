const toggleBtn = document.getElementById('toggleBtn');
const statusEl = document.getElementById('status');
const optionsLink = document.getElementById('optionsLink');
const counterEl = document.getElementById('counter');
const counterValue = document.getElementById('counterValue');

let currentTab = null;
let isToggling = false;

async function ensureContentScript(tabId) {
  try {
    await chrome.tabs.sendMessage(tabId, { action: 'getState' });
    return true;
  } catch {
    try {
      await chrome.scripting.executeScript({
        target: { tabId },
        files: ['content.js']
      });
      return true;
    } catch {
      return false;
    }
  }
}

(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  currentTab = tab;
  const ready = await ensureContentScript(tab.id);
  if (!ready) {
    statusEl.textContent = 'cannot run on this page';
    toggleBtn.disabled = true;
    return;
  }

  try {
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'getState' });
    updateUI(response?.isActive || false);
  } catch {
    // Content script not responsive, leave default state
  }
})();

toggleBtn.addEventListener('click', async () => {
  if (!currentTab || isToggling) return;

  const { apiProvider } = await chrome.storage.sync.get({ apiProvider: 'openai' });
  const keyName = `apiKey_${apiProvider}`;
  const keyData = await chrome.storage.local.get({ [keyName]: '' });

  if (!keyData[keyName]) {
    statusEl.textContent = `no ${apiProvider} key - check settings`;
    statusEl.style.color = '#ff4444';
    return;
  }

  const wasActive = toggleBtn.classList.contains('on');
  statusEl.textContent = wasActive ? 'reverting...' : 'brainrotting...';
  isToggling = true;
  toggleBtn.disabled = true;

  await ensureContentScript(currentTab.id);

  try {
    const response = await chrome.tabs.sendMessage(currentTab.id, { action: 'toggle' });

    if (response?.success === false) {
      statusEl.textContent = response.error || 'translation failed';
      statusEl.style.color = '#ff4444';
      return;
    }

    updateUI(!wasActive);

    if (!wasActive && response?.count !== undefined) {
      counterEl.style.display = 'block';
      counterValue.textContent = response.count;
    }
  } catch {
    statusEl.textContent = 'error: reload the page';
    statusEl.style.color = '#ff4444';
  } finally {
    isToggling = false;
    toggleBtn.disabled = false;
  }
});

optionsLink.addEventListener('click', (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

function updateUI(isActive) {
  if (isActive) {
    toggleBtn.classList.remove('off');
    toggleBtn.classList.add('on');
    toggleBtn.querySelector('.btn-text').textContent = 'DEACTIVATE';
    statusEl.textContent = 'ACTIVE';
    statusEl.style.color = '#ff0033';
  } else {
    toggleBtn.classList.remove('on');
    toggleBtn.classList.add('off');
    toggleBtn.querySelector('.btn-text').textContent = 'ACTIVATE';
    statusEl.textContent = '';
    statusEl.style.color = '#666';
    counterEl.style.display = 'none';
  }
}
