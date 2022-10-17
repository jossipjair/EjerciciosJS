function startGame(){
    console.log("Game is starting");
}

const game ={
    title: 'Juego Piedra, Papel y Tijera',
    start: function start(){
        console.log('Game is starting desde game object')
    }
}

//startGame();

//btnStart.addEventListener('click', startGame);
console.log(typeof startGame)
console.dir(startGame)
btnStart.addEventListener('click', game.start);