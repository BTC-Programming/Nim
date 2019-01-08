var count = 0,player = 0,cpu = 0;
alert("Let\'s play Nim. You go first");
while(count<21){
	count += player;
	if(count < 21){
		player = playerInput(count);
		alert("the count is now "+count);
		if(count == 20){
			alert("computer lost");
		} else {
			cpu = Math.floor(Math.random()*3)+1;
			count += cpu;
			if(count>21){
				count = 20;
			}
			alert("the count is now "+count);
		}
	} 
	else {
		alert("You lost!");
	}
}

function playerInput(count) {
	player = prompt("Enter 1, 2 or 3");
	if (player !=1 && player!=2 && player !=3) {
		alert("Invalid entry.");
		player = playerInput(count);
	}
	return parseInt(player);
}
