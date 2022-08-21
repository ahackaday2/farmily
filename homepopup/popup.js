// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab);
  console.log("We tried");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });

  // window.location.href="../newpopup/new.html";
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;

    // var imgURL = chrome.extension.getURL('images/cow.png')
    var imgURL = chrome.runtime.getURL("images/cow.png");
    document.getElementsByTagName("img")[0].src = imgURL;

    this.cat = document.createElement("img");
    this.cat.setAttribute("id", "kittyDiv");
    this.cat.src = imgURL
    // this.cat.src = chrome.runtime.getURL("images/sheep.png");

    document.getElementsByTagName("section")[0].appendChild(this.cat);

    var div = document.createElement("div");
    document.body.appendChild(div);
    div.innerText = "test123";
  });
}