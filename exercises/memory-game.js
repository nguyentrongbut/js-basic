const cardsArray = [
    {
        name: "fire",
        img: "img/fire.png",
    },
    {
        name: "youtube",
        img: "img/youtube.png",
    },
    {
        name: "flash",
        img: "img/flash.png",
    },
    {
        name: "gift",
        img: "img/gift.png",
    },
    {
        name: "tron",
        img: "img/tron.png",
    },
    {
        name: "ufo",
        img: "img/ufo.png",
    },
    {
        name: "plant",
        img: "img/plant.png",
    },
    {
        name: "burger",
        img: "img/burger.png",
    },
];
let count = 0;
let previousCard;
let firstGuess = "";
let secondGuess = "";
const delay = 1000;
const grid = document.querySelector(".grid");
// array.sort(() => 0.5 - Math.random()); random array
const cardsArrayMerge = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());
cardsArrayMerge.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-name", item.name);
    // card.dataset.name = item.name;
    card.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(card);
});
function matchingCard() {
    const selects = document.querySelectorAll(".selected");
    [...selects].forEach((item) => item.classList.add("matched"));
}
function resetGuess() {
    count = 0;
    firstGuess = "";
    secondGuess = "";
    const selects = document.querySelectorAll(".selected");
    [...selects].forEach((item) => item.classList.remove("selected"));
}
grid.addEventListener("click", function (e) {
    const clicked = e.target;
    if (clicked.nodeName === "SECTION" || previousCard === clicked) {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.dataset.name;
            clicked.classList.add("selected");
        } else {
            secondGuess = clicked.dataset.name;
            clicked.classList.add("selected");
        }

        if (firstGuess !== "" && secondGuess !== "") {
            if (firstGuess === secondGuess) {
                // handle match here
                setTimeout(matchingCard, delay);
                setTimeout(resetGuess, delay);
            } else {
                setTimeout(resetGuess, delay);
            }
        }
    }
    previousCard = clicked;
});
