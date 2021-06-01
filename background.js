// 作为content script 与 devtool 通信的桥
const connections = {};

chrome.runtime.onConnect.addListener(function (port) {
  const extensionListener = function (message, sender, sendResponse) {
    if (message.name == "original") {
      connections[message.tabId] = port;
    }
    alert(JSON.stringify(message));
    alert(JSON.stringify(message.from));
    alert(message.from === "page")
    if (message.from === "page") {
      port.postMessage({
        from: "background",
        to: "content",
        type: message.type,
        data: message.data,
      });
    }
  };
  port.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(function (port) {
    alert('onDisconnect')
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

// postMessage({
//   from: "background",
//   to: "content",
//   type: "message.type",
// });

// chrome.runtime.sendMessage({
//   type: "__ajax_proxy",
//   to: "page",
//   match: "match",
// });

// 接收内容脚本的消息，并发送到devtool的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  alert(1)
  alert(JSON.stringify(message));
  alert(JSON.stringify(sender))
  // const { type } = message
  // chrome.runtime.sendMessage({
  //   to: "content",
  //   from: "background",
  //   type
  // });
  // postMessage(message)
  if (sender.tab) {
    const tabId = sender.tab.id;
    if (tabId in connections) {
      alert(JSON.stringify(message));
      connections[tabId].postMessage(message);
    } else {
      console.log("Tab not found in connection list.");
    }
  } else {
    console.log("sender.tab not defined.");
  }
  return true;
});
