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

//Conteúdo da carta
let contentCards = "";


//embaralha cartas
const shuffle = () => {
    return Math.random() - 0.5;
}
cards.sort(shuffle);

//Definir quantas cartas
let numCards = parseInt(prompt("Deseja jogar com quantas cartas? Insira um valor par entre de 4 a 14"));

while (numCards < 4 || numCards > 14 || numCards % 2 != 0) {
    numCards = parseInt(prompt("Informe um valor válido (4~14)"))
}

// set das imagens nas cartas a serem usadas
const setCardsInGame = (cards) => { // function setCardsInGame(cards)
    cards.length = numCards / 2;
    cards.forEach(card => {
        cardsInGame.push(card);
        cardsInGame.push(card);
    });
    cardsInGame.sort(shuffle);
    console.log(cardsInGame)
}

//carrega o conteúdo do html
const loadCardsInGame = (cardsInGame, classElement) => {

    cardsInGame.forEach(card => {
        contentCards +=
            `<div class="card" onclick="rotateCard(this)">
                <div class="frente face">
                    <img src="img/front.png" alt="Papagaio" />
            </div>
            <div class="verso face">
                <img src="${card}" alt="Papagaio do balacobaco" />
            </div>
            </div>`;
    });
    document.querySelector(`.${classElement}`).innerHTML = contentCards;
}

setCardsInGame(cards)
loadCardsInGame(cardsInGame, "card-container");

const rotateCard = (cardToRotate) => {
    cardToRotate.classList.toggle("rotate");
}



