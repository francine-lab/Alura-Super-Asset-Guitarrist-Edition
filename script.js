var cardNoel = {
    name: "Noel Gallagher",
    gif: "./gifs/noel-gallagher.gif",
    // audio: "",
    attributes: {
        melody: 90,
        velocity: 40,
        charism: 10
    }
};

var cardJimi = {
    name: "Jimi Hendrix",
    gif: "./gifs/jimi-hendrix.gif",
    // audio: "",
    attributes: {
        melody: 70,
        velocity: 80,
        charism: 85
    }
};

var cardBuckethead = {
    name: "Buckethead",
    gif: "./gifs/buckethead.gif",
    // audio: "",
    attributes: {
        melody: 100,
        velocity: 100,
        charism: 100
    }
};

var cardZack = {
    name: "Zack Wilde",
    gif: "./gifs/zack-wilde.gif",
    // audio: "",
    attributes: {
        melody: 85,
        velocity: 85,
        charism: 60
    }
};

var cardGeorge = {
    name: "George Harrison",
    gif: "./gifs/george-harrison.gif",
    // audio: "",
    attributes: {
        melody: 95,
        velocity: 55,
        charism: 85
    }
};

var cardSlash = {
    name: "Slash",
    gif: "./gifs/slash.gif",
    // audio: "",
    attributes: {
        melody: 83,
        velocity: 78,
        charism: 65
    }
};

var cardJimmy = {
    name: "Jimmy Page",
    gif: "./gifs/jimmy-page.gif",
    // audio: "",
    attributes: {
        melody: 85,
        velocity: 85,
        charism: 80
    }
};

var cardAngus = {
    name: "Angus Young",
    gif: "./gifs/angus-young.gif",
    // audio: "",
    attributes: {
        melody: 67,
        velocity: 82,
        charism: 78
    }
};

var cardEric = {
    name: "Eric Clapton",
    gif: "./gifs/eric-clapton.gif",
    // audio: "",
    attributes: {
        melody: 65,
        velocity: 63,
        charism: 88
    }
};

var cardKeith = {
    name: "Keith Richards",
    gif: "./gifs/keith-richards.gif",
    // audio: "",
    attributes: {
        melody: 80,
        velocity: 60,
        charism: 70
    }
};

var cardDavid = {
    name: "David Gilmour",
    gif: "./gifs/david-gilmour.gif",
    // audio: "",
    attributes: {
        melody: 90,
        velocity: 87,
        charism: 70
    }
};

var cardEddie = {
    name: "Eddie Van Halen",
    gif: "./gifs/eddie-van-halen.gif",
    // audio: "",
    attributes: {
        melody: 70,
        velocity: 95,
        charism: 70
    }
};

var computerCard;
var playerCard;
var cards = [cardNoel, cardJimi, cardBuckethead, cardZack, cardGeorge, cardSlash, cardJimmy, cardAngus, cardEric, cardKeith, cardDavid, cardEddie];

var playerPoints = 0;
var computerPoints = 0;

scoreboardUpdate();
cardsAmountUpdate();


// Display how many cards are still available in the game
function cardsAmountUpdate() {
    var divCardsAmount = document.getElementById('cards-amount');
    var html = "Number of cards in the game: " + cards.length;
    divCardsAmount.innerHTML = html;
}


// Display the score for both players
function scoreboardUpdate() {
    var divScoreboard = document.getElementById('scoreboard');
    var html = "Player " + playerPoints + "/" + computerPoints + " Computer";
    divScoreboard.innerHTML = html;
}


// Select one different card for each player
function drawCard() {
    var computerCardNumber = parseInt(Math.random() * cards.length);
    computerCard = cards[computerCardNumber];
    // Remove this card from the game
    cards.splice(computerCardNumber, 1);
    var playerCardNumber = parseInt(Math.random() * cards.length);
    playerCard = cards[playerCardNumber];
    // Remove this card from the game
    cards.splice(playerCardNumber, 1);
    // Select which button should work
    document.getElementById('btnDraw').disabled = true;
    document.getElementById('btnPlay').disabled = false;
    displayPlayerCard();
}


