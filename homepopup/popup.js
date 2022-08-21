////////////////// BUTTONS TO OTHER PAGES //////////////////

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

////////////////// FREE ROAM //////////////////
// Initialize button with user's preferred color
let freeroam = document.getElementById("freeroam");

// When the button is clicked, inject setPageBackgroundColor into current page
freeroam.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(tab);
  console.log("Enabling free roam on current page");

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: addAnimalToPage,
  });

  console.log(tab);
  console.log("here before");

  try {
    await chrome.scripting.insertCSS(
      {
        target: { tabId: tab.id },
        files: ["freeroam/freeroam.css"],
      },
      () => {
        console.log("css injected");
      }
    );
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }

  console.log("here afeter");
});

// The body of this function will be executed as a content script inside the
// current page
function addAnimalToPage() {
  var searchUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg";

  try {
    // get saved animal
    chrome.storage.sync.get("animal", ({ animal }) => {
      console.log(animal);

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

      var imgURL = chrome.runtime.getURL(searchUrl);
      this.farmanimal = document.createElement("img");
      this.farmanimal.setAttribute("id", "farmily-animal");
      this.farmanimal.src = imgURL;

      document.body.appendChild(this.farmanimal);

      var div = document.createElement("div");
      document.body.appendChild(div);
      div.innerText = "test123";
    });
  } catch {
    console.log("no animal saved");
  }
}
