const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors'){
    return userInput;
  }else{
    console.log('Error message user choice.');
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0 :
      return 'rock';
      break;
    case 1 :
      return 'paper';
      break;
    case 2 :
      return 'scissors';
      break;
    default :
      return 'Nothing pick.';
      break;
  }
}

const determineWinner = (userChoice,computerChoice) =>{
  if(userChoice === 'bomb'){
    return 'User won.';
  }
    if(userChoice === computerChoice){
      return 'The game was tie !';
    }

    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won.';
      }else{
        return 'User won.';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer won.';
      }else{
        return 'User won.';
      }
    }

    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer won.';
      }else{
        return 'User won.';
      }
    }
}

const playGame = () =>{
  userChoice = getUserChoice('paper');
  computerChoice = getComputerChoice();
  console.log(`User choice : ${userChoice} && Computer choice : ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));

}

playGame();
