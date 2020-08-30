let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;


$(document).keypress(() =>{
	if (!started) {
		updateLevel();
		nextSequence();
		started = true;
	}
});

$(".btn").click(function(){
	let userChosenColour = $(this).attr("id");
	userClickedPatern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer(userClickedPatern.length-1);
});


checkAnswer = currentLevel =>{
	if (gamePattern[currentLevel] === userClickedPatern[currentLevel]){
		if(userClickedPatern.length === gamePattern.length){
			setTimeout(() => {
				nextSequence();
			}, 1000);
		}
		} else {
			gameOver();
			startOver();
		}
	}


nextSequence = () => {

	userClickedPatern = [];
	level++;
	updateLevel();

	let randomNumber = Math.floor(Math.random() * 4);
	let randomChosenColour = buttonColours[randomNumber];
	let colorChosed = `#${randomChosenColour}`;

	gamePattern.push(randomChosenColour);
	$(colorChosed).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

	playSound(randomChosenColour);
}

playSound = name => {
	let audio = new Audio(`sounds/${name}.mp3`);
	audio.play();
}


animatePress = currentColour =>{
	$(`#${currentColour}`).addClass('pressed');
	setTimeout(() =>{
		$(`#${currentColour}`).removeClass('pressed');
	}, 100);
}

gameOver = () => {
	playSound("wrong");
	$('body').addClass('game-over');
	setTimeout(() => {
		$('body').removeClass('game-over')
	}, 200);

	$('#level-title').text("Game Over, Press Any Key to Restart");
}

startOver = () => {
	level = 0;
	gamePattern = [];
	started = false;
}


updateLevel = () => {
	$("#level-title").text("Level " + level);
}