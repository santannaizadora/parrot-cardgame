const cards = [
    'img/bobrossparrot.gif',
    'img/explodyparrot.gif',
    'img/fiestaparrot.gif',
    'img/metalparrot.gif',
    'img/revertitparrot.gif',
    'img/tripletsparrot.gif',
    'img/unicornparrot.gif'
]
let cardComparator = [];
let click = true;
let counter = 0;
let counterPairs = 0;
let cardsInGame = [];
let contentCards = "";
let gameWin = false;
let timer = 0;
let seg = 0;
let initialTime = 0;
let currentTime = 0;

const shuffle = () => {
    return Math.random() - 0.5;
}

let numCards = parseInt(prompt("Deseja jogar com quantas cartas? Insira um valor par entre de 4 a 14"));

const startGame = () => {
    while (numCards < 4 || numCards > 14 || numCards % 2 != 0) {
        numCards = parseInt(prompt("Informe um valor válido (4~14)"))
    }
    cards.sort(shuffle);
    setCardsInGame(cards)
    loadCardsInGame(cardsInGame);
}

const setCardsInGame = (cards) => {
    images = cards.slice(0, (numCards / 2))
    images.forEach(card => {
        cardsInGame.push(card);
        cardsInGame.push(card);
    });
    cardsInGame.sort(shuffle);
}

const loadCardsInGame = (cardsInGame) => {
    cardsInGame.sort(shuffle);
    cardsInGame.forEach(card => {
        contentCards +=
            `<div class="card" onclick="turnCard(this)" data-identifier="card">
                <div class=" front-face face" data-identifier="back-face">
                    <img src="${card}" alt="Papagaio do balacobaco" />
                </div>
                <div class="back-face face" data-identifier="front-face">
                    <img src="img/front.png" alt="Papagaio" />
                </div>
            </div>`;
    });
    document.querySelector(`.card-container`).innerHTML = contentCards;
}

function turnCard(cardToRotate) {
    if (click && !cardToRotate.classList.contains('turned') && !cardToRotate.classList.contains('selected')) {
        cardToRotate.classList.add('rotate', 'selected')
        cardComparator.push(cardToRotate)
        counter++
        document.getElementById('plays').innerHTML = `${counter}`
        if (counter == 1) {
            gameWin = false
            startChronometer();
        }

        if (cardComparator.length === 2) {
            verifyCards()
        }
    }
}

function verifyCards() {
    if (cardComparator[0].innerHTML == cardComparator[1].innerHTML) {
        click = false;
        cardComparator[0].classList.add('turned')
        cardComparator[1].classList.add('turned')
        cardComparator.splice(0)
        cardComparator.splice(1)
        counterPairs++;
        click = true;
        verifyWin()
    } else {
        click = false;
        setTimeout(() => {
            cardComparator[0].classList.remove('rotate', 'selected')
            cardComparator[1].classList.remove('rotate', 'selected')
            cardComparator.splice(0)
            cardComparator.splice(1)
            click = true;
        }, 1000);
    }
}

const startChronometer = () => {
    initialTime = new Date();
    setTimeout(chronometer, 1000);
}

const chronometer = () => {
    if (!gameWin) {
        currentTime = new Date();

        timer = Math.trunc((currentTime - initialTime) / 1000);
        attTimer();
        setTimeout(chronometer, 1000);
    }
}

const attTimer = () => {
    let elemento = document.getElementById('timer')
    elemento.innerHTML = `${timer}`;
}

const resetGame = () => {
    document.querySelector('.card-container').innerHTML = '';
    document.getElementById('timer').innerHTML = '0';
    contentCards = ""
    numCards = 0;
    counterPairs = 0;
    counter = 0;
    cardsInGame = [];
    timer = 0;
    initialTime = 0;
    currentTime = 0;
    startGame();
}

const verifyWin = () => {
    setTimeout(() => {
        if (counterPairs === numCards / 2) {
            gameWin = true;
            alert(`Você ganhou em ${counter} jogadas e ${timer} segundos!`)
            let restart = prompt("Deseja jogar novamente? Digite s para recomeçar")
            if (restart === 's') {
                resetGame();
            }
        }
    }, 400);
}

startGame();