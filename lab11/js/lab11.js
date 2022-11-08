/*
* author: Levi
* Created: 10.21.2022
*/

$('#Challenge').append('<button id="buttonChalEl">Click Here</button>');

$('#Problems').append('<button id="buttonProbEl">Click Here</button>');

$('#Results').append('<button id="buttonResEl">Click here</button>');

$('#buttonChalEl').click(function() {
  $('#Challenge').toggleClass("special");
});

$('#buttonProbEl').click(function() {
  $('#Problems').toggleClass("special2");
});

$('#buttonResEl').click(function() {
  $('#Results').toggleClass("special3");
});
