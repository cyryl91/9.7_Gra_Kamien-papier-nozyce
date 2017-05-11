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

pickRock.addEventListener('click', function(){
	playerPick('rock');
});
pickPaper.addEventListener('click', function(){
	playerPick('paper');
});
pickScissors.addEventListener('click', function(){
	playerPick('Scissors');
});

// ------------------------------------------------- logika gry --------------------------
var gameState = 'notStarted', //możliwości : 'ended'  'started'
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
  }
}
setGameElements(gameState);

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
		setGamePoints();
	}
}

//------------------ funkcion pick player,save in console
function playerPick(playerPick) {
   console.log(playerPick);
}

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

	checkRoundWinner(playerPick, computerPick);
}

var remisElem = document.getElementById('js-remis');

//-------------------------------- who is wining
function checkRoundWinner(playerPick, computerPick){
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';
	remisElem.innerHTML = '';  //zeruje wartości w tabeli wynikow

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
        playerResultElem.innerHTML = "---WYGRANA---";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "---WYGRANA---";
        computer.score++;
    }
    else if (winnerIs == 'none'){
    	remisElem.innerText = '---REMIS---';
    }
    setGamePoints();
    endWinnerIs();

}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

/*
function endWinnerIs(){
	if (player.score != 4){
		console.log('graj dalej');
	}
	else if (player.score == 4){
		console.log('wygrywasz ' +player.name);
	}
}
*/

function endWinnerIs(){
	while (player.score == 4){
		console.log('wygrywasz ' +player.name);
		player.score++;
	}
}
