function sendStore() {
  // 转发给background
  chrome.runtime.sendMessage({
    to: "background",
    from: "content",
    type: "sendStorage",
    data: {
      local: localStorage,
      session: sessionStorage,
    },
  });
}

sendStore();

// const port = chrome.runtime.connect({ name: "devtools" });
// port.onMessage.addListener((message) => {
//   console.log("[debug]message:", message);
//   alert(JSON.stringify(message));
// });
// chrome.runtime.onMessage.addListener((msg) => {
//   alert(2)
//   alert('content' + JSON.stringify(msg));
// });

const connections = {};

chrome.runtime.onConnect.addListener(function (port) {
  const extensionListener = function (message, sender, sendResponse) {
    if (message.name == "pages") {
      connections[message.tabId] = port;
    }
    alert("conten" + JSON.stringify(message));
  };
  port.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(function (port) {
    alert("onDisconnect");
    port.onMessage.removeListener(extensionListener);

    const tabs = Object.keys(connections);
    for (let i = 0, len = tabs.length; i < len; i++) {
      if (connections[tabs[i]] == port) {
        delete connections[tabs[i]];
        break;
      }
    }
  });
});
// window.addEventListener('message', function(msg) {
//   alert(4)
//   alert('content' + JSON.stringify(msg))
// })

// 作为content script 与 devtool 通信的桥
// const connections = {};

// chrome.runtime.onConnect.addListener(function (port) {
//   const extensionListener = function (message, sender, sendResponse) {
//     alert(JSON.stringify(message));
//     if (message.from === "background") {
//       sendStore();
//     }
//   };
//   port.onMessage.addListener(extensionListener);

//   port.onDisconnect.addListener(function (port) {
//     port.onMessage.removeListener(extensionListener);
//   });
// });

// const port = chrome.runtime.connect();
// console.log("[debug]port1:", port);

// port.onMessage.addListener((message) => {
//   alert(JSON.stringify(message));
// });
