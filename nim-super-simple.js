var count = 0, turn = 0;
alert("Let\'s play Nim. You go first");
while(count<21){
	count += player;
	if(count < 21){
		turn = userTurn();
		count+=turn;
		alert("Count is now "+count);
	if (count == 20) alert("Computer lost.");
	else if (count > 20) alert ("You lost.");
	else {
		turn=cpuTurn(count);
		count += turn;
		alert("the count is now "+count);
	} 
	else {
		alert("You lost!");
	}
}

function userTurn() {
	var turn=0;
	while (turn !=1 && turn!=2 && turn !=3) {
		turn = prompt("Enter 1, 2 or 3");
		alert("Invalid entry.");
	}
	return Number(turn);
}

function CPUTurn(count){
	while (count < 20) var turn = Math.floor(Math.random()*3)+1;
	return turn;
}
	
