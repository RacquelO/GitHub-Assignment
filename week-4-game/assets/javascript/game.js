// global variables
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var wordOptions = ["Achelous", "Adonis", "Adrestia", "Aeolus", "Aether", "Agathodaemon", "Aglaea", "Algea", "Alpheus", "Amphitrite", "Ananke", "Androktasiai", "Anemoi", "Anteros", "Apate",  "Aristaeus", "Asclepius", "Asopus",  "Astraea", "Ate", "Atropos", "Aura", "Bia", "Britomartis", "Caerus", "Calypso", "Castalia", "Cephissus", "Chaos", "Chronos", "Circe", "Clotho", "Clytie", "Daphne", "Deimos", "Demeter", "Dionysus", "Dysnomia", "Echo", "Eileithyia", "Eirene", "Elpis", "Endeis", "Enyo", "Erebus", "Eris", "Eros", "Euphrosyne", "Gaea", "Geras", "Graeae", "Harmonia", "Hebe", "Hecate", "Heliadae", "Heliades", "Helios", "Hemera", "Hermaphroditus", "Hesperides", "Hesperus", "Horae", "Horkos", "Hyades", "Hyas", "Hygeia", "Hypnos", "Iasion", "Iris", "Keres", "Keto", "Kratos", "Lachesis", "Lethe", "Limos", "Lyssa", "Makhai", "Maniae", "Melinoe", "Minor", "Gods", "Momus", "Moros", "Morpheus", "Nemesis", "Nephele", "Nike", "Nilus", "Nysiads", "Nyx", "Oenone", "Oizys", "Oneiroi", "Ourea", "Paean",  "Pan", "Persephone", "Pheme", "Philotes","Phobos", "Phonoi", "Phorcys", "Phosphorus", "Phthonus", "Ploutos", "Ponos", "Pontus", "Primordial", "Pseudologoi", "Psyche", "Rhode", "Scamander", "Syrinx", "Tartarus", "Telesto", "Thalassa", "Thalia", "Thanatos", "Thaumas", "Thetis", "Tyche", "Typhoeus", "Uranus", "Zagreus", "Zelus" ];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// test the variables
console.log(alphabet + ' ' + wordOptions);

//game counter
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//functions
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

}

//main process


























// // checking letter input
// function letInput(letter){
// 	if (alphabet.indexOf(letter) != -1){
// 		return true;
// 	}
// }

// //
// var game = {

// 	// counters and containers
// 	guesses : 0,
// 	wins : 0,
// 	usedKeys : [],
// 	display : [],
// 	word : Object,

// 	// HTML updates
// 	winCounter : function() {
// 		document.querySelector("#win-counter").innerHTML = 
// 			"<p>Games Won: </p> " +
// 			"<p class='counter'>" + this.wins + "</p>";
// 	},
// 	guessCounter : function() {
// 		document.querySelector("#guess-counter").innerHTML = 
// 			"<p>Guesses Remaining: </p>" + 
// 			"<p class='counter'>" + this.guesses + "</p>";
// 	},
// 	usedKeysCounter : function() {
// 		document.querySelector("#letters-guessed").innerHTML = 
// 			"<p>Letters Guessed: <p> " +
// 			"<p class='counter'>" + this.usedKeys.join(", ") + "</p>";
// 	},
// 	wordDisplay : function() {
// 		document.querySelector("#word-display").innerHTML = 
// 			"<p>" + this.display.join(" ") + "</p>";
// 	},
// 	victory : function() {
// 		document.querySelector("#consequence").innerHTML = 
// 			"<h3>Victory!</h3>" +
// 			"<p class='win-word'>" + this.wordsList.name + "</p>";
// 	},
// 	defeat : function() {
// 		document.querySelector("#consequence").innerHTML = 
// 			"<h3>Defeated!</h3>" +
// 			"<p class='lose-word'>The word was " + this.word.name + "...</p>";
// 	},

// 	// Play sound of word
// 	playWin : function() {
// 		var audio = new Audio(this.word.sound);
// 		audio.play();
// 	},
// 	playLose : function () {
// 		var audio = new Audio("assets/sounds/wrong.mp3");
// 		audio.play();
// 	},

// 	// start game
// 	start : function() {
// 		// set default values
// 		this.guesses = 12;
// 		this.display = [];
// 		this.usedKeys = [];

// 		// set up display ( _ _ _ _ _ _ )
// 		this.word = dictionary[ Math.floor(Math.random() * dictionary.length) ];
// 		for (var i = 0; i < this.word.name.length; i++){
// 			this.display.push("_");
// 		}

// 		// refresh the HTML
// 		this.winCounter();
// 		this.guessCounter();
// 		this.wordDisplay();
// 		this.usedKeysCounter();
// 	},

// 	// input
// 	input : function(lett) {
// 		// verify a valid, unused key was pressed
// 		if( letInput(lett) && this.usedKeys.indexOf(lett) === -1) {

// 			// checker switch: turns true if a match is found
// 			checker = false;

// 			// if valid, check against the Word.name
// 			for (var i = 0; i < this.word.name.length; i++) {

// 				// if there's a match, replace a '_' in game.display
// 				if (lett === this.word.name[i]) {
// 					this.display[i] = lett;
// 					checker = true;
// 				}
// 			}

// 			// if checker's still false, take a guess point away
// 			if (!checker) {
// 				this.guesses--;
// 			}

// 			// add key to used keys array, sort it alphabetically
// 			this.usedKeys.push(lett);
// 			this.usedKeys.sort();

// 			// update the HTML
// 					this.winCounter();
// 					this.guessCounter();
// 					this.wordDisplay();
// 					this.usedKeysCounter();

// 			/* Win Condition (!!!):
// 			 * no more '_'s in game.display
// 			 */
// 			if (this.display.indexOf('_') === -1){
// 				this.wins++;
// 				this.victory();
// 				this.playWin();
// 				this.start();
// 			}

// 			/* Lose Condition (!!!):
// 			 * no more guesses left
// 			 */
// 			if (this.guesses <= 0) {
// 				this.defeat();
// 				this.playLose();
// 				this.start();
// 			}
// 		}
// 	}
// }

// // onload event
// document.onLoad = game.start();

// // onkeyup events
// document.onkeyup = function(event){
// 	var letter = String.fromCharCode(event.keyCode).toLowerCase();
// 	game.input(letter);
// }
