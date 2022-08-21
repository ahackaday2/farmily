var isQuote = false;
var isJoke = false;
var isTip = false;
var id = 0;

function getQuotes() {
    var displayText = document.getElementById('textStatement');
    //var displaySetting = displayText.style.display;
    displayText.style.display = 'block';
    
    var newQuote = '';

    switch(id%10) {
        case 0:
            newQuote = 'The secret of getting ahead is getting started. - Mark Twain';
            break;
        case 1:
            newQuote = 'All our dreams can come true, if we have the courage to pursue them. - Walt Disney';
            break;
        case 2:
            newQuote = 'It\'s hard to beat a person who never gives up. - Babe Ruth';
            break;
        case 3:
            newQuote = 'If people are doubting how far you can go, go so far that you can\'t hear them anymore. — Michele Ruiz';
            break;
        case 4:
            newQuote = 'Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE. — Joss Whedon';
            break;
        case 5:
            newQuote = 'Dreams don\'t work unless you do. ― John C. Maxwell';
            break;
        case 6:
            newQuote = 'Begin anywhere. ― John Cage';
            break;
        case 7:
            newQuote = 'Go the extra mile. It\'s never crowded there. ― Dr. Wayne D. Dyer';
            break;
        case 8:
            newQuote = 'Trust yourself that you can do it and get it. ― Baz Luhrmann';
            break;
        case 9:
            newQuote = 'I can and I will. Watch me. ― Carrie Green';
            break;
    }

    // https://sg.oberlo.com/blog/motivational-quotes

    displayText.innerHTML = newQuote;
    id++;
}

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

function getTips() {
    var displayText = document.getElementById('textStatement');
    //var displaySetting = displayText.style.display;
    displayText.style.display = 'block';
    
    var newTip = '';

    switch(id%10) {
        case 0:
            newTip = 'Space out your studying';
            break;
        case 1:
            newTip = 'Practice, practice, practice!';
            break;
        case 2:
            newTip = 'Don\'t just reread books and notes';
            break;
        case 3:
            newTip = 'Mistakes are okay — as long as you learn from them';
            break;
        case 4:
            newTip = 'Mix it up';
            break;
        case 5:
            newTip = 'Use pictures';
            break;
        case 6:
            newTip = 'Find examples';
            break;
        case 7:
            newTip = 'Dig deeper';
            break;
        case 8:
            newTip = 'Test yourself';
            break;
        case 9:
            newTip = 'Make a plan — and stick to it';
            break;
    }

    // https://www.snexplores.org/article/top-10-tips-study-smarter-not-longer-study-skills

    displayText.innerHTML = newTip;
    id++;
}