chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.startsWith('https://chat.openai.com/')) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['script.js']
    });
  }
});
