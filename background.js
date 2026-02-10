importScripts('local-translator.js');

const SYSTEM_PROMPT = `You are channeling the spirit of Clavicular (Braden Peters) - the SUPREME OVERLORD of lookism commentary. You narrate ALL of reality like it's a mogging competition on looksmax.org. Every sentence should sound like it came from the most unhinged corner of TikTok brainrot crossed with PSL forum culture.

VOCABULARY YOU MUST USE HEAVILY:
- Lookism core: MOGGING/MOGGED, PSL (rate things 1-10), FRAME, AURA, MEWING, BONESMASH, NORWOOD (balding), CANTHAL TILT, HUNTER EYES, MIDFACE RATIO, FRAUD/FRAUDING
- Brainrot core: SIGMA, GYATT, RIZZ, SKIBIDI, FANUM TAX, OHIO, NO CAP, FR FR, BUSSIN, SLAY, AURA POINTS
- Compound everything: -MAXXING, -MOGGED, -PILLED, -CEL, -FRAUD (e.g. COFFEEMAXXING, WEATHERMOGGED, SUNPILLED, KNOWLEDGECEL)
- Intensity: SOFTMAXXING (minor), HARDMAXXING (major), LOOKSMAXXING (self-improvement)

RULES:
1. ALWAYS write in ENGLISH only. Never use other languages or random Unicode.
2. EVERY noun and verb MUST get a brainrot compound. "walked to store" = "STRIDEMAXXED to the LOOTCELL". No exceptions.
3. 30-40% of words in CAPS minimum.
4. Rate things on the PSL scale when it fits. "good weather" = "PSL 8 weather"
5. Emojis after intense moments: 💀🔥💯😳👀🧠🗿 (max 2-3 per line)
6. Everyone is either a SIGMA getting AURA POINTS, a FRAUD losing AURA, getting MOGGED, or is a -CEL
7. Invent NEW compound words specific to context. Be creative, not generic.
8. Keep the CORE MEANING intact. Destroy only the tone.
9. Keep output ROUGHLY the same length as input. Don't make short text into paragraphs.
10. NEVER add lines that weren't in the input. Each input line = exactly one output line.
11. NEVER skip a line number. Every [N] in input MUST have a [N] in output.

FORMAT RULES (CRITICAL - follow exactly):
- Output ONLY the translated lines, nothing else
- Each line starts with [N] where N matches the input line number
- Do NOT add any preamble, explanation, or extra text
- Do NOT merge or split lines

INPUT EXAMPLE:
[1] Albert Einstein developed the theory of relativity
[2] The weather today will be sunny
[3] Click here to read more

OUTPUT EXAMPLE:
[1] Albert CRANIUMMAXXED Einstein went full NEURALMAXXING and dropped the theory of relativity, INTELLECT-MOGGING every SCIENCECEL on the planet, absolutely BRAINFRAME SIGMA move, PSL 9 DISCOVERY AURA no cap 💀🔥
[2] The weather SUNMAXXED today going full UVPILLED, absolutely CLIMATEMOGGING every PALECOPER with THERMALMAXXED AURA, certified SKIBIDI forecast 🔥💯
[3] CLICK this rn or stay forever KNOWLEDGEMOGGED and INFORMATIONCELIBATE, zero AURA behavior fr fr 🧠💀`;

function getProviderConfig(provider, model, apiKey) {
  const providers = {
    openai: {
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: (text) => ({
        model: model || 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: text }
        ],
        temperature: 1.0,
        max_tokens: 4096
      }),
      extractResponse: (data) => {
        const text = data?.choices?.[0]?.message?.content;
        if (!text) throw new Error('Unexpected API response format');
        return text;
      }
    },
    anthropic: {
      url: 'https://api.anthropic.com/v1/messages',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: (text) => ({
        model: model || 'claude-haiku-4-5-20251001',
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: text }]
      }),
      extractResponse: (data) => {
        const text = data?.content?.[0]?.text;
        if (!text) throw new Error('Unexpected API response format');
        return text;
      }
    },
    groq: {
      url: 'https://api.groq.com/openai/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: (text) => ({
        model: model || 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: text }
        ],
        temperature: 1.0,
        max_tokens: 4096
      }),
      extractResponse: (data) => {
        const text = data?.choices?.[0]?.message?.content;
        if (!text) throw new Error('Unexpected API response format');
        return text;
      }
    }
  };

  return providers[provider] || providers.openai;
}

const KEY_PREFIXES = {
  openai: 'sk-',
  anthropic: 'sk-ant-',
  groq: 'gsk_'
};

function validateApiKey(provider, key) {
  const prefix = KEY_PREFIXES[provider];
  if (prefix && !key.startsWith(prefix)) {
    throw new Error(
      `Invalid ${provider} key format. Expected key starting with "${prefix}". Check extension settings.`
    );
  }
  if (key.length < 20) {
    throw new Error('API key looks too short. Check extension settings.');
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'translate') {
    handleTranslate(message.text)
      .then(translated => sendResponse({ translated }))
      .catch(err => sendResponse({ error: err.message }));
    return true;
  }

  if (message.action === 'testKey') {
    testApiKey(message.provider, message.apiKey)
      .then(result => sendResponse(result))
      .catch(err => sendResponse({ error: err.message }));
    return true;
  }
});

async function testApiKey(provider, apiKey) {
  validateApiKey(provider, apiKey);
  const config = getProviderConfig(provider, '', apiKey);

  const response = await fetch(config.url, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(config.body('[1] test'))
  });

  if (!response.ok) {
    const errText = await response.text();
    let parsed;
    try { parsed = JSON.parse(errText); } catch {}
    throw new Error(
      `API returned ${response.status}: ${parsed?.error?.message || errText.slice(0, 100)}`
    );
  }

  return { success: true };
}

async function handleTranslate(text) {
  const { apiProvider, apiModel } = await chrome.storage.sync.get({
    apiProvider: 'local',
    apiModel: ''
  });

  if (apiProvider === 'local') {
    return translateLocal(text);
  }

  const keyName = `apiKey_${apiProvider}`;
  const keyData = await chrome.storage.local.get({ [keyName]: '' });
  const apiKey = keyData[keyName];

  if (!apiKey) {
    throw new Error(`No ${apiProvider} API key set. Go to extension settings.`);
  }

  validateApiKey(apiProvider, apiKey);

  const config = getProviderConfig(apiProvider, apiModel, apiKey);

  const response = await fetch(config.url, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(config.body(text))
  });

  if (!response.ok) {
    const errText = await response.text();
    let parsed;
    try { parsed = JSON.parse(errText); } catch {}

    const errorMap = {
      401: `Invalid API key for ${apiProvider}. Double-check in extension settings.`,
      403: `API key lacks permissions. Check your ${apiProvider} account.`,
      429: `Rate limited by ${apiProvider}. Wait a moment and try again.`,
      500: `${apiProvider} server error. Try again shortly.`,
      503: `${apiProvider} is temporarily unavailable. Try again later.`
    };

    const friendlyMessage = errorMap[response.status]
      || `${apiProvider} error ${response.status}: ${parsed?.error?.message || errText.slice(0, 200)}`;

    throw new Error(friendlyMessage);
  }

  const data = await response.json();
  return config.extractResponse(data);
}
