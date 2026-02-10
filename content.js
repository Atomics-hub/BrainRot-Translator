const SKIP_TAGS = new Set([
  'SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT',
  'CODE', 'PRE', 'SVG', 'MATH', 'SELECT', 'OPTION',
  'BUTTON', 'LABEL', 'IFRAME', 'CANVAS', 'VIDEO', 'AUDIO'
]);

let isActive = false;
let isTranslating = false;
const originals = new Map();

const LOADING_PHRASES = [
  'BRAINROTTING...',
  'AURAMAXXING IN PROGRESS...',
  'MOGGING YOUR TEXT...',
  'LOOKSMAXXING THIS PAGE...',
  'CANTHAL TILTING EVERY WORD...',
  'MEWING INTENSIFIES...',
  'BONESMASHING THE DOM...',
  'APPLYING SIGMA FILTER...',
  'FRAUDCHECK IN PROGRESS...',
  'PSL RATING YOUR CONTENT...',
  'HARDMAXXING YOUR WEBPAGE...',
  'NORWOOD REVERSING...',
  'HUNTER EYES ACTIVATED...',
  'RIZZ CALIBRATION...',
  'SKIBIDI PROTOCOL ENGAGED...'
];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggle') {
    if (isTranslating) {
      sendResponse({ success: false, error: 'Translation in progress' });
      return true;
    }

    if (!isActive) {
      isActive = true;
      isTranslating = true;
      translatePage()
        .then((count) => {
          isTranslating = false;
          sendResponse({ success: true, count });
        })
        .catch(err => {
          isActive = false;
          isTranslating = false;
          sendResponse({ success: false, error: err.message });
        });
    } else {
      isActive = false;
      revertAll();
      sendResponse({ success: true });
    }
    return true;
  }

  if (message.action === 'getState') {
    sendResponse({ isActive });
  }
});

function collectTextNodes() {
  if (!document.body) return [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;

        let el = node.parentElement;
        while (el && el !== document.body) {
          if (SKIP_TAGS.has(el.tagName)) return NodeFilter.FILTER_REJECT;
          el = el.parentElement;
        }

        if (node.parentElement?.closest('[role="button"], [role="textbox"], [contenteditable]')) {
          return NodeFilter.FILTER_REJECT;
        }
        if (node.parentElement?.closest('.brainrot-overlay')) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.isContentEditable) return NodeFilter.FILTER_REJECT;

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}

function createBatches(textNodes, maxCharsPerBatch = 4000) {
  const batches = [];
  let currentBatch = [];
  let currentLength = 0;

  for (const node of textNodes) {
    const text = node.textContent.trim();
    if (!text) continue;

    const wouldExceed = currentLength + text.length > maxCharsPerBatch && currentBatch.length > 0;

    if (wouldExceed) {
      const prevNode = currentBatch[currentBatch.length - 1];
      const sameParent = prevNode.parentElement === node.parentElement;

      if (sameParent && currentLength + text.length < maxCharsPerBatch * 1.5) {
        currentBatch.push(node);
        currentLength += text.length;
        continue;
      }

      batches.push(currentBatch);
      currentBatch = [];
      currentLength = 0;
    }

    currentBatch.push(node);
    currentLength += text.length;
  }

  if (currentBatch.length > 0) batches.push(currentBatch);
  return batches;
}

function formatBatchForAPI(nodes) {
  return nodes.map((node, i) => `[${i + 1}] ${node.textContent.trim()}`).join('\n');
}

function injectStyles() {
  if (document.getElementById('brainrot-styles')) return;

  const style = document.createElement('style');
  style.id = 'brainrot-styles';
  style.textContent = `
    .brainrot-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.92);
      z-index: 2147483647;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Impact', 'Arial Black', sans-serif;
    }
    .brainrot-overlay::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        rgba(255, 0, 255, 0.03) 0px,
        transparent 2px,
        transparent 4px
      );
      pointer-events: none;
      animation: brainrot-scanline-scroll 4s linear infinite;
    }
    .brainrot-loader {
      text-align: center;
      color: #ff00ff;
      position: relative;
      z-index: 1;
    }
    .brainrot-skull {
      font-size: 100px;
      animation: brainrot-pulse 0.4s infinite alternate, brainrot-skull-glitch 3s infinite;
      filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8));
    }
    .brainrot-loading-text {
      font-size: 32px;
      color: #00ff00;
      text-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 80px #00ff00;
      margin-top: 16px;
      letter-spacing: 4px;
      animation: brainrot-text-flicker 0.1s infinite alternate;
    }
    .brainrot-progress {
      font-size: 24px;
      color: #ffff00;
      margin-top: 8px;
    }
    .brainrot-error {
      font-size: 14px;
      color: #ff4444;
      margin-top: 12px;
      font-family: monospace;
      max-width: 400px;
      word-break: break-word;
    }
    .brainrot-dismiss {
      color: #666;
      font-size: 12px;
      margin-top: 16px;
      font-family: monospace;
      cursor: pointer;
      transition: color 0.15s;
    }
    .brainrot-dismiss:hover {
      color: #ff00ff;
    }
    @keyframes brainrot-pulse {
      from { transform: scale(1) rotate(-5deg); }
      to { transform: scale(1.15) rotate(5deg); }
    }
    @keyframes brainrot-skull-glitch {
      0%, 88%, 100% { filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8)); }
      90% { filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8)) hue-rotate(90deg); transform: scale(1.05) skewX(5deg); }
      92% { filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8)) hue-rotate(180deg); transform: scale(0.95) skewX(-3deg); }
      94% { filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8)); transform: scale(1); }
    }
    @keyframes brainrot-scanline-scroll {
      from { transform: translateY(0); }
      to { transform: translateY(8px); }
    }
    @keyframes brainrot-text-flicker {
      from { opacity: 1; }
      to { opacity: 0.94; }
    }
  `;
  document.head.appendChild(style);
}

