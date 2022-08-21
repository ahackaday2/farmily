// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %c/green', `color: ${color}`);


});

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test123";'
//   });
// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     file: "insert.js"
//   });
// });
