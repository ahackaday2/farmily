const animals = ["cow", "pig", "sheep"];

let i = 0;

window.onload = function () {
    const homeButton = document.getElementById("homeButton");
    const forwardButton = document.getElementById("forward");
    const nextButton = document.getElementById("next");
    const animalImage = document.getElementById("animal");
    const submitButton = document.getElementById("submitButton");
    const name = document.getElementById("name");

    homeButton.addEventListener("click", () => window.location.href = "../homepopup/popup.html");

    nextButton.addEventListener("click", () => {
        if (i + 1 == 3) {
            i = 0;
        } else {
            i++;
        }

        animalImage.src = "../images/" + animals[i] + ".png";
    });

    forwardButton.addEventListener("click", () => {
        console.log("forward")
        if (i - 1 == -1) {
            i = 2;
        } else {
            i--;
        }

        animalImage.src = "../images/" + animals[i] + ".png";
    });

    submitButton.addEventListener("click", () => {
        nextButton.style.display = "none";
        forwardButton.style.display = "none";
        submitButton.style.display = "none";
        chrome.storage.sync.set({ animal: animals[i] });
        chrome.storage.sync.set({ name: name.value });
       /*  let div = document.createElement("div");
        div.innerHTML = "You have selected " + animals[i] + " named " + name.value;
        container.appendChild(div); */
    });
};