function showLoadingOverlay() {
  injectStyles();
  const overlay = document.createElement('div');
  overlay.className = 'brainrot-overlay';
  overlay.innerHTML = `
    <div class="brainrot-loader">
      <div class="brainrot-skull">💀</div>
      <div class="brainrot-loading-text">BRAINROTTING...</div>
      <div class="brainrot-progress">0%</div>
    </div>
  `;
  document.body.appendChild(overlay);

  const textEl = overlay.querySelector('.brainrot-loading-text');
  let phraseIndex = 0;
  overlay._phraseInterval = setInterval(() => {
    phraseIndex = (phraseIndex + 1) % LOADING_PHRASES.length;
    textEl.textContent = LOADING_PHRASES[phraseIndex];
  }, 1500);

  return overlay;
}

function removeOverlay(overlay) {
  if (overlay._phraseInterval) clearInterval(overlay._phraseInterval);
  if (overlay.parentNode) overlay.remove();
}

function updateProgress(overlay, percent) {
  const el = overlay.querySelector('.brainrot-progress');
  if (el) el.textContent = `${Math.round(percent)}%`;
}

function applyTranslations(nodes, translatedText) {
  const lines = translatedText.split('\n');
  const translations = {};

  for (const line of lines) {
    const match = line.match(/^\[(\d+)\]\s*(.+)/);
    if (match) {
      translations[parseInt(match[1])] = match[2];
    }
  }

  nodes.forEach((node, i) => {
    const translated = translations[i + 1];
    if (translated) {
      if (!originals.has(node)) {
        originals.set(node, node.textContent);
      }
      node.textContent = translated;
    }
  });
}

function revertAll() {
  for (const [node, original] of originals) {
    if (node.parentNode) {
      node.textContent = original;
    }
  }
  originals.clear();
}

const MAX_NODES = 500;
const CONCURRENT_BATCHES = 10;

function showOverlayError(overlay, message) {
  let errorEl = overlay.querySelector('.brainrot-error');
  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.className = 'brainrot-error';
    overlay.querySelector('.brainrot-loader').appendChild(errorEl);
  }
  errorEl.textContent = message;
}

async function translateBatch(batch) {
  const prompt = formatBatchForAPI(batch);
  const response = await chrome.runtime.sendMessage({
    action: 'translate',
    text: prompt
  });

  if (!response) {
    throw new Error('Background script not responding');
  }

  if (response.error) {
    throw new Error(response.error);
  }

  if (response.translated) {
    applyTranslations(batch, response.translated);
  }
}

async function translatePage() {
  let nodes = collectTextNodes();
  if (nodes.length === 0) return 0;

  if (nodes.length > MAX_NODES) {
    nodes = nodes.slice(0, MAX_NODES);
  }

  const overlay = showLoadingOverlay();
  let failures = 0;

  try {
    const batches = createBatches(nodes);
    let completed = 0;
    const totalBatches = batches.length;

    for (let i = 0; i < batches.length; i += CONCURRENT_BATCHES) {
      if (!isActive || !isTranslating) break;

      const chunk = batches.slice(i, i + CONCURRENT_BATCHES);
      const results = await Promise.allSettled(
        chunk.map(async (batch) => {
          await translateBatch(batch);
          completed++;
          updateProgress(overlay, (completed / totalBatches) * 100);
        })
      );

      for (const r of results) {
        if (r.status === 'rejected') {
          failures++;
          if (failures === 1) {
            showOverlayError(overlay, r.reason?.message || 'API call failed');
          }
        }
      }

      if (failures === chunk.length && completed === 0) {
        break;
      }
    }
  } finally {
    if (failures > 0) {
      const dismissEl = document.createElement('div');
      dismissEl.className = 'brainrot-dismiss';
      dismissEl.textContent = '[ click to dismiss ]';
      dismissEl.addEventListener('click', () => removeOverlay(overlay));
      overlay.querySelector('.brainrot-loader').appendChild(dismissEl);
      await new Promise(resolve => setTimeout(resolve, 5000));
      removeOverlay(overlay);
    } else {
      removeOverlay(overlay);
    }
  }

  return originals.size;
}
