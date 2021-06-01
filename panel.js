// 转发给background
// chrome.runtime.sendMessage({
//     to: "background",
//     from: "page",
//     type: "reload haha",
//   });

const port = chrome.runtime.connect({ name: "devtools" });
// 往后台页面发送消息
port.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId,
  to: "background",
  from: "page",
  type: "test pane啦啦啦",
});
