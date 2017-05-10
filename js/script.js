function newGame(e){
	console.log('nowa gra');
};
function playerPick(i){
};
var newGameBtn = document.getElementById('js-newGameElement');
newGameBtn.addEventListener('click', newGame);


var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function(i){
	playerPick('rock');
});
pickPaper.addEventListener('click', function(i){
	playerPick('paper');
});
pickScissors.addEventListener('click', function(i){
	playerPick('Scissors');
});

// ------------------------------------------------- logika gry --------------------------
var gameState = 'started', //możliwości : 'ended'  'notStarted'
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
var newGameElm = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements(){
	 switch(gameState) {
	    case 'started':
	        newGameElm.style.display = 'none';
	        pickElem.style.display = 'block';
	        pickElem.style.padding = '60px';
	        resultsElem.style.display = 'block';
	    break;
	    case 'ended':
	        newGameBtn.innerText = 'Jeszcze raz';                         //nie zmienia nazwy bnt
	    case 'notStarted':
	    default:
	        newGameElm.style.display = 'block';
	        pickElem.style.display = 'none';
	        resultsElem.style.display = 'none';
  };
}

//----------------------------------------------------   rozopczencie gry -----------------
var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

function newGame(){
	player.name = prompt('użytkowniku podaj swoje imię: ');
	alert('grasz jako ' +player.name);
	if(player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements(); 

		playerNameElem.innerText = player.name;
		setGamePoints(); // ta funkcja jeszcze nie powstała
	}
}
newGame();
//------------------ funkcion pick player,save in console
function playerPick(playerPick) {
   console.log(playerPick);
};

//------------------- function pick computer, save in console
function getComputerPick(){
	var possiblePicks = ['rock', 'paper', 'Scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

//------------------- display selection
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick){
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;
	//console.log(playerPickElem, computerPickElem);
}

//-------------------------------- who is wining
function chechRoundWinner(playerPick, computerPick){
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';   //zeruje wartości w tabeli wynikow

	var winnerIs = 'player';
	if(playerPick == computerPick){
		winnerIs = 'none' //player i copmuter wybrali takie same przedmioty
	}
	else if(
		(computerPick == 'rock' &&  playerPick == 'scissors') ||
		(computerPick == 'scissors' &&  playerPick == 'paper') ||
		(computerPick == 'paper' &&  playerPick == 'rock')){
		
		winnerIs = 'computer';
	}
	//------------------------------------------------------ write who is winner
	if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }
}
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    chechRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}