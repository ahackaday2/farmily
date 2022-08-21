let foodwater = document.getElementById("foodwater-btn");
foodwater.addEventListener("click", async () => {
  window.location.href = "../foodwater/foodwater.html";
});

let pomodoro = document.getElementById("pomodoro-btn");
pomodoro.addEventListener("click", async () => {
  window.location.href = "../pomodoro/pomodoro.html";
});

let jokes = document.getElementById("jokes-btn");
jokes.addEventListener("click", async () => {
  window.location.href = "../jokes/jokes.html";
});

let animalselect = document.getElementById("animalselect-btn");
animalselect.addEventListener("click", async () => {
  window.location.href = "../animalselect/animalselect.html";
});

// Initialize button with user's preferred color
let freeroam = document.getElementById("freeroam");

// When the button is clicked, inject setPageBackgroundColor into current page
freeroam.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab);
  console.log("Enabling free roam on current page");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
    var searchUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"

    try {
    // get saved animal
    chrome.storage.sync.get("animal", ({ animal }) => {
      console.log( animal );

      switch (animal) {
        case "cow":
          searchUrl = "images/cow.png";
          break;
        case "sheep":
          searchUrl = "images/sheep.png";
          break;
        case "pig":
          searchUrl = "images/pig.png";
          break;
        default:
          searchUrl = "images/cow.png";

      }

      var imgURL = chrome.runtime.getURL("images/cow.png");
      this.farmanimal = document.createElement("img");
      this.farmanimal.setAttribute("id", "farmily-animal");
      this.farmanimal.src = imgURL

      document.body.appendChild(this.farmanimal);
      
      // document.getElementsByTagName("section")[0].appendChild(this.cat);

      // document.getElementsByTagName("img")[0].src = imgURL;

      var div = document.createElement("div");
      document.body.appendChild(div);
      div.innerText = "test123";

    });

    } catch {
      console.log("no animal saved");
    }

  });

}