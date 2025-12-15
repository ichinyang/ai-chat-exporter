// content.js

// 負責從目前頁面抓選取內容或整頁內容，回傳給 popup

function getSelectionHtmlAndText() {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
    return { error: 'NO_SELECTION' };
  }

  const range = sel.getRangeAt(0);
  const fragment = range.cloneContents();

  const container = document.createElement('div');
  container.appendChild(fragment);

  const html = container.innerHTML;
  const text = sel.toString();

  return { html, text };
}

function getFullPageHtmlAndText() {
  // 盡量抓主要內容；目前先用 body，後面可以再優化
  const html = document.body.innerHTML;
  const text = document.body.innerText || document.body.textContent || '';
  return { html, text };
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (!msg || msg.type !== 'EXPORT_CHAT') {
    return;
  }

  try {
    let result;

    if (msg.mode === 'selected') {
      result = getSelectionHtmlAndText();
    } else {
      result = getFullPageHtmlAndText();
    }

    if (result.error) {
      sendResponse({
        error: result.error,
        url: window.location.href
      });
      return;
    }

    sendResponse({
      html: result.html,
      text: result.text,
      url: window.location.href
    });
  } catch (e) {
    console.error('EXPORT_CHAT error', e);
    sendResponse({
      error: e.message || 'Unknown error',
      url: window.location.href
    });
  }

  // async 回應
  return true;
});
