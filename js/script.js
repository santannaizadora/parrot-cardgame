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
let auxComparator = [];
let counter = 0;
let counterPairs = 0;
const cardsInGame = [];
let contentCards = "";

const shuffle = () => {
    return Math.random() - 0.5;
}
cards.sort(shuffle);

let numCards = parseInt(prompt("Deseja jogar com quantas cartas? Insira um valor par entre de 4 a 14"));

const startGame = () => {
    while (numCards < 4 || numCards > 14 || numCards % 2 != 0) {
        numCards = parseInt(prompt("Informe um valor válido (4~14)"))
    }
}

startGame();

const setCardsInGame = (cards) => {
    cards.length = numCards / 2;
    cards.forEach(card => {
        cardsInGame.push(card);
        cardsInGame.push(card);
    });
    cardsInGame.sort(shuffle);
    console.log(cardsInGame)
}

const loadCardsInGame = (cardsInGame, classElement) => {

    cardsInGame.forEach(card => {
        contentCards +=
            `<div class="card" onclick="turnCard(this)">
                <div class="front-face face">
                    <img src="img/front.png" alt="Papagaio" />
            </div>
            <div class="back-face face">
                <img src="${card}" alt="Papagaio do balacobaco" />
            </div>
            </div>`;
    });
    document.querySelector(`.${classElement}`).innerHTML = contentCards;
}

setCardsInGame(cards)
loadCardsInGame(cardsInGame, "card-container");

function turnCard(cardToRotate) {
    if (!cardToRotate.classList.contains('turned') && !cardToRotate.classList.contains('selected')) {
        cardToRotate.classList.add('rotate', 'selected')
        cardComparator.push(cardToRotate)
        counter++
        document.getElementById('plays').innerHTML = `${counter}`
        console.log(counter);
    }

    if (cardComparator.length === 2) {
        verifyCards()
    }
}

function verifyCards() {
    cardComparator[0].querySelector('.back-face')
    cardComparator[1].querySelector('.back-face')
    if (cardComparator[0].innerHTML == cardComparator[1].innerHTML) {
        console.log('parabains');
        cardComparator[0].classList.add('turned')
        cardComparator[1].classList.add('turned')
        cardComparator.splice(0)
        cardComparator.splice(1)
        counterPairs++;
        verifyWin()
    } else if (cardComparator[1] != undefined) {
        console.log('Erroou');
        setTimeout(() => {
            cardComparator[0].classList.remove('rotate', 'selected')
            cardComparator[1].classList.remove('rotate', 'selected')
            cardComparator.splice(0)
            cardComparator.splice(1)
        }, 1000);
    }
}

const verifyWin = () => {
    setTimeout(() => {
        if (counterPairs === numCards / 2) {
            alert('PARABÉNS!!!')
        }
    }, 400);
}
