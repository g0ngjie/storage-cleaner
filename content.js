// 向页面注入JS
const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", chrome.extension.getURL("inject.js"));
document.documentElement.appendChild(script);

script.addEventListener("load", () => {});

// 监听 inject 消息
window.addEventListener(
  "message",
  function (e) {
    console.log("收到消息：", e.data);
  },
  false
);

// 转发给background
chrome.runtime.sendMessage({
  to: "background",
  type: "sendStorage",
  data: {
    localStorage,
    sessionStorage,
  },
});
