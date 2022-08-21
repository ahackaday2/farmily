
// Required variables

var session_seconds = "00";
var session_minutes = 25;

// Audio files
// var click_sound = new Audio("sounds/click.mp3");
// var bell = new Audio("sounds/bell.mp3");

// Global Variables
var minutes_interval;
var seconds_interval;
var first_click = true;
var second_click = false;
var third_click = false;

// Starting template for the timer
document.getElementById("myTemplate").onload = function() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
};

document.getElementById("myButton").onclick = function() {
  //PAUSE & PLAY FEATURE
  if (first_click && !second_click && !third_click) {
      // click_sound.play();
      first_click = false;
      // Change the minutes and seconds to starting time
      session_minutes = 24;
      session_seconds = 59;
      // Start the countdown
      // minutes_interval = setInterval(minutesTimer, 60000); //60s
      seconds_interval = setInterval(secondsTimer, 1000);  //1s
      second_click = true;
  } else if (second_click && !third_click) { //PAUSE
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    // click_sound.play();
    first_click = false;
    second_click = false;
    third_click = true;
  } else if (third_click && !second_click) { //RESUME
    // minutes_interval = setInterval(minutesTimer, 60000); //60s
    seconds_interval = setInterval(secondsTimer, 1000);  //1s
    // click_sound.play();
    first_click = false;
    second_click = true;
    third_click = false;
  }
    
  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Functions
  // Function for minute counter
  // function minutesTimer() {
  //   session_minutes = session_minutes - 1;
  //   document.getElementById("minutes").innerHTML = session_minutes;
  // }

  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! You've worked hard:) Now you can take a break!";

        // Play the bell sound to tell the end of session
        // bell.play();
        first_click = false;
        second_click = false;
        third_click = false;

        // Reset the session seconds to 60
        document.getElementById("seconds").innerHTML = session_seconds;
        document.getElementById("minutes").innerHTML = session_minutes;

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");
      }
    }
    // If minute needs to decrement by 1
    if (session_seconds <= -1 && session_minutes > 0) {
      // Reset the session seconds to 60
      session_seconds = 59;
      document.getElementById("seconds").innerHTML = session_seconds;

      session_minutes = session_minutes - 1;
      document.getElementById("minutes").innerHTML = session_minutes;
    }
  }
}
// });