const rock = 0;
const paper = 1;
const scissors = 2;

const tie = 0;
const win = 1;
const lost = 2;

const rockBtn = document.getElementById('rockBtn');
const papperBtn = document.getElementById('papperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');


rockBtn.addEventListener('click', function() {
  game(rock);
})
papperBtn.addEventListener('click', function() {
  game(paper);
})
scissorsBtn.addEventListener('click', function() {
  game(scissors);
})

// Funcion que determina los parametros del juego
function game(userOption) {
  // El resutado de la maquina sera aleatorio entre 1 y 3
  const optionMachine = Math.floor(Math.random() * 3);
  // result sera nuestra function de calculo de resultado
  const result = calcResult(userOption, optionMachine);

  //Imprimir en pantalla quien ha ganado
  switch(result) {
    case tie:
	alert('Empate!');
	break;
    case win:
	alert('Ganaste!');
	break;
    case lost:
	alert('Perdiste!');
	break;
  }
}

// FUNCTION QUE RESUELVE EL RESULTADO DE LAS JUGADAS ---------------
let calcResult = (userOption, optionMachine) => {

  if( userOption === optionMachine) { // Usuario y maquina escogen lo mismo
    return tie;

  } else if ( userOption === rock ) { //Usuario escoge roca

    if (optionMachine === scissors) {
      return lost;
    }
    if ( optionMachine === paper ) {
      return win;
    }

  } else if ( userOption === paper ) { // Usuario escoge papel
    
    if ( optionMachine === rock ) {
      return lost;
    }
    if ( optionMachine === scissors ) {
      return win;
    }
  } else if ( userOption === scissors ) { // Usuario escoge tijeras

    if ( optionMachine === rock ) { return win; }
    if ( optionMachine === paper ) {
      return lost;
    }
  }
}

