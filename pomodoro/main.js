var elapsedTime=0;
var first_click=false;

// Global Variables
var minutes_interval;
var seconds_interval;

// Starting template for the timer
window.onload = function() {
  chrome.storage.sync.get("initial_time", function (result) {
    if (result.initial_time == null) {
      chrome.storage.sync.set({ initial_time: Date.now() });
    }
    elapsedTime=(Date.now()-result.initial_time);
    remaining_session_minutes = ((25*60000-elapsedTime)/60000).toFixed(2);
    remaining_session_seconds = (((25*60000-elapsedTime)%60000)/1000).toFixed(2);
  });
  document.getElementById("minutes").innerHTML = remaining_session_minutes;
  document.getElementById("seconds").innerHTML = remaining_session_seconds;
  console.log("smth");
  let playButton = document.getElementById("myButton");
  playButton.addEventListener("click", playPause);
  first_click=true;
};

function playPause() {
    chrome.storage.sync.get("initial_time", function (result) {
      if (first_click) {
        chrome.storage.sync.set({ initial_time: Date.now() });
        first_click=false;
      }
      elapsedTime=(Date.now()-result.initial_time);
      remaining_session_minutes = ((25*60000-elapsedTime)/60000).toFixed(0);
      remaining_session_seconds = (((25*60000-elapsedTime)%60000)/1000).toFixed(0);

      document.getElementById("minutes").innerHTML = remaining_session_minutes;
      document.getElementById("seconds").innerHTML = remaining_session_seconds;
      if (remaining_session_seconds <= 0) {
        if (remaining_session_minutes <= 0) {

          // Add the message to the html
          document.getElementById("done").innerHTML =
            "Session Completed!! You've worked hard:) Now you can take a break!";

          // Play the bell sound to tell the end of session
          // bell.play();
          // Reset the session seconds to 60
          document.getElementById("seconds").innerHTML = remaining_session_seconds;
          document.getElementById("minutes").innerHTML = remaining_session_minutes;

          // Make the html message div visible
          document.getElementById("done").classList.add("show_message");
        }
      }
    });
}

var intervalId = window.setInterval(function () {
  playPause();
}, 1000);

  // Functions

  // Function for second counter
  function secondsTimer() {
    remaining_session_minutes = (25*60000-elapsedTime)/60000;
    remaining_session_seconds = (25*60000-elapsedTime)%60000;

    // Add the seconds and minutes to the page
    document.getElementById("minutes").innerHTML = remaining_session_minutes;
    document.getElementById("seconds").innerHTML = remaining_session_seconds;


    if (remaining_session_seconds <= 0) {
      if (remaining_session_minutes <= 0) {

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! You've worked hard:) Now you can take a break!";

        // Play the bell sound to tell the end of session
        // bell.play();
        // Reset the session seconds to 60
        document.getElementById("seconds").innerHTML = remaining_session_seconds;
        document.getElementById("minutes").innerHTML = remaining_session_minutes;

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");
      }
    }
}
// });