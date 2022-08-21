const animals = ["cow", "pig", "sheep"];

let i = 0;

window.onload = function () {
    const forwardButton = document.getElementById("forward");
    const nextButton = document.getElementById("next");
    const animalImage = document.getElementById("animal");
    const submitButton = document.getElementById("submitButton");
    const container = document.getElementById("animalSelector");
    const form = document.getElementById('animalForm');

    nextButton.addEventListener("click", () => {
        if (i + 1 == 3) {
            i = 0;
        } else {
            i++;
        }

        animalImage.src = "./images/" + animals[i] + ".png";
    });

    forwardButton.addEventListener("click", () => {
        console.log("forward")
        if (i - 1 == -1) {
            i = 2;
        } else {
            i--;
        }

        animalImage.src = "./images/" + animals[i] + ".png";
    });

    submitButton.addEventListener("click", () => {
        /* nextButton.style.display = "none";
        forwardButton.style.display = "none";
        submitButton.style.display = "none";
 */
        chrome.storage.sync.set({ animal: animals[i] });
        chrome.storage.sync.get("animal", (result) => { console.log(result)});
        let div = document.createElement("div");
        //div.innerHTML = "You have selected " + animals[i];
        container.appendChild(div);
    });
};
