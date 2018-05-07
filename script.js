let playerScore= 0;
let computerScore= 0;
const playerScore_span= document.getElementById('userscore');
const computerScore_span= document.getElementById('compscore');
const scoreBoard_div= document.querySelector('.scoreboard');
const result_h4= document.querySelector('.result > h4');
const rock_div= document.getElementById('r');
const paper_div= document.getElementById('p');
const scissors_div= document.getElementById('s');
const reset_div= document.getElementById('reset');

function getcompSelect() {
	const compChoice= ['r', 'p', 's'];
	const randNum= Math.floor(Math.random()*3);
	return compChoice[randNum];
}

function toWord(letter) {
	if (letter == 'r') { return 'Rock'; }
	if (letter == 'p') { return 'Paper';}
	else { return 'Scissors';}
}
function win(userSelection, compSelection) {
	playerScore++
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	const uword= "(you)".fontsize(3).sub();
	const cword= "(computer)".fontsize(3).sub();
	const retr= document.getElementById(userSelection).classList;
	result_h4.innerHTML = `${toWord(userSelection)}${uword} beats ${toWord(compSelection)}${cword}. You win!`;
	retr.add('yellow-glow');
	setTimeout( function(){retr.remove('yellow-glow')}, 300);

	switch(playerScore){
		case 5:
			result_h4.innerHTML = 'Congratulations! You win.';
			return stop();
			break;
	}
}
function lose(userSelection, compSelection) {
	computerScore++
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	const uword= "(you)".fontsize(3).sub();
	const cword= "(computer)".fontsize(3).sub();
	const retr= document.getElementById(userSelection).classList;
	result_h4.innerHTML = `${toWord(compSelection)}${cword} beats ${toWord(userSelection)}${uword}. Try again!`;
	retr.add('pink-glow');
	setTimeout( function(){retr.remove('pink-glow')}, 300);
	
	switch(computerScore){
		case 5:
			result_h4.innerHTML = 'Sorry, you lose. Try again!';
			return stop();
			break;
	}
}
function draw(userSelection, compSelection) {
	playerScore_span.innerHTML = playerScore;
	computerScore_span.innerHTML = computerScore;
	const uword= "(you)".fontsize(3).sub();
	const cword= "(computer)".fontsize(3).sub();
	const retr= document.getElementById(userSelection).classList;
	result_h4.innerHTML =` ${toWord(userSelection)}${uword} equals ${toWord(compSelection)}${cword}. Draw!`;
	retr.add('gray-glow');
	setTimeout( function(){retr.remove('gray-glow')}, 300);
}

function game(userSelection) {
	const compSelection = getcompSelect();
	switch (userSelection + compSelection){
		case 'rs':
		case 'pr':
		case 'sp':
			win(userSelection, compSelection);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userSelection, compSelection);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userSelection, compSelection);
			break;
	}

}

function resetAll(){
	const reset= document.location.href="";
}


function main(){
	rock_div.addEventListener('click', function(){
		game('r')
	})

	paper_div.addEventListener('click', function(){
		game('p')
	})

	scissors_div.addEventListener('click', function(){
		game('s')
	})

	reset_div.addEventListener('click', function(){
		resetAll()
	})
}

function stop(){
	rock_div.addEventListener('click', function(){
		resetAll()
	})

	paper_div.addEventListener('click', function(){
		resetAll()
	})

	scissors_div.addEventListener('click', function(){
		resetAll()
	})
}
main();