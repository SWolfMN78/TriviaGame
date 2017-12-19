//Javascrip & jQuery will be stached here.
var correctAnswers = 0; // total correct answers
var wrongAnswers = 0; // total incorrect answers
var timedOut = 0; // total time expired count
var gameClock;
var gameQuestion;
var gameAnswer1 = $("#iLblAnswer1").text("");
var gameAnswer2;
var gameAnswer3;
var gameAnswer4;

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