// 接收popup传来的信息，转发给content.js
chrome.runtime.onMessage.addListener((msg) => {
  alert("background event");
  if (msg.type === "__storage_cleaner_get__") {
    postMessage({
      type: "__storage_cleaner_get__",
      storage: msg.storage,
      cb: msg.cb,
    });
  }
});

postMessage({
  type: "__storage_cleaner_get__",
});
