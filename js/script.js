var newGameBtn = document.getElementById('js-newGameElement');
newGameBtn.addEventListener('click', newGame);


var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissores');

pickRock.addEventListener('click', function(){
	playerPick('rock');
});
pickPaper.addEventListener('click', function(){
	playerPick('paper');
});
pickScissors.addEventListener('click', function(){
	playerPick('Scissores');
});
//var newGameBtn = document.getElementById('js-newGameButton');

//newGameBtn.addEventListener('click', newGame);