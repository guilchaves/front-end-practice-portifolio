rollTheDice = () => {
	let numberRolled = Math.floor((Math.random() * 6) + 1)
	return numberRolled
}

const title = document.getElementById("title");
const firstRolledDice = rollTheDice();
const secondRolledDice = rollTheDice();
const diceNumberOne = document.getElementById("player-one-dice");
const diceNumberTwo = document.getElementById("player-two-dice");

loadDice = (numberRolled, player) => {
	player.src=`assets/images/dice${numberRolled}.png`;
}

loadDice(firstRolledDice, diceNumberOne);
loadDice(secondRolledDice, diceNumberTwo)

declareWinner = () => {
	if(firstRolledDice > secondRolledDice){
		title.innerText = "Player one wins!"
	} else if(firstRolledDice < secondRolledDice){
		title.innerText = "Player two wins!"
	} else {
		title.innerText = "Draw!"
	}
}
declareWinner();


