var cardNoel = {
    name: "Noel Gallegher",
    image: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    audio: "",
    attributes: {
        melody: 90,
        velocity: 40,
        charism: 10
    }
};

var cardJimi = {
    name: "Jimi Hendrix",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 80,
        velocity: 80,
        charism: 80
    }
};

var cardChimbinha = {
    name: "Chimbinha",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 5,
        velocity: 90,
        charism: 70
    }
};

var cardBuckethead = {
    name: "Buckethead",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 80,
        velocity: 90,
        charism: 95
    }
};

var cardZack = {
    name: "Zack Wilde",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 85,
        velocity: 85,
        charism: 60
    }
};

var cardGeorge = {
    name: "George Harrison",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 95,
        velocity: 55,
        charism: 85
    }
};

var cardSlash = {
    name: "Slash",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 95,
        velocity: 85,
        charism: 75
    }
};

var cardJimmy = {
    name: "Jimmy Page",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 85,
        velocity: 85,
        charism: 80
    }
};

var cardAngus = {
    name: "Angus Young",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 75,
        velocity: 80,
        charism: 90
    }
};

var cardEdge = {
    name: "The Edge",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 70,
        velocity: 70,
        charism: 90
    }
};

var cardEric = {
    name: "Eric Clapton",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 65,
        velocity: 65,
        charism: 85
    }
};

var cardKeith = {
    name: "Keith Richards",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 80,
        velocity: 60,
        charism: 70
    }
};

var cardDavid = {
    name: "David Gilmour",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 100,
        velocity: 100,
        charism: 100
    }
};

var cardEddie = {
    name: "Eddie Van Halen",
    image: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    audio: "",
    attributes: {
        melody: 70,
        velocity: 95,
        charism: 70
    }
};

var computerCard;
var playerCard;
var cards = [cardNoel, cardJimi, cardChimbinha, cardBuckethead, cardZack, cardGeorge, cardSlash, cardJimmy, cardAngus, cardEdge, cardEric, cardKeith, cardDavid, cardEddie];
var playerPoints = 0;
var computerPoints = 0;

scoreboardUpdate();
cardsAmountUpdate();


function cardsAmountUpdate() {
    var divCardsAmount = document.getElementById('cards-amount');
    var html = "Number of cards in the game: " + cards.length;
    divCardsAmount.innerHTML = html;
}


function scoreboardUpdate() {
    var divScoreboard = document.getElementById('scoreboard');
    var html = "Player " + playerPoints + "/" + computerPoints + " Computer";
    divScoreboard.innerHTML = html;
}


function drawCard() {
    var computerCardNumber = parseInt(Math.random() * cards.length);
    computerCard = cards[computerCardNumber];
    cards.splice(computerCardNumber, 1);
    var playerCardNumber = parseInt(Math.random() * cards.length);
    playerCard = cards[playerCardNumber];
    cards.splice(playerCardNumber, 1);
    document.getElementById('btnDraw').disabled = true;
    document.getElementById('btnPlay').disabled = false;
    displayPlayerCard();
}


function displayPlayerCard() {
    var divPlayerCard = document.getElementById("player-card");
    var frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divPlayerCard.style.backgroundImage = `url(${playerCard.image})`;
    var name = `<p class="card-subtitle">${playerCard.name}</p>`;
    var text = "";
    for (var attribute in playerCard.attributes) {
        text += "<input type='radio' name='attribute' value='" + attribute + "'>" + attribute + " " + playerCard.attributes[attribute] + "<br>";
    }
    var html = "<div id='options' class='card-status'>";
    divPlayerCard.innerHTML = frame + name + html + text + '</div>';
}


function getSelectedAttribute() {
    var radioAttribute = document.getElementsByName('attribute');
    for (var i = 0; i < radioAttribute.length; i++) {
        if (radioAttribute[i].checked) {
            return radioAttribute[i].value;
        }
    }
}


function play() {
    var divResult = document.getElementById("result");
    var selectedAttribute = getSelectedAttribute();
    if (playerCard.attributes[selectedAttribute] > computerCard.attributes[selectedAttribute]) {
        htmlResult = '<p class="final-result">You won!</p>';
        playerPoints++;
    } else if (playerCard.attributes[selectedAttribute] < computerCard.attributes[selectedAttribute]) {
        htmlResult = '<p class="final-result">You lost!</p>';
        computerPoints++;
    } else {
        htmlResult = '<p class="final-result">It was a tie!</p>';
    }
    if (cards.length == 0) {
        alert("Game over");
        if (playerPoints > computerPoints) {
            htmlResult = '<p class="final-result">You won!</p>';
        } else if (computerPoints > playerPoints) {
            htmlResult = '<p class="final-result">You lost!</p>';
        } else {
            htmlResult = '<p class="final-result">It was a tie!</p>';
        }
    } else {
        document.getElementById('btnNextRound').disabled = false;
    }

    divResult.innerHTML = htmlResult;
    document.getElementById('btnPlay').disabled = true;
    scoreboardUpdate();
    displayComputerCard();
    cardsAmountUpdate();
}

function displayComputerCard() {
    var divComputerCard = document.getElementById("computer-card");
    var frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divComputerCard.style.backgroundImage = `url(${computerCard.image})`;
    var name = `<p class="card-subtitle">${computerCard.name}</p>`;
    var text = "";
    for (var attribute in computerCard.attributes) {
        text += "<p type='text' name='attribute' value='" + attribute + "'>" + attribute + " " + computerCard.attributes[attribute] + "<br>";
    }
    var html = "<div id='options' class='card-status --spacing'>";
    divComputerCard.innerHTML = frame + name + html + text + '</div>';
}

function nextRound() {
    var divCards = document.getElementById('cards');
    divCards.innerHTML = `<div id="player-card" class="card"></div> <div id="computer-card" class="card"></div>`;
    document.getElementById('btnDraw').disabled = false;
    document.getElementById('btnPlay').disabled = true;
    document.getElementById('btnNextRound').disabled = true;
    var divResult = document.getElementById('result');
    divResult.innerHTML = "";
}