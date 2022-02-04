const cards = [
    'img/bobrossparrot.gif',
    'img/explodyparrot.gif',
    'img/fiestaparrot.gif',
    'img/metalparrot.gif',
    'img/revertitparrot.gif',
    'img/tripletsparrot.gif',
    'img/unicornparrot.gif'
]
let cardsInGame = [];
let cardComparator = [];
let canClick = true;
let counter = 0;
let counterPairs = 0;
let contentCards = "";
let gameWin = false;
let timer = 0;
let initialTime = 0;
let currentTime = 0;
let numCards = 0;
let message = "Deseja jogar com quantas cartas? Insira um valor par entre de 4 a 14";

const shuffle = () => {
    return Math.random() - 0.5;
}

const startGame = () => {
    numCards = getNumCards();
    if (numCards < 4 || numCards > 14 || numCards % 2 != 0) {
        message = "Informe um valor válido (4~14)";
        startGame();
    } else {
        cards.sort(shuffle);
        setCardsInGame(cards);
        loadCardsInGame(cardsInGame);
    }
}

const getNumCards = () => {
    return parseInt(prompt(message));
}

const setCardsInGame = (cards) => {
    images = cards.slice(0, (numCards / 2));
    images.forEach(card => {
        cardsInGame.push(...[card, card]);
    });
    cardsInGame.sort(shuffle);
}

const loadCardsInGame = (cardsInGame) => {
    cardsInGame.forEach(card => {
        contentCards +=
            `<div class="card" onclick="turnCard(this)" data-identifier="card">
                <div class=" front-face face" data-identifier="front-face">
                    <img src="${card}" alt="Papagaio do balacobaco" />
                </div>
                <div class="back-face face" data-identifier="back-face">
                    <img src="img/front.png" alt="Papagaio" />
                </div>
            </div>`;
    });
    document.querySelector(`.card-container`).innerHTML = contentCards;
}

const turnCard = (cardToRotate) => {
    if (canClick && !cardToRotate.classList.contains('turned')) {
        cardToRotate.classList.add('rotate', 'turned');
        cardComparator.push(cardToRotate);
        attCounter()
        if (counter == 1) {
            gameWin = false;
            startChronometer();
        }
        if (cardComparator.length === 2) {
            verifyCards();
        }
    }
}

const verifyCards = () => {
    if (cardComparator[0].innerHTML == cardComparator[1].innerHTML) {
        canClick = false;
        cardComparator.forEach(item => {
            item.classList.add('turned');
        });
        cardComparator = [];
        counterPairs++;
        verifyWin();
        canClick = true;
    } else {
        canClick = false;
        setTimeout(() => {
            cardComparator.forEach(item => {
                item.classList.remove('rotate', 'turned');
            });
            cardComparator = [];
            canClick = true;
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

const attCounter = () => {
    counter++;
    document.getElementById('plays').innerHTML = `${counter}`;
}

const attTimer = () => {
    document.getElementById('timer').innerHTML = `${timer}`;
}

const resetGame = () => {
    document.querySelector('.card-container').innerHTML = '';
    document.getElementById('timer').innerHTML = '0';
    contentCards = "";
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
            alert(`Você ganhou em ${counter} jogadas e ${timer} segundos!`);
            const restart = prompt("Deseja jogar novamente? Digite s para recomeçar");
            if (restart === 's') {
                resetGame();
            }
        }
    }, 400);
}

startGame();