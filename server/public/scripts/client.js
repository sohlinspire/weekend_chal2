//console.log('js sourced');
var operation;
var valueX;
var valueY;

$(document).ready(function() {
  //button assignment
  $('#addition').on('click', function() {
    operation = "addition";
    //console.log(operation);
  });
  $('#subtract').on('click', function() {
    operation = "subtraction";
    //console.log(operation);
  });
  $('#multiply').on('click', function() {
    operation = "multiplication";
    //console.log(operation);
  });
  $('#divide').on('click', function() {
    operation = "division";
    //console.log(operation);
  });
  //request to server side
  $('#submit').on('click', function() {
    valueX = parseInt($('#inputX').val());
    valueY = parseInt($('#inputY').val());
    //console.log(valueX, valueY, operation);
    $.ajax({
      type: 'POST',
      url: '/setOperation',
      data: {
        type: operation,
        valueX: valueX,
        valueY: valueY
      },
      //response from server side
      success: function(response) {
        //console.log(response);
        $('#answer').text(response);
      }
    });
  });

  $('#clear').on('click', function (){
    $('#inputX').val('');
    $('#inputY').val('');
    $('#answer').empty();
});
    function inputFocus(i){
        if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
    }
    function inputBlur(i){
        if(i.value===""){ i.value=i.defaultValue; i.style.color="#888"; }
    }
});



















// Define buttons & their maximum number



//operation = $(this).text();

// function setFactor(){
//   // Onc click, send max number to the server & hides difficulty button and shows player inputs
//   $('#startGame').on('click', function() {
//     $.ajax({
//       type : 'POST',
//       url: '/setFactor',
//       data: {type: operation},
//             // addition : addition,
//             // subtraction : subtraction,
//             // multiplication : multiplication,
//             // division : division
//       success: function(response){
//         console.log(response);
//       }
//     });
//   });
// }




// function startCalc() {
//   valueX = parseInt($('#inputX').val());
//   valueY = parseInt($('#inputY').val());
//   $.ajax ({
//     type: 'POST',
//     url: '/calculation',
//     data: {
//
//     },
//     success: function(response) {
//       console.log(response);
//     }
//   });//end request
// //} //end startGame
// }




//click button to calculate
//$('.container').on('click', '#start', startGame);
// $("#start").click(function(){
//     $("#test3").val("Dolly Duck");
// });

// function gameSetup() {
//   $('.container').empty();
//   $('.container').append('<select id="calculationType">' +
//                           '<option class="add">Add</option>' +
//                           '<option class="subtract">Subtract</option>' +
//                           '<option class="division">Division</option>' +
//                           '<option class="multiplication">Multiplication</option>' +
//                         '</select>' + '<br><br>' +
//                         '<button id="chooseType">Choose Factor</button>');
//                       }
//end gameSetup

//this works:

//
// $(document).ready(function() {
//
//   gameSetup();
//   //on click...
//   //$('#start').on('click', gameSetup);
//   $('.container').on('click', '#start', startGame);
//   //$('.container').click(startGame);
// });
//
// function gameSetup() {
//   $('.container').empty();
//   $('.container').append('<h2>Pick Max #</h2>' +
//                         //  + '<input id="maxNumber"/>')
//                         '<select id="maxNumber">' +
//                           '<option value="20">20</option>' +
//                           '<option value="50">50</option>' +
//                           '<option value="100">100</option>' +
//                           '<option value="500">500</option>' +
//                         '</select>' +
//                         '<br><br>' +
//                         '<button id="start">Start Game</button>');
// }// end gameSetup
//
// function startGame() {
//   console.log(parseInt($('#maxNumber').val()));
//   var chosenMax = parseInt($('#maxNumber').val());
//   $.ajax ({
//     type: 'POST',
//     url: '/maxNumberRange',
//     data: {
//       userChoice: chosenMax
//     },
//     success: function(response) {
//       console.log(response);
//     }
//   });//end request
// } //end startGame
//
// var arrayGuess = [];
// //var answer = randomNum();
// var highOrLow = [];
//
// function checkGuess() {
//
// //added for loop
//   for(i = 0; i > arrayGuess.length; i += 1){
//     if (arrayGuess[i] < answer){
//       highOrLow.push("Too Low");
//     }
//     else if (arrayGuess[i] > answer){
//       highOrLow.push("Too High");
//     }
//      else {
//       highOrLow.push("Correct");
//     }
//   }
//
// }
