//Objeto com as cartas
const cards = [
    'img/bobrossparrot.gif',
    'img/explodyparrot.gif',
    'img/fiestaparrot.gif',
    'img/metalparrot.gif',
    'img/revertitparrot.gif',
    'img/tripletsparrot.gif',
    'img/unicornparrot.gif'
]

//Armazena as cartas usadas no game
const cardsInGame = [];


//Definir quantas cartas
let numCards = parseInt(prompt("Deseja jogar com quantas cartas? Insira um valor par entre de 4 a 14"));

while (numCards < 4 || numCards > 14 || numCards % 2 != 0) {
    numCards = parseInt(prompt("Informe um valor válido (4~14)"))
}

// set nas cartas a serem usadas
const setCardsInGame = (cards) => {
    cards.length = numCards / 2;
    cards.forEach(card => {
        cardsInGame.push(card);
        cardsInGame.push(card);
        console.log(cardsInGame)
    });

    cardsInGame.sort(comparador);

    function comparador() {
        return Math.random() - 0.5;
    }
}

//carrega o conteúdo do html
const loadCardsInGame = (cardsInGame, classElement) => {

    let contentCards = "";
    cardsInGame.forEach(card => {
        contentCards +=
            `<div class="card">
                <div class="front-face face">
                    <img src="./img/front.png" alt="papagaio do balacobaco">
            </div>
                <div class="back-face face">
                    <img src="${card.image}" alt="papagaio do balacobaco">
                </div>
            </div>`;
    });

    document.querySelector(`.${classElement}`).innerHTML = contentCards;
}

setCardsInGame(cards)
loadCardsInGame(cardsInGame, "card-container");