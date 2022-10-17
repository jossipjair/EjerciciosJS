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

  let selection;

  if (randomValue < 0.34) {
    selection = "ROCA";
  } else if (randomValue < 0.67) {
    selection = "PAPEL";
  } else {
    selection = "TIJERA";
  }

  return selection;
}

btnStart.addEventListener('click', function(){

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  console.log("Player Choice",playerChoice);
  console.log("Computer Choice", computerChoice);

});