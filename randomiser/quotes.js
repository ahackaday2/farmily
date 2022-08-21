function getQuotes() {
    var displayText = document.getElementById('textStatement');
    displayText.style.display = 'block';
    
    var newQuote = '';
    var id = Math.floor(Math.random() * (10) + 0);

    switch(id) {
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

//Event Listeners
//When quote btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var quoteButton = document.getElementById("quote"); 

    quoteButton.addEventListener("click", function() {
        getQuotes(); 
    });
}); 

//When back to main btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById("back"); 

    backButton.addEventListener("click", function() {
        window.location.href = "../popup.html";
    });
}); 