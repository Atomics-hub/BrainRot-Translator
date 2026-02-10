# Brainrot Translator

Chrome extension that converts any webpage into peak brainrot slang using AI. Every noun gets -MAXXED, every verb gets -MOGGED, and everything gets rated on the PSL scale.

Supports **OpenAI**, **Anthropic**, and **Groq** as API providers.

## Install

**Chrome Web Store** (coming soon)

**Manual:**
1. Clone this repo
2. Go to `chrome://extensions`
3. Enable "Developer mode"
4. Click "Load unpacked" and select this folder

## Setup

1. Click the extension icon, then **[ settings ]**
2. Pick your API provider
3. Paste your API key:
   - OpenAI: [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
   - Anthropic: [console.anthropic.com](https://console.anthropic.com/)
   - Groq: [console.groq.com/keys](https://console.groq.com/keys)
4. Hit **TEST** to verify, then **SAVE**

## Usage

Click the extension icon and hit **ACTIVATE**. The page text gets sent to your chosen AI provider and comes back fully brainrotted. Hit **DEACTIVATE** to revert.

## How It Works

- Collects visible text nodes from the page (skips scripts, forms, code blocks, etc.)
- Batches text and sends it to the AI API concurrently
- The AI translates everything into lookism/brainrot vocabulary while preserving meaning
- Original text is stored so you can revert anytime

API keys are stored locally in your browser via `chrome.storage.local` and are never sent anywhere except to the API provider you choose.

## License

MIT
