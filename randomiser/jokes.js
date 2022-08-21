var id = 0;

function getJokes() {
    var displayText = document.getElementById('textStatement');
    displayText.style.display = 'block';
    
    var newJoke = '';

    switch(id%10) {
        case 0:
            newJoke = 'What\'s the best thing about Switzerland? <br> I don\'t know, but the flag is a big plus.';
            break;
        case 1:
            newJoke = 'Did you hear about the actor who fell through the floorboards? <br> He was just going through a stage.';
            break;
        case 2:
            newJoke = 'We are the champions!';
            break;
        case 3:
            newJoke = 'Did you hear about the claustrophobic astronaut? <br> He just needed a little space.';
            break;
        case 4:
            newJoke = 'Why don\'t scientists trust atoms? <br> Because they make up everything.';
            break;
        case 5:
            newJoke = 'What did the left eye say to the right eye? <br> Between you and me, something smells.';
            break;
        case 6:
            newJoke = 'What do you call a fake noodle? <br> An impasta.';
            break;
        case 7:
            newJoke = 'What do you call a pony with a cough? <br> A little horse.';
            break;
        case 8:
            newJoke = 'How do you make a tissue dance? <br> Put a little boogie in it.';
            break;
        case 9:
            newJoke = 'What do you call a magic dog? <br> A labracadabrador.';
            break;
    }

    // https://www.rd.com/list/short-jokes/

    displayText.innerHTML = newJoke;
    id++;
}

//Event Listeners

//When quote btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var quoteButton = document.getElementById("submit"); 

    quoteButton.addEventListener("click", function() {
        getJokes(); 
    });
}); 

//When back to main btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById("back"); 

    backButton.addEventListener("click", function() {
        window.location.href = "../popup.html";
    });
}); 