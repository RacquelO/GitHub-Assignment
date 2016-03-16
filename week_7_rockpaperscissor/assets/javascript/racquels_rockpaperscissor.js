// Firebase link
var dataRef = new Firebase("https://racquelsrockpaperscissors.firebaseio.com/");

// Initial Values
var playerOne = {
  choice:["Rock", "Paper", "Scissor"],
  losses:0,
  name:"Player One",
  wins:0,
};

var playerTwo = {
  choice:["Rock", "Paper", "Scissor"],
  losses:0,
  name:"Player Two",
  wins:0,
};

// var chatOne = {
//   chatNameOne: "",
//   textOne: ""
// };

// var chatTwo = {
//   chatNameTwo: "",
//   textTwo: ""
// };


dataRef.push({
      playerOneData: playerOne,
      playerTwoData: playerTwo,
      // chatOne: chatOne,
      // chatTwo: chatTwo
    });

console.log(dataRef);

dataRef.on("child_added", function(childSnapshot){


  // // If Firebase has a playerOneData and playerTwoData stored (first case)
  // if (childSnapshot.child("playerOneData").exists() && childSnapshot.child("playerTwoData").exists()) {

    // Set the initial variables equal to the stored values.
    playerOneData = childSnapshot.val().playerOneData;
    playerTwoData = childSnapshot.val().playerTwoData;

    // Change the HTML to reflect the initial value
    $('#playerOneName').html(childSnapshot.val().playerOneData.name);
    $('#playerOneRock').html(childSnapshot.val().playerOneData.choice[0]);
    $('#playerOnePaper').html(childSnapshot.val().playerOneData.choice[1]);
    $('#playerOneScissor').html(childSnapshot.val().playerOneData.choice[2]);
    $('#playerOneLosses').html("Losses:" + " " + childSnapshot.val().playerOneData.losses);
    $('#playerOneWins').html("Wins:" + " " + childSnapshot.val().playerOneData.wins);

    $('#playerTwoName').html(childSnapshot.val().playerTwoData.name);
    $('#playerTwoRock').html(childSnapshot.val().playerOneData.choice[0]);
    $('#playerTwoPaper').html(childSnapshot.val().playerOneData.choice[1]);
    $('#playerTwoScissor').html(childSnapshot.val().playerOneData.choice[2]);
    $('#playerTwoLosses').html("Losses:" + " " + childSnapshot.val().playerTwoData.losses);
    $('#playerTwoWins').html("Wins:" + " " + childSnapshot.val().playerTwoData.wins);


    // Print the initial data to the console.
    console.log(playerOneData);
    console.log(playerTwoData)
  // }

// Keep the initial variables for highBidder equal to the initial values
  // else{

  //   // Change the HTML to reflect the initial value
  //   $('#playerOneName').html(playerOneData.name);
  //   $('#playerOneChoice').htm(playerOneData.choice);
  //   $('#playerOneLosses').html("Losses:" + "" + playerOneData.losses);
  //   $('#playerOneWins').html("Wins:" + "" + playerOneData.wins);

  //   $('#playerTwoName').html(playerTwoData.name);
  //   $('#playerTwoChoice').html(playerTwoData.choice);
  //   $('#playerTwoLosses').html("Losses:" + "" + playerTwoData.losses);
  //   $('#playerTwoWins').html("Wins:" + "" + playerTwoData.wins);

  // }


// If any errors are experienced, log them to console. 
}, function (errorObject) {

    console.log("The read failed: " + errorObject.code);

});