// Display which card was drawed to the player
function displayPlayerCard() {
    var divPlayerCard = document.getElementById("player-card");
    var frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divPlayerCard.style.backgroundImage = `url(${playerCard.gif})`;
    // Display the name of the card
    var name = `<p class="card-subtitle">${playerCard.name}</p>`;
    // Display the attributes of the card
    var text = "";
    for (var attribute in playerCard.attributes) {
        text += "<input type='radio' name='attribute' value='" + attribute + "'>" + attribute + " " + playerCard.attributes[attribute] + "<br>";
    }
    var html = "<div id='options' class='card-status'>";
    divPlayerCard.innerHTML = frame + name + html + text + '</div>';
}


// Display which card was drawed to the computer
function displayComputerCard() {
    var divComputerCard = document.getElementById("computer-card");
    var frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divComputerCard.style.backgroundImage = `url(${computerCard.gif})`;
    var name = `<p class="card-subtitle">${computerCard.name}</p>`;
    var text = "";
    for (var attribute in computerCard.attributes) {
        text += "<p type='text' name='attribute' value='" + attribute + "'>" + attribute + " " + computerCard.attributes[attribute] + "<br>";
    }
    var html = "<div id='options' class='card-status --spacing'>";
    divComputerCard.innerHTML = frame + name + html + text + '</div>';
}


// Play the winner song - this function works with mp3 songs
// Function disabled because of the music copyright 
// function playAudio(winner) {
//     var audio = new Audio("./audios/Oasis - Wonderwall.mp3");
//     audio.play()
// }


// Get the attribute that the player chose in the game
function getSelectedAttribute() {
    var radioAttribute = document.getElementsByName('attribute');
    for (var i = 0; i < radioAttribute.length; i++) {
        if (radioAttribute[i].checked) {
            return radioAttribute[i].value;
        }
    }
}


// Compare cards, add points
function play() {
    var divResult = document.getElementById("result");
    var selectedAttribute = getSelectedAttribute();
    if (playerCard.attributes[selectedAttribute] > computerCard.attributes[selectedAttribute]) {
        htmlResult = '<p class="final-result">You won!</p>';
        // playAudio(playerCard);
        playerPoints++;
    } else if (playerCard.attributes[selectedAttribute] < computerCard.attributes[selectedAttribute]) {
        htmlResult = '<p class="final-result">You lost!</p>';
        // playAudio(computerCard);
        computerPoints++;
    } else {
        htmlResult = '<p class="final-result">It was a tie!</p>';
    }
    // Display a message in the end of the game
    if (cards.length == 0) {
        alert("Final score!!!");
        if (playerPoints > computerPoints) {
            htmlResult = '<p class="final-result">You won!</p>';
        } else if (computerPoints > playerPoints) {
            htmlResult = '<p class="final-result">You lost!</p>';
        } else {
            htmlResult = '<p class="final-result">It was a tie!</p>';
        }
    // Set the next-round button
    } else {
        document.getElementById('btnNextRound').disabled = false;
    }
    // Display the result
    divResult.innerHTML = htmlResult;
    // Set the play button
    document.getElementById('btnPlay').disabled = true;
    // Display the correct score
    scoreboardUpdate();
    // Display the computer card
    displayComputerCard();
    // Display how many cards are still available in the game
    cardsAmountUpdate();
}


// Enable a new round
function nextRound() {
    var divCards = document.getElementById('cards');
    divCards.innerHTML = `<div id="player-card" class="card"></div> <div id="computer-card" class="card"></div>`;
    // Select which button should work
    document.getElementById('btnDraw').disabled = false;
    document.getElementById('btnPlay').disabled = true;
    document.getElementById('btnNextRound').disabled = true;
    // Display result
    var divResult = document.getElementById('result');
    divResult.innerHTML = "";
}