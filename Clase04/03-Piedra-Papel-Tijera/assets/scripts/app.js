function startGame() {}

//btnStart.addEventListener("click", startGame);

//Otra manera con funcion anonima
btnStart.addEventListener("click", function () {
  //const choiceUser = prompt("Elija: PIEDRA, PAPEL O TIJERA");
  //const selection = choiceUser.toUpperCase(); //Convierte a mayusculas el valor del string

  const selection = prompt("Elija: PIEDRA, PAPEL O TIJERA").toUpperCase();

  if (selection !== "ROCA" && selection !== "PAPEL" && selection !== "TIJERA") {
    alert("Ingrese valor válido");
    return; //Termina instrucción de función
  }

  return selection;

  alert("El juego ha iniciado");
});

function getComputerChoice() {
  const randomValue = Math.random();

  let selection;

  if (randomValue < 0.34) {
    selection = "ROCK";
  } else if (randomValue < 0.67) {
    selection = "PAPEL";
  } else {
    selection = "TIJERA";
  }

  return selection;
}