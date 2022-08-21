function getJokes() {
    var displayText = document.getElementById('textStatement');
    displayText.style.display = 'block';
    
    var newJoke = '';
    var max = 9;
    var min = 0;
    var id = Math.floor(Math.random() * (max - min + 1) + min);

    switch(id) {
        case 0:
            newJoke = 'What\'s the best thing about Switzerland? <br> <br> I don\'t know, but the flag is a big plus.';
            break;
        case 1:
            newJoke = 'Did you hear about the actor who fell through the floorboards? <br> <br> He was just going through a stage.';
            break;
        case 2:
            newJoke = 'What did one traffic light say to the other? <br> <br> Stop looking! I\'m changing!';
            break;
        case 3:
            newJoke = 'Did you hear about the claustrophobic astronaut? <br> <br> He just needed a little space.';
            break;
        case 4:
            newJoke = 'Why don\'t scientists trust atoms? <br> <br> Because they make up everything.';
            break;
        case 5:
            newJoke = 'What did the left eye say to the right eye? <br> <br> Between you and me, something smells.';
            break;
        case 6:
            newJoke = 'What do you call a fake noodle? <br> <br> An impasta.';
            break;
        case 7:
            newJoke = 'What do you call a pony with a cough? <br> <br> A little horse.';
            break;
        case 8:
            newJoke = 'How do you make a tissue dance? <br> <br> Put a little boogie in it.';
            break;
        case 9:
            newJoke = 'What do you call a magic dog? <br> <br> A labracadabrador.';
            break;
    }

    // https://www.rd.com/list/short-jokes/

    displayText.innerHTML = newJoke;
    id++;
}

//Event Listeners
//When joke btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var jokeButton = document.getElementById("joke"); 

    jokeButton.addEventListener("click", function() {
        getJokes(); 
    });
}); 

//When back to main btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById("back"); 

    backButton.addEventListener("click", function() {
        window.location.href = "../randomiser/popup.html";
    });
}); 