// 创建自定义面板，同一个插件可以创建多个自定义面板
// 几个参数依次为：panel标题、图标（其实设置了也没地方显示）、要加载的页面、加载成功后的回调
chrome.devtools.panels.create(
  "Storage Cleaner",
  "images/128.png",
  "page/dist/index.html"
);

// // 与后台页面消息通信-长连接
const port = chrome.runtime.connect({ name: "devtools" });
// // 监听后台页面消息
// port.onMessage.addListener((message) => {
//   console.log("[debug]监听后台页面消息message:", message);
// });
// // 往后台页面发送消息
port.postMessage({
  name: "original",
  tabId: chrome.devtools.inspectedWindow.tabId,
});
