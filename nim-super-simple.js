var count = 0, turn = 0, winner="none";
alert("Let\'s play Nim. You go first.");
while(winner=="none"){
	if (count < 21)	count = userTurn(count);
	if (count == 20) {
		winner = "User";
		alert("Computer lost.");
	}
	else if (count > 20) {
		winner = "CPU";
		alert ("You lost.");
	}
	else count = cpuTurn(count);
}

function userTurn() {
	var turn=0;
	var goodTurn = false;
	while (goodTurn == false) {
		turn = prompt("Enter 1, 2 or 3");
		if (turn > 0 && turn < 4 && Math.floor(turn)==turn) goodTurn=true;
		else alert("Invalid Input");
	}
	count += Number(turn);
	alert("Count is now "+count);
	return count;
}

function cpuTurn(count){
	var turn = Math.floor(Math.random()*3)+1;
	if (count+turn > 20) cpuTurn(count);
	alert("CPU counts "+turn);
	count += turn;
	alert("Count is now "+count);
	return count;
}
