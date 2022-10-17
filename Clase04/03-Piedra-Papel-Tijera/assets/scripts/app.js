function startGame() {}

//btnStart.addEventListener("click", startGame);

//Otra manera con funcion anonima
btnStart.addEventListener("click", function () {

});

function getPlayerChoice(){

  const selection = prompt("Elija: PIEDRA, PAPEL O TIJERA").toUpperCase();

  if (selection !== "PIEDRA" && selection !== "PAPEL" && selection !== "TIJERA") {
    alert("Ingrese valor válido");
    return; //Termina instrucción de función
  }

  return selection;

  alert("El juego ha iniciado");
}

function getComputerChoice() {
  const randomValue = Math.random();

  //Operador ternario
  const selection = randomValue < 0.34 ? "PIEDRA" : randomValue < 0.67 ? "PAPEL" : "TIJERA";

  /*if (randomValue < 0.34) {
    selection = "ROCA";
  } else if (randomValue < 0.67) {
    selection = "PAPEL";
  } else {
    selection = "TIJERA";
  }
*/

  return selection;
}

const getWinner = (computer, player) => {
  if(computer === 'PIEDRA' && player === 'PAPEL'){
    return "¡PLAYER WINNER!"
  }else if(computer === 'PIEDRA'&& player === 'TIJERA'){
    return "¡COMPUTER WINNER!"
  }else if(computer === 'PAPEL' && player === 'PIEDRA'){
    return "¡COMPUTER WINNER!"
  }else if(computer === 'PAPEL' && player === 'TIJERA'){
    return "¡PLAYER WINNER!"
  }else if(computer === 'TIJERA' && player === 'PAPEL'){
    return "¡COMPUTER WINNER!"
  }else if(computer === 'TIJERA' && player === 'PIEDRA'){
    return "¡PLAYER WINNER!"
  }else if(computer === player){
    return "¡EMPATE!"
  }
}

btnStart.addEventListener('click', ()=>{

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();


  const winner = getWinner(computerChoice, playerChoice);

  console.log("Player Choice",playerChoice);
  console.log("Computer Choice", computerChoice);
  alert(getWinner(computerChoice, playerChoice));

});