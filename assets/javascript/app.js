//Javascrip & jQuery will be stached here.
var correctAnswers = 0; // total correct answers
var wrongAnswers = 0; // total incorrect answers
var timedOut = 0; // this will handle how many times the game timed out
var gameClock = 30;  // game start @ 30secs (30,000)
var clockIntervalID;
var questionItem = [];
var gameQuestion;
var allTrue;
var gameAnswer1 = $("#iLblAnswer1").text("Random asnwer text here");
var gameAnswer2 = $("#iLblAnswer2").text("Random asnwer text here");
var gameAnswer3 = $("#iLblAnswer3").text("Random asnwer text here");
var gameAnswer4 = $("#iLblAnswer4").text("Random asnwer text here");

var inGameAndInf = [ /*Array to hold all the required information. Once answered flip questionAsked to true*/
{
	name: "World of Warcraft",
	question: "What is the capital city for the Humans in World of Warcraft?",
	goodAnswer: "Stormwind City",
	possibleAnswers: ["Stormwind City", "Never-never Land", "The Emerald City", "Everglen Tides"],
	questionAsked: false
},
{
	name: "Skyrim",
	question: "Which race is not a race within the game of Skyrim?",
	goodAnswer: "Hobbits",
	possibleAnswers: [ "Hobbits", "Nords", "Khajiits", "Argonians"],
	questionAsked: false
},
{
	name: "Mario Brothers",
	question: "Mario & Lugi from the Mario Brothers belong to which profession originally?",
	goodAnswer: "Plumbers",
	possibleAnswers: ["Plumbers", "Bowser Smashers", "Mushroom munchers", "Gardeners"],
	questionAsked: false
},
{
	name: "Zelda",
	question: "The game 'Zelda' is named after which character in the game?",
	goodAnswer: "The Princess",
	possibleAnswers: ["The Princess", "The Jedi-knight", "A horse", "A mythical sword"],
	questionAsked: false
},
{
	name: "Destiny",
	question: "Destiny cost roughly how much to make, which was made back in the first day of launch?",
	goodAnswer: "500M",
	possibleAnswers: ["500M", "250M", "240K", "750M"],
	questionAsked: false
},
{
	name: "Final Fantasy Tactics",
	question: "Squaresoft released the hit game Final Fantasy Tactics in which year?",
	goodAnswer: "1997",
	possibleAnswers: ["1997", "2000", "1996", "1890"],
	questionAsked: false
},
{
	name: "Halo",
	question: "The title of the main character in Xbox's hit game Halo is...",
	goodAnswer: "Master Chief",
	possibleAnswers: ["Master Chief", "Captian Metal Pants", "Sir Blasty", "Lieutenant Commander"],
	questionAsked: false
},
{
	name: "God of War",
	question: "What was the name of the god that Kratos replaced after defeating them?",
	goodAnswer: "Ares",
	possibleAnswers: ["Ares", "Athena", "Shiva", "Mars"],
	questionAsked: false
}];

	// On game load show a opener screen where the user can either click "Start area" OR hit enter - display rules
	/*code to start the game*/
	// window.addEventListener("keyup", function(event) {
	// 	if (event.keyCode === 13) {
	// 		document.getElementById("start-game").click();
	// 	}
	// });

	$().ready(function(){
		//load up the questions and answers.
		questionAndAnswers();
		//run the timer - reset the questions when timer runs out
		runClock();
		//check to see how the player did and log their totals to wins/losses/timeout (draws).
		winDrawLossCheck();
		endGame() //check to see if al games show true - build in ending code to take to last screen.
		

		// $.each(inGameAndInf, function(i){
		// 	alert("You pulled " + i[Math.floor(Math.random()*i.length) + "."]);
		// });

		/* 
		3) wait for user input then GOTO #2 - 8 times
		4) Once all 8 questions have a questionAsked of T move to
		game ending informaton.
		4) Game over - change screen to show results
			4a) questions answered correctly
			4b) questions answered incorrectly
				4b1) display picture in a div box.
			4c) show box or button to restart game
				4c1) if restart - GOTO #1
				*/
			});

	function questionAndAnswers(){
		//pick an item from the array list - loop over each item
		//fill in the answer fields with the scrambled answers.
		questionItem = inGameAndInf[Math.floor(Math.random()*inGameAndInf.length)];  //gets a random item from the array
		//check to see if the question has been asked (question asked is true) if so then ask another question.
		if(questionItem.questionAsked){
			questionAndAnswers(); 
			return;
		}

		gameQuestion = questionItem.question; //item holding the possible answers
		gameAnswerItm = questionItem.possibleAnswers; //item of the possible answers and push into a solid item
		gameValidAns = questionItem.goodAnswer //store the correct answer
		allTrue = questionItem.questionAsked;

		$("#iTxtQuestion").text(gameQuestion); //tell the lable to take in this text and display it.

		for (var i = 0; i < 10; i++) { //array to scramble the information
			var alphaScramble = Math.floor(Math.random()*gameAnswerItm.length); //first scramble answers 1-8
			var betaScramble = Math.floor(Math.random()*gameAnswerItm.length); //second scramble answers 1-8
			var storedAlpha = gameAnswerItm[alphaScramble]; //hold on to the original information.
			gameAnswerItm[alphaScramble] = gameAnswerItm[betaScramble]; //
			gameAnswerItm[betaScramble] = storedAlpha;
		}

		//push information into the desired fields
		$("#iLblAnswer1").text(gameAnswerItm[0]);
		$("#iLblAnswer2").text(gameAnswerItm[1]);
		$("#iLblAnswer3").text(gameAnswerItm[2]);
		$("#iLblAnswer4").text(gameAnswerItm[3]);
		 // set the boolean to T = true means it's answers and should not be asked again.
		 allTrue = true;

		

		};

	function winDrawLossCheck(){
		/*check each answer for the correct answer or if the timer timed out.*/
		$(".cUserAnswer1").click(function(){
			//pull the value of what the user guessed out
			var userGuess = $(this).text(); //pull the value of what the user guessed out
			if(userGuess === gameValidAns) { //compare the information of what was guessed to the correct answer.
				correctAnswers += 1;
				alert("Nicely done, next question!");
				questionAndAnswers(); //load the next question
				gameClock = 31; //put on an extra second so that the clock reads correctly.
			return;
			}
			if (userGuess !== gameValidAns){
				wrongAnswers += 1; //add one to the loss score
				alert("That is not the correct answer. You actually want " + gameValidAns + ".");
				questionAndAnswers(); //load the next question
				gameClock = 31; //put on an extra second so that the clock reads correctly.
			return;
			}
		});
	}

	function endGame() {
		
	}

	function runClock(){
		//ticket to reduce the clock by 1 second.
		clockIntervalID = setInterval(reduceTime, 1000);
	}

	function reduceTime(){
		gameClock --; //removes 1 from the time

		//the clock display
		$("#iLblTimer").html(gameClock);

		//if the clock reaches 0 then...
		if (gameClock === 0) {
			alert("Sorry your time is up, on to the next question");
			timedOut += 1; //add one to the total times that the clock timed out.  This will be displayed at the end.
			stopClock(); //stop the clock from running
			//reset the gameboard:
			questionAndAnswers();
			gameClock = 31;
			runClock();
		}
	}

	function stopClock(){
		//stop the timer and reset the clock
		clearInterval(clockIntervalID);
	}
