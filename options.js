const providerEl = document.getElementById('provider');
const modelEl = document.getElementById('model');
const apiKeyEl = document.getElementById('apiKey');
const apiKeyLabel = document.getElementById('apiKeyLabel');
const keyHint = document.getElementById('keyHint');
const saveBtn = document.getElementById('saveBtn');
const testBtn = document.getElementById('testBtn');
const statusEl = document.getElementById('status');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');

const defaultModels = {
  openai: 'gpt-4o-mini',
  anthropic: 'claude-haiku-4-5-20251001',
  groq: 'llama-3.3-70b-versatile'
};

const providerLabels = {
  openai: 'OpenAI API Key',
  anthropic: 'Anthropic API Key',
  groq: 'Groq API Key'
};

const providerPlaceholders = {
  openai: 'sk-...',
  anthropic: 'sk-ant-...',
  groq: 'gsk_...'
};

const providerHints = {
  openai: 'Get key at <a href="https://platform.openai.com/api-keys" target="_blank">platform.openai.com</a>',
  anthropic: 'Get key at <a href="https://console.anthropic.com/" target="_blank">console.anthropic.com</a>',
  groq: 'Get key at <a href="https://console.groq.com/keys" target="_blank">console.groq.com</a>'
};

async function updateProviderUI(provider) {
  modelEl.placeholder = defaultModels[provider] || '';
  modelEl.value = defaultModels[provider] || '';
  apiKeyLabel.textContent = providerLabels[provider] || 'API Key';
  apiKeyEl.placeholder = providerPlaceholders[provider] || '';
  keyHint.innerHTML = providerHints[provider] || '';

  const data = await chrome.storage.local.get({ [`apiKey_${provider}`]: '' });
  apiKeyEl.value = data[`apiKey_${provider}`];

  statusDot.className = 'status-dot';
  statusText.textContent = 'not tested';
}

(async () => {
  const items = await chrome.storage.sync.get({
    apiProvider: 'openai',
    apiModel: ''
  });
  providerEl.value = items.apiProvider;
  modelEl.value = items.apiModel || defaultModels[items.apiProvider];
  modelEl.placeholder = defaultModels[items.apiProvider];
  await updateProviderUI(items.apiProvider);
})();

providerEl.addEventListener('change', () => {
  updateProviderUI(providerEl.value);
});

saveBtn.addEventListener('click', async () => {
  const provider = providerEl.value;
  const key = apiKeyEl.value.trim();

  if (key) {
    const expectedPrefix = providerPlaceholders[provider].replace('...', '');
    if (!key.startsWith(expectedPrefix)) {
      statusEl.textContent = `key should start with ${expectedPrefix}`;
      statusEl.style.color = '#ff4444';
      return;
    }
  }

  await chrome.storage.local.set({ [`apiKey_${provider}`]: key });
  await chrome.storage.sync.set({
    apiProvider: provider,
    apiModel: modelEl.value.trim()
  });

  statusEl.textContent = 'saved fr fr';
  statusEl.style.color = '#ffff00';
  saveBtn.classList.add('save-flash');
  setTimeout(() => {
    statusEl.textContent = '';
    saveBtn.classList.remove('save-flash');
  }, 2000);
});

testBtn.addEventListener('click', async () => {
  const provider = providerEl.value;
  const key = apiKeyEl.value.trim();

  if (!key) {
    statusDot.className = 'status-dot invalid';
    statusText.textContent = 'no key entered';
    return;
  }

  statusDot.className = 'status-dot testing';
  statusText.textContent = 'testing...';
  testBtn.disabled = true;

  try {
    const response = await chrome.runtime.sendMessage({
      action: 'testKey',
      provider,
      apiKey: key
    });

    if (response.error) {
      statusDot.className = 'status-dot invalid';
      statusText.textContent = response.error.slice(0, 60);
    } else {
      statusDot.className = 'status-dot valid';
      statusText.textContent = 'connection valid fr fr';
    }
  } catch (err) {
    statusDot.className = 'status-dot invalid';
    statusText.textContent = 'test failed';
  } finally {
    testBtn.disabled = false;
  }
});
