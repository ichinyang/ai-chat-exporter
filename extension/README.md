# AI Chat Exporter - Chrome Extension

Thank you for purchasing SAVO.AI Early Access.

This is an early access version of the AI Chat Exporter Chrome extension.
Features may evolve and improve over time.

A Chrome Extension that exports AI chat conversations (ChatGPT, Gemini, DeepSeek) with clean formatting, intact tables, smart titles, and tags.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select the unzipped `extension` folder
5. The extension icon should appear in your Chrome toolbar

## Usage

### Basic Workflow

1. **Open an AI chat** (ChatGPT, Gemini, or DeepSeek)
2. **Select text** (for selected export) or leave nothing selected (for full conversation)
3. **Click the extension icon** in your Chrome toolbar
4. **Choose export mode:**
   - "Export selected text" - exports only the text you've selected
   - "Export full conversation" - exports all visible messages
5. **Edit the title** (auto-generated, but you can change it)
6. **Add tags** (comma-separated, e.g., "Prompt, Research, Ideas")
7. **Click "Copy to Clipboard"** or **"Download .md"**

### Export Format

The exported markdown includes:
- **Title** (as H1)
- **Tags** (formatted as hashtags)
- **Content** with preserved formatting:
  - Tables (converted to GitHub-style markdown)
  - Code blocks
  - Lists
  - Bold/italic text
  - Paragraphs

### Filename Format

Files are automatically named: `YYYY-MM-DD-source-short-title.md`

Example: `2025-01-05-chatgpt-ai-marketing-ideas.md`

## Testing

### Test on ChatGPT
1. Go to https://chat.openai.com or https://chatgpt.com
2. Start a conversation
3. Select some text or leave it unselected
4. Open the extension popup
5. Export and verify the markdown in Notion/Google Docs/Word

### Test on Gemini
1. Go to https://gemini.google.com
2. Follow the same steps as above

### Test on DeepSeek
1. Go to https://chat.deepseek.com
2. Follow the same steps as above

### Verify Exports

- **Notion**: Paste the markdown - tables should render correctly
- **Google Docs**: Paste the markdown - formatting should be preserved
- **Word**: Paste the markdown - tables should convert properly

## Icons

The extension requires icon files at:
- `icons/icon16.png` (16x16 pixels)
- `icons/icon48.png` (48x48 pixels)
- `icons/icon128.png` (128x128 pixels)

For testing, you can create simple colored square icons. The extension will work without icons, but Chrome may show a default icon.

To create icons:
1. Use any image editor
2. Create square images with the required sizes
3. Use the brand color (#14b8a6) or any color you prefer
4. Save as PNG files in the `icons/` folder

## File Structure

```
extension/
├── manifest.json       # Extension manifest (Manifest V3)
├── content.js          # Content script (runs on AI chat pages)
├── popup.html          # Extension popup UI
├── popup.js            # Popup logic
├── popup.css           # Popup styles
├── utils.js            # Utility functions (markdown conversion, title generation)
├── icons/              # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md           # This file
```

## Features

- ✅ Export selected text or full conversations
- ✅ Clean markdown conversion with preserved tables
- ✅ Smart title generation
- ✅ Custom tags
- ✅ Automatic filename generation
- ✅ Copy to clipboard
- ✅ Download as .md file
- ✅ Support for ChatGPT, Gemini, and DeepSeek

## Troubleshooting

**Extension not working?**
- Make sure you're on a supported domain (chat.openai.com, chatgpt.com, gemini.google.com, chat.deepseek.com)
- Refresh the page after installing the extension
- Check the browser console for errors

**No content found?**
- For "selected text" mode, make sure you've selected text on the page
- For "full conversation" mode, make sure you're on a chat page with visible messages
- Some AI platforms may use different HTML structures - the extension uses best-effort selectors

**Tables not preserving?**
- The extension converts HTML tables to GitHub-style markdown tables
- Some complex table structures may need manual adjustment
- Test in Notion/Google Docs to verify rendering

## Development

To modify the extension:
1. Make changes to the files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## License

Part of the AI Chat Exporter project.

## Support

If you have questions or run into issues, please contact:
support@savo.ai

