export function connect() {
  if (!chrome || !chrome.runtime) return;
  // 与后台页面消息通信-长连接
  const port = chrome.runtime.connect({ name: "pages" });
  return port;
}
export function sendMsg({ data = {}, type }) {
  if (!chrome || !chrome.runtime) return;
  // 转发给background
  // chrome.runtime.sendMessage({
  //   to: "background",
  //   from: "page",
  //   type,
  //   data,
  // });
  // console.log("[debug]{ data, type }:", { data, type });
  // return;
  const port = chrome.runtime.connect({ name: "pages" });
  console.log("[debug]port1:", port);
  // 往后台页面发送消息
  port.postMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    to: "background",
    from: "page",
    type,
    data,
  });
}
