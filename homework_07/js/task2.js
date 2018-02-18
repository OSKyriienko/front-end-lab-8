var answer = confirm('Do you want to play a game?');
var randomNumber, userNumber, countAttempts = 3, range = 5;
var goldPrize = 10, silverPrize = 5, bronzePrize = 2, userPrize=0, currentPrize;

if (answer) { 
	while (answer)	 {
		randomNumber = Math.floor(Math.random()*(range + 1));		
		while (countAttempts > 0) {
			if (countAttempts == 3) {
				currentPrize = goldPrize;
			}
			else if (countAttempts == 2) {
					currentPrize = silverPrize;
	  			 }
				 else {
					currentPrize = bronzePrize;
				 }	
			userNumber = prompt(`Enter your number from 0 to ${range}  
				 Attempts left: ${countAttempts} 
				 Total prize: ${userPrize}
				 Possible prize on current attempt: ${currentPrize}`,'');	
			if ((Number(userNumber) == randomNumber) && (userNumber == String(randomNumber)))  {  //Second part of checking catch the case '0' <> ''/' '
				switch (countAttempts) {
					case 3: 
						userPrize += goldPrize;
						break;
					case 2:
						userPrize += silverPrize;
						break;
					case 1:
						userPrize += bronzePrize;
						break;	
				}
				answer = confirm('Do you want to continue a game?');
				if (answer) {
					countAttempts = 3;
					goldPrize*=3;
					silverPrize*=3;
					bronzePrize*=3;
					range*=2;
					randomNumber = Math.floor(Math.random()*(range + 1));	
					continue;		
				}	
				break;	
			}	
			countAttempts--;
		}
		console.log('Thank you for a game. Your prize is: ' + userPrize);
		answer = confirm('Do you want to play again?');
		if (answer) {
			countAttempts = 3;
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



