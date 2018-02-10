var answer = confirm('Do you want to play a game?');
var randomNumber, userNumber, countAttempts = 0, range = 5;
var goldPrize = 10, silverPrize = 5, bronzePrize = 2, userPrize=0, currentPrize;

if (answer) { 
	while (answer)	 {
		randomNumber = Math.floor(Math.random()*(range + 1));		
		while (countAttempts < 3) {
			currentPrize = countAttempts?countAttempts == 1?silverPrize:bronzePrize:goldPrize;
			userNumber = prompt("Enter your number from 0 to " + range + "\n" 
				+ "Attempts left: " + countAttempts + "\n" 
				+ "Total prize: " + userPrize + "\n"
				+ "Possible prize on current attempt: " + currentPrize,'');	
			if ((Number(userNumber) == randomNumber) && (userNumber == String(randomNumber)))  {  //Second part of checking catch the case '0' <> ''/' '
				switch (countAttempts) {
					case 0: 
						userPrize += goldPrize;
						alert('You won on the first attempt');
						break;
					case 1:
						userPrize += silverPrize;
						alert('You won on the second attempt');
						break;
					case 2:
						userPrize += bronzePrize;
						alert('You won on the third attempt');	
						break;	
				}
				answer = confirm('Do you want to continue a game?');
				if (answer) {
					countAttempts = 0;
					goldPrize*=3;
					silverPrize*=3;
					bronzePrize*=3;
					range*=2;
					randomNumber = Math.floor(Math.random()*(range + 1));	
					continue;		
				}	
				break;	
			}	
			countAttempts++;
		}
		console.log('Thank you for a game. Your prize is: ' + userPrize);
		answer = confirm('Do you want to play again?');
		if (answer) {
			countAttempts = 0;
			goldPrize = 10;
			silverPrize = 5;
			bronzePrize = 2;
			userPrize = 0;
			range = 5;
		}
	}
}	
else {
	console.log('You did not become a millionaire');
}	



