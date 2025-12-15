// popup.js

// 負責呼叫 content script，依照選擇的 Format 做 Rich / Markdown / Plain Text 匯出

// Free vs Pro state
let exportsUsed = 0;
let isPro = false;
const MAX_FREE_EXPORTS = 5;

function getDomRefs() {
  const selects = document.querySelectorAll('select');
  const inputs = document.querySelectorAll('input[type="text"], input:not([type])');
  const buttons = document.querySelectorAll('button');

  const exportModeSelect = selects[0]; // Export Mode
  const formatSelect = selects[1];     // Format
  const titleInput = inputs[0];        // Title
  const tagsInput = inputs[1];         // Tags
  const copyBtn = buttons[0];          // Copy to Clipboard
  const downloadBtn = buttons[1];      // Download

  let statusEl =
    document.querySelector('[data-status]') ||
    document.getElementById('statusMessage');

  if (!statusEl) {
    statusEl = document.createElement('div');
    statusEl.id = 'statusMessage';
    statusEl.style.marginTop = '8px';
    statusEl.style.fontSize = '12px';
    document.body.appendChild(statusEl);
  }

  return {
    exportModeSelect,
    formatSelect,
    titleInput,
    tagsInput,
    copyBtn,
    downloadBtn,
    statusEl
  };
}

function setStatus(statusEl, msg, type) {
  if (!statusEl) return;
  statusEl.textContent = msg;
  statusEl.style.color =
    type === 'error' ? '#b91c1c' :
    type === 'success' ? '#065f46' :
    '#4b5563';
}

function buildMetadata(title, tagsArray, url) {
  const capturedAt = new Date().toISOString();
  return {
    title: title || 'AI Chat Export',
    tags: tagsArray,
    url,
    capturedAt
  };
}