// Whenever a user clicks the click button
$("#startButton").on("click", function() {

  var playerOneName = $("#nameInput").val();

  alert(playerOneName);

  $("#playerOneName").html(playerOneName);

  // dataRef.update({
  //     playerOneData
  //   });


//   var hopperRef = usersRef.child("gracehop");
// hopperRef.update({
//   "nickname": "Amazing Grace"
// });
  

  // var playerOne = {
  //   choice:["Rock", "Paper", "Scissor"],
  //   losses:0,
  //   name:playerOneName,
  //   wins:0,
  // };

  // var playerTwo = {
  //   choice:["Rock", "Paper", "Scissor"],
  //   losses:0,
  //   name:"Player Two",
  //   wins:0,
  // };

  // dataRef.set({
  // playerOneData: {
  // choice:["Rock", "Paper", "Scissor"],
  // losses:0,
  // name:playerOneName,
  // wins:0,
  // playerTwoData: {
  // choice:["Rock", "Paper", "Scissor"],
  // losses:0,
  // name:"Player Two",
  // wins:0,
  // }

// Don't refresh the page!
  return false;

});



// // ========= RPS Game =========
//   document.ready = function(event) {


//     var playerOneGuess = [playerOneData.choice[0],
//                           playerOneData.choice[1],
//                           playerOneData.choice[2]];

//     var playerTwoGuess = [playerTwoData.choice[0],
//                           playerTwoData.choice[1],
//                           playerTwoData.choice[2]];

//     var wins = 0;
//     var losses = 0;
//     var ties = 0;

//     // $("#playerOneRock").val(playerOneGuess[0]); 

 

//     if ((playerOneGuess == playerOneGuess[0]) || (playerOneGuess == playerOneGuess[1]) || (playerOneGuess == playerOneGuess[2])){

//     debugger;

//     if ((playerOneGuess == playerOneData.choice[0]) && (playerTwoGuess == playerTwoData.choice[2])){
//       wins++;
//     }else if ((playerOneGuess == playerOneGuess[0]) && (playerTwoGuess == playerTwoData.choice[1])){
//       losses++;
//     }else if ((playerOneGuess == playerOneData.choice[2]) && (playerTwoGuess == playerTwoData.choice[0])){
//       losses++;
//     }else if ((playerOneGuess == playerOneData.choice[2]) && (playerTwoGuess == playerTwoData.choice[1])){
//       wins++;
//     }else if ((playerOneGuess == playerOneData.choice[1]) && (playerTwoGuess == playerTwoData.choice[0])){
//       wins++;
//     }else if ((playerOneGuess == playerOneData.choice[1]) && (playerTwoGuess == playerTwoData.choice[2])){
//       losses++;
//     }else if (playerOneGuess == playerTwoGuess){
//       ties++;
//     }  

//     alert(wins + losses + ties);

//   }
// }
    // var html = "<p>Press r, p or s to start playing</p>" +
    // "<p>wins: " + 
    // wins + 
    // "</p>" +
    // "<p>losses: " + 
    // losses + 
    // "</p>" +
    // "<p>ties: " + 
    // ties + 
    // "</p>";

// $("#playerOnePaper").val(playerOneData.choice[1]);
// $("#playerOneScissor").val(playerOneData.choice[2]);
  

  // var playerTwoGuess = 

  // $("#playerTwoRock").val(playerOneData.choice[0]);
  // $("#playerTwoPaper").val(playerOneData.choice[1]);
  // $("#playerTwoScissor").val(playerOneData.choice[2]);


    // document.querySelector('#game').innerHTML = html;




