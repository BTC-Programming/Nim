// Nim simple by Wyatt and Bram
// Initialzations
var count = 0;
var playerInput = 0;
var cpuInput = 0;
var winner=null;
// Welcome
alert("Welcome to Nim! You go first.");
// Start Play
// Keep looping until someone wins
while (count<21) {
   // Ask for player input and say current count, add to count
   winner="CPU"; 
   count+=playerTurn();
   alert("Current count is "+count);
   // Check if player loses, and prevent CPU from taking turn if so
   if (count<21) {
      // Ask for CPU input and say current count, add to count
      winner="you"; 
      cpuInput=cpuTurn();
      alert("CPU counts "+cpuInput);
      count+=cpuInput;
      alert("Current count is "+count);
   }
}
alert(winner+" won!");
// End

// Define function playerTurn
function playerTurn(){
  playerInput = prompt("Count how many? (1-3)");
  playerInput = parseInt(playerInput);
  return playerInput;
}

// Define function cpuTurn
function cpuTurn(){
  cpuInput=Math.floor(Math.random()*3)+1;
  return cpuInput;
}