function buildRichHtmlDocument(metadata, bodyHtml) {
  const { title, tags, url, capturedAt } = metadata;
  const safeTitle = title || 'AI Chat Export';
  const tagsText = tags && tags.length ? tags.join(', ') : '';

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${safeTitle}</title>
    <style>
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont,
                     "Segoe UI", sans-serif;
        line-height: 1.5;
        padding: 24px;
      }
      header.metadata {
        font-size: 13px;
        color: #555;
        margin-bottom: 16px;
        border-left: 3px solid #0f766e;
        padding-left: 10px;
      }
      header.metadata div {
        margin-bottom: 2px;
      }
      table {
        border-collapse: collapse;
        width: 100%;
        margin: 12px 0;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 6px 8px;
        text-align: left;
      }
      th {
        background: #f3f4f6;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <header class="metadata">
      <div><strong>Title:</strong> ${safeTitle}</div>
      <div><strong>Tags:</strong> ${tagsText}</div>
      <div><strong>Source:</strong> ${url}</div>
      <div><strong>Captured at:</strong> ${capturedAt}</div>
    </header>
    <main>
      ${bodyHtml}
    </main>
  </body>
</html>`;
}

function buildMarkdown(metadata, textContent) {
  const { title, tags, url, capturedAt } = metadata;
  const yamlHeader = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `tags: [${tags.map(t => `"${t.trim().replace(/"/g, '\\"')}"`).join(', ')}]`,
    `source: "${url}"`,
    `captured_at: "${capturedAt}"`,
    '---',
    ''
  ].join('\n');

  // 先用簡單版：把純文字當正文
  return `${yamlHeader}${textContent}`;
}

function buildPlainText(metadata, textContent) {
  const { title, tags, url, capturedAt } = metadata;
  const metaLines = [
    `Title: ${title}`,
    `Tags: ${tags.join(', ')}`,
    `Source: ${url}`,
    `Captured at: ${capturedAt}`,
    '',
    textContent
  ];
  return metaLines.join('\n');
}

async function copyRichHtml(htmlDoc, plainText, statusEl) {
  try {
    const item = new ClipboardItem({
      'text/html': new Blob([htmlDoc], { type: 'text/html' }),
      'text/plain': new Blob([plainText], { type: 'text/plain' })
    });
    await navigator.clipboard.write([item]);
    setStatus(statusEl, 'Copied rich HTML to clipboard. Paste into Google Docs or Notion.', 'success');
    return true;
  } catch (e) {
    console.error('copyRichHtml error', e);
    setStatus(statusEl, 'Clipboard error. Please try again or allow clipboard access.', 'error');
    return false;
  }
}

async function copyPlainText(text, statusEl) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus(statusEl, 'Copied to clipboard.', 'success');
    return true;
  } catch (e) {
    console.error('copyPlainText error', e);
    setStatus(statusEl, 'Clipboard error. Please try again.', 'error');
    return false;
  }
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', () => {
  const {
    exportModeSelect,
    formatSelect,
    titleInput,
    tagsInput,
    copyBtn,
    downloadBtn,
    statusEl
  } = getDomRefs();

  if (!exportModeSelect || !formatSelect || !copyBtn) {
    console.error('Popup elements not found.');
    return;
  }

  // 預設值
  if (!exportModeSelect.value) {
    exportModeSelect.value = 'selected';
  }

  // 初始化免費/Pro 狀態
  chrome.storage.local.get(
    { exportsUsed: 0, isPro: false },
    (result) => {
      exportsUsed = typeof result.exportsUsed === 'number' ? result.exportsUsed : 0;
      isPro = !!result.isPro;

      // 免費使用者禁止使用 full conversation 選項
      const options = exportModeSelect ? Array.from(exportModeSelect.options || []) : [];
      const fullOption = options.find(o => o.value === 'full');
      if (!isPro) {
        if (fullOption) {
          fullOption.disabled = true;
        }
        if (exportModeSelect) {
          exportModeSelect.value = 'selected';
        }
      } else if (fullOption) {
        fullOption.disabled = false;
      }

      // 檢查是否已用完免費次數
      if (!isPro && exportsUsed >= MAX_FREE_EXPORTS) {
        if (copyBtn) copyBtn.disabled = true;
        if (downloadBtn) downloadBtn.disabled = true;
        setStatus(
          statusEl,
          `Free Trial limit reached (used ${exportsUsed}/${MAX_FREE_EXPORTS} exports). Visit the pricing page to upgrade to Pro.`,
          'error'
        );
      }
    }
  );

  copyBtn.addEventListener('click', async () => {
    // 檢查免費版次數限制
    if (!isPro && exportsUsed >= MAX_FREE_EXPORTS) {
      setStatus(
        statusEl,
        `Free Trial limit reached (used ${exportsUsed}/${MAX_FREE_EXPORTS} exports). Visit the pricing page to upgrade to Pro.`,
        'error'
      );
      return;
    }

    setStatus(statusEl, 'Loading content...', 'info');

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (!tabs || !tabs.length) {
        setStatus(statusEl, 'No active tab found.', 'error');
        return;
      }

      const tabId = tabs[0].id;
      const mode = exportModeSelect.value || 'selected';
      const format = formatSelect.value || 'rich';
      const userTitle = titleInput ? titleInput.value.trim() : '';
      const tagsRaw = tagsInput ? tagsInput.value : '';
      const tagsArray = tagsRaw
        ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean)
        : [];

      chrome.tabs.sendMessage(
        tabId,
        { type: 'EXPORT_CHAT', mode },
        response => {
          if (chrome.runtime.lastError) {
            console.error('sendMessage error', chrome.runtime.lastError);
            setStatus(statusEl, 'Please refresh the page and try again.', 'error');
            return;
          }

          if (!response) {
            setStatus(statusEl, 'No response from page. Is the content script loaded?', 'error');
            return;
          }

          if (response.error === 'NO_SELECTION' && mode === 'selected') {
            setStatus(statusEl, 'Please select the part of the conversation you want to export.', 'error');
            return;
          }

          if (response.error) {
            setStatus(statusEl, response.error, 'error');
            return;
          }

          const { html, text, url } = response;
          const autoTitle = userTitle || (text ? text.split('\n')[0].slice(0, 60) : 'AI Chat Export');
          const metadata = buildMetadata(autoTitle, tagsArray, url);

          (async () => {
            let success = false;
            if (format === 'rich' || (format && format.toLowerCase().includes('rich'))) {
              const htmlDoc = buildRichHtmlDocument(metadata, html || text);
              success = await copyRichHtml(htmlDoc, text, statusEl);
            } else if (format && format.toLowerCase().includes('markdown')) {
              const md = buildMarkdown(metadata, text);
              success = await copyPlainText(md, statusEl);
            } else {
              const plain = buildPlainText(metadata, text);
              success = await copyPlainText(plain, statusEl);
            }

            // 匯出成功才累計免費版次數
            if (success && !isPro) {
              exportsUsed += 1;
            }

            chrome.storage.local.set({ exportsUsed, isPro }, () => {
              if (!isPro) {
                if (exportsUsed >= MAX_FREE_EXPORTS) {
                  if (copyBtn) copyBtn.disabled = true;
                  if (downloadBtn) downloadBtn.disabled = true;
                  setStatus(
                    statusEl,
                    `Free Trial limit reached (used ${exportsUsed}/${MAX_FREE_EXPORTS} exports). Visit the pricing page to upgrade to Pro.`,
                    'error'
                  );
                } else if (success) {
                  setStatus(
                    statusEl,
                    `Export successful. You have used ${exportsUsed}/${MAX_FREE_EXPORTS} free exports.`,
                    'success'
                  );
                }
              }
            });
          })();
        }
      );
    });
  });

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      // 檢查免費版次數限制
      if (!isPro && exportsUsed >= MAX_FREE_EXPORTS) {
        setStatus(
          statusEl,
          `Free Trial limit reached (used ${exportsUsed}/${MAX_FREE_EXPORTS} exports). Visit the pricing page to upgrade to Pro.`,
          'error'
        );
        return;
      }

      setStatus(statusEl, 'Preparing download...', 'info');

      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (!tabs || !tabs.length) {
          setStatus(statusEl, 'No active tab found.', 'error');
          return;
        }

        const tabId = tabs[0].id;
        const mode = exportModeSelect.value || 'selected';
        const format = formatSelect.value || 'markdown';
        const userTitle = titleInput ? titleInput.value.trim() : 'ai-chat-export';
        const tagsRaw = tagsInput ? tagsInput.value : '';
        const tagsArray = tagsRaw
          ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean)
          : [];

        chrome.tabs.sendMessage(
          tabId,
          { type: 'EXPORT_CHAT', mode },
          response => {
            if (!response || response.error) {
              setStatus(statusEl, response && response.error ? response.error : 'Export failed.', 'error');
              return;
            }

            const { html, text, url } = response;
            const metadata = buildMetadata(userTitle || 'AI Chat Export', tagsArray, url);

            if (format === 'rich' || format.toLowerCase().includes('rich')) {
              const htmlDoc = buildRichHtmlDocument(metadata, html || text);
              const safeName = (userTitle || 'ai-chat-export')
                .toLowerCase()
                .replace(/[^a-z0-9\-]+/g, '-');
              downloadFile(`${safeName}.html`, htmlDoc, 'text/html');
              setStatus(statusEl, 'Downloaded .html file.', 'success');
            } else {
              const md = buildMarkdown(metadata, text);
              const safeName = (userTitle || 'ai-chat-export')
                .toLowerCase()
                .replace(/[^a-z0-9\-]+/g, '-');
              downloadFile(`${safeName}.md`, md, 'text/markdown');
              setStatus(statusEl, 'Downloaded .md file.', 'success');
            }
          }
        );
      });
    });
  }
});