// ==============CHAT JAVACRIPT==============
  
  // REGISTER DOM ELEMENTS
  var messageField = $('#messageInput');
  var nameField = $('#nameChatInput');
  var messageList = $('#examplechatMessages');

  // LISTEN FOR KEYPRESS EVENT
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var username = nameField.val();
      var message = messageField.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      dataRef.push({chatName:username + ": ", text:message});
      messageField.val('');
      nameField.val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  dataRef.limitToLast(100).on('child_added', function (childSnapshot) {
    //GET DATA
    var data = childSnapshot.val();
    var username = data.chatName;
    var message = data.text;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var messageElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>")
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE
    messageList.append(messageElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    messageList[0].scrollTop = messageList[0].scrollHeight;
  });


















// //Firebase watcher + initial loader HINT: .on("value")
// dataRef.on("value", function(childSnapshot) {

//   // Change the HTML to reflect

//     $('#playerOneName').html(childSnapshot.val().playerOneData.name);
//     $('#playerOneRock').html(childSnapshot.val().playerOneData.choice[0]);
//     $('#playerOnePaper').html(childSnapshot.val().playerOneData.choice[1]);
//     $('#playerOneScissor').html(childSnapshot.val().playerOneData.choice[2]);
//     $('#playerOneLosses').html("Losses:" + " " + childSnapshot.val().playerOneData.losses);
//     $('#playerOneWins').html("Wins:" + " " + childSnapshot.val().playerOneData.wins);

//     $('#playerTwoName').html(childSnapshot.val().playerTwoData.name);
//     $('#playerTwoRock').html(childSnapshot.val().playerOneData.choice[0]);
//     $('#playerTwoPaper').html(childSnapshot.val().playerOneData.choice[1]);
//     $('#playerTwoScissor').html(childSnapshot.val().playerOneData.choice[2]);
//     $('#playerTwoLosses').html("Losses:" + " " + childSnapshot.val().playerTwoData.losses);
//     $('#playerTwoWins').html("Wins:" + " " + childSnapshot.val().playerTwoData.wins);

//   }


// $( "p" ).click(function() {
//   var htmlString = $( this ).html();
//   $( this ).text( htmlString );
// });



  // var playerName = $('input:textbox').val() 

  // console.log(playerName);

  // Get the input values
  // var playerOneData = $('#playerOneName').val().trim(); 
  // var playerTwoData = $('#playerTwoName').val().trim(); 

//   // Log the Bidder and Price (Even if not the highest)
//   console.log(bidderName);
//   console.log(bidderPrice);

//   if(bidderPrice > highPrice) {

//     // Alert 
//     alert("You are now the highest bidder.");

//     // Save the new price in Firebase
//     bidderData.set({
//       highBidder: bidderName,
//       highPrice: bidderPrice
//     });

//     // Log the new High Price
//     console.log("New High Price!");
//     console.log(bidderName);
//     console.log(bidderPrice);

//     // Store the new high price and bidder name as a local variable (could have also used the firebase variable)
//     highBidder = bidderName;
//     highPrice = bidderPrice;

//     // Change the HTML to reflect the new high price and bidder
//     $("#highestBidder").html(bidderName);
//     $("#highestPrice").html("$" +  bidderPrice);

//   }

//   else{

//     // Alert
//     alert("Sorry that bid is too low. Try again."); 
//   }

//   // Return False to allow "enter"
//   return false;
// });

// // Capture Button Click
// $("#addUser").on("click", function() {

// 	// YOUR TASK!!!
// 	// Code in the logic for storing and retrieving the most recent user. 
// 	// Dont forget to provide initial data to your Firebase database. 

// 	name = $('#nameinput').val().trim();
// 	email = $('#emailinput').val().trim();
// 	age = $('#ageinput').val().trim();
// 	comment = $('#commentinput').val().trim();

// 	dataRef.set({

// 		name: name,
// 		email: email,
// 		age: age,
// 		comment: comment
// 	})

// 	// Don't refresh the page!
// 	return false;
// });

// //Firebase watcher + initial loader HINT: .on("value")
// dataRef.on("value", function(childSnapshot) {

// 	// Log everything that's coming out of childSnapshot
// 	console.log(childSnapshot.val());
// 	console.log(childSnapshot.val().name);
// 	console.log(childSnapshot.val().email);
// 	console.log(childSnapshot.val().age);
// 	console.log(childSnapshot.val().comment);

// 	// Change the HTML to reflect
// 	$("#namedisplay").html(childSnapshot.val().name);
// 	$("#emaildisplay").html(childSnapshot.val().email);
// 	$("#agedisplay").html(childSnapshot.val().age);
// 	$("#commentdisplay").html(childSnapshot.val().comment);

// // Handle the errors
// }, function(errorObject){

// 	console.log("Errors handled: " + errorObject.code);
// });
