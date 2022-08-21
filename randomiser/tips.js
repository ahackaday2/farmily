var id = 0;

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

//Event Listeners

//When quote btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var quoteButton = document.getElementById("submit"); 

    quoteButton.addEventListener("click", function() {
        getTips(); 
    });
}); 

//When back to main btn clicked
document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById("back"); 

    backButton.addEventListener("click", function() {
        window.location.href = "../popup.html";
    });
}); 