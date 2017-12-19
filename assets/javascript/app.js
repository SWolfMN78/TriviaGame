//Javascrip & jQuery will be stached here.
var correctAnswers = 0; // total correct answers
var wrongAnswers = 0; // total incorrect answers
var timedOut = 0; // this will handle how many times the game timed out
var gameClock; //on game start this will will be set to 30secs (30,000)
var gameQuestion;
var gameAnswer1 = $("#iLblAnswer1").text("Random asnwer text here");
var gameAnswer2 = $("#iLblAnswer2").text("Random asnwer text here");
var gameAnswer3 = $("#iLblAnswer3").text("Random asnwer text here");
var gameAnswer4 = $("#iLblAnswer4").text("Random asnwer text here");

	// On game load show a opener screen where the user can either click "Start area" OR hit enter - display rules
	/*code to start the game*/
	// window.addEventListener("keyup", function(event) {
	// 	if (event.keyCode === 13) {
	// 		document.getElementById("start-game").click();
	// 	}
	// });

$().ready(function(){
	

});

/*function which will store 8 questions - Internal variable which will track T/F (if F then question is pullable//if T question is not pullable)
once all questions are shown to be T then run game over code.
*/

/*
Game questions and answers:
1) World of Warcraft
	Q: What is the capital city for the Humans in World of Warcraft?
	A: Stormwind City
	B: Never-never Land
	B: The Emerald City
	B: Westwend
2) Skyrim
	Q: Which race is not a race within the game of Skyrim?
	A: Hobbits
	B: Nords
	B: Khajiits
	B: Argonians
3) Mario Brothers
	Q: Mario & Lugi from the Mario Brothers belong to which profession originally?
	A: Plumbers
	B: Bowser Smasher
	B: Mushroom muncher
	B: Gardeners
4) Zelda
	Q: The game is named after which character in the game?
	A: The princess
	B: The Jedi-knight
	B: A horse
	B: A mythical sword
5) Destiny
	Q: Destiny cost roughly how much to make, which was made back in the first day of launch?
	A: 500M
	B: 250M
	B: 240K
	B: 750M
6) Final Fantasy Tactics
	Q: Squaresoft released the hit game Final Fantasy Tactics in which year?
	A: 1997
	B: 2000
	B: 1996
	B: 1890
7) Halo
	Q: The title of the main character in Xbox's hit game Halo is...
	A: Master Chief
	B: Captian Metal Pants
	B: Sir Blasty
	B: Lieutenant Commander 
8) God of War
	Q: What was the name of the god that Kratos replaced after defeating them?
	A: Ares
	B: Athena
	B: Shiva
	B: Mars
*/