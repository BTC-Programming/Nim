// Nim Trainer Starter
// Initialzations
var count = 0;
var playerInput = 0;
var cpuInput = 0;
var winner=null;
// Welcome
alert("Welcome to Nim! You go first.");
// Start Play
// Kepp looping until someone wins
while (count<21) {
  // Ask for player input and say current count, add to count
  count+=playerTurn(count);
alert("Current count is "+count);
  // Ask for CPU inout and say current count, add to count
  count+=cpuTurn(count);
}
alert(winner+" won!");
// End

// Define function playerTurn
function playerTurn(count){
  playerInput = prompt("Count how many? (1-3)");
  count=parseInt(playerInput);
  winner ="CPU";
  return count;
}

// Define function cpuTurn
function cpuTurn(count){
  cpuInput=Math.floor(Math.random()*3)+1;
  count=cpuInput;
  alert("Current count is "+count);
  winner="You";
  return count;
}
