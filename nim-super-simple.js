var count = 0, turn = 0;
alert("Let\'s play Nim. You go first.");
while(count<21){
	if(count < 21){
		turn = userTurn();
		count += turn;
		alert("Count is now "+count);
	}
	if (count == 20) alert("Computer lost.");
	else if (count > 20) alert ("You lost.");
	else {
		turn=cpuTurn(count);
		count += turn;
		alert("Count is now "+count);
	}
}

function userTurn() {
	var turn=0;
	var goodTurn = false;
	while (goodTurn == false) {
		turn = prompt("Enter 1, 2 or 3");
		if (turn > 0 && turn < 4 && Math.floor(turn)==turn) goodTurn=true;
		else alert("Invalid Input");
	}
	return Number(turn);
}

function cpuTurn(count){
	var turn = Math.floor(Math.random()*3)+1;
	if (count+turn > 20) cpuTurn(count);
	return turn;
}
