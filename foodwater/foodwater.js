const waterMax = 60000; // 1 minute
const foodMax = 120000; // 2 minute

const waterWarning = waterMax * 0.3; // 30% of water max time
const foodWarning = foodMax * 0.3; // 30% of food max time

window.onload = function () {
  // check if water level time is set
  chrome.storage.sync.get("waterleveltime", function (result) {
    if (result.waterleveltime == null) {
      // if not set, set it to default value
      chrome.storage.sync.set({ waterleveltime: Date.now() });
    } else {
      let newWidth =
        ((waterMax - (Date.now() - result.waterleveltime)) / waterMax) * 188 +
        "px";

      if (result.waterleveltime + waterMax < Date.now()) {
        // if water level time is greater than water max time, reset water level time
        newWidth = "0px";
      }
      document.getElementsByClassName("water-bar")[0].style.width = newWidth;
    }
  });

  // check if food level time is set
  chrome.storage.sync.get("foodleveltime", function (result) {
    if (result.foodleveltime == null) {
      // if not set, set it to default value
      chrome.storage.sync.set({ foodleveltime: Date.now() });
    } else {
      let newWidth =
        ((foodMax - (Date.now() - result.foodleveltime)) / foodMax) * 188 +
        "px";

      if (result.foodleveltime + foodMax < Date.now()) {
        // if food level time is greater than food max time, reset food level time
        newWidth = "0px";
      }
      document.getElementsByClassName("food-bar")[0].style.width = newWidth;
    }
  });
};

let foodBtn = document.getElementById("food-btn");
foodBtn.addEventListener("click", resetFoodLevel);

let waterBtn = document.getElementById("water-btn");
waterBtn.addEventListener("click", resetWaterLevel);

function resetWaterLevel() {
  // update water level time with current time
  currentTime = Date.now();
  chrome.storage.sync.set({ waterleveltime: currentTime }, function () {
    console.log("waterleveltime is set to " + currentTime);
  });
  document.getElementsByClassName("water-bar")[0].style.width = "188px";
  document.getElementById("water-img").src = "../images/water.png";
}

function resetFoodLevel() {
  // update food level time with current time
  currentTime = Date.now();
  chrome.storage.sync.set({ foodleveltime: currentTime }, function () {
    console.log("foodleveltime is set to " + currentTime);
  });
  document.getElementsByClassName("food-bar")[0].style.width = "188px";
  document.getElementById("food-img").src = "../images/hay.png";
}

function refreshWaterLevel() {
  chrome.storage.sync.get("waterleveltime", function (result) {
    let newWidth =
      ((waterMax - (Date.now() - result.waterleveltime)) / waterMax) * 188 +
      "px";

    checkWater(result.waterleveltime, Date.now());

    if (result.waterleveltime + waterMax < Date.now()) {
      // if water level time is greater than water max time, reset water level time
      newWidth = "0px";
    }
    document.getElementsByClassName("water-bar")[0].style.width = newWidth;
  });
}

function refreshFoodLevel() {
  chrome.storage.sync.get("foodleveltime", function (result) {
    let newWidth =
      ((foodMax - (Date.now() - result.foodleveltime)) / foodMax) * 188 + "px";

    checkFood(result.foodleveltime, Date.now());

    if (result.foodleveltime + foodMax < Date.now()) {
      // if food level time is greater than food max time, reset food level time
      newWidth = "0px";
    }
    document.getElementsByClassName("food-bar")[0].style.width = newWidth;
  });
}

// update food and water troughs
function checkFood(foodleveltime, timenow) {
  if (foodleveltime + (foodMax - foodWarning) < timenow) {
    // change hay bin image to empty
    document.getElementById("food-img").src = "../images/hay-empty.png";
  } else {
    // change hay bin image to full
    document.getElementById("food-img").src = "../images/hay.png";
  }
}

function checkWater(waterleveltime, timenow) {
  if (waterleveltime + (waterMax - waterWarning) < timenow) {
    // change water trough image to empty
    document.getElementById("water-img").src = "../images/water-empty.png";
  } else {
    // change water trough image to full
    document.getElementById("water-img").src = "../images/water.png";
  }
}

var intervalId = window.setInterval(function () {
  refreshWaterLevel();
  refreshFoodLevel();
}, 3000);
