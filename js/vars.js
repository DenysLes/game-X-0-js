const container = document.querySelector(".js-content");

const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

let player = "X";
let historyX = [];
let history0 = [];


function createMarkup() {
let markup = "";
    for (let i = 1; i < 10; i += 1) {
        markup += `<div class="item js-item" data-id = "${i}"></div>`;
    }
    container.innerHTML = markup;
}
createMarkup();

container.addEventListener('click', handlerClik)

function handlerClik(evt) {
    const { target } = evt;
    if (!target.classList.contains("js-item") || target.textContent) {
        return;
    }

    const id = Number(target.dataset.id);
    let result = false;

    if (player === "X") {
        historyX.push(id);
        result = isWinner(historyX)
    } else {
        history0.push(id);
        result = isWinner(history0)
    }

   target.textContent = player;

    const isEndGame = (history0.length + historyX.length === 9);

    if (result) {
        console.log(`Winner player ${player} ! 😎`);
        // alert('WINNER!!!')
        resetGame();
        return;
    } else if (isEndGame) {
        console.log(`Try again 😉`);
        // alert(' NO WINNER! TRY AGAIN!!')
        resetGame();
        return;
    }
    
    player = player === "X" ? "0" : "X";
}


function isWinner(arr) {
    return wins.some((item) => item.every((id) => arr.includes(id)));
}

function resetGame() {
    createMarkup();
    historyX = [];
    history0 = [];
    player = "X"; 
}




