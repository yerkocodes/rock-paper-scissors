const rock = 0;
const paper = 1;
const scissors = 2;

const tie = 0;
const win = 1;
const lost = 2;


let userOption = null;
let rondas = 0

const rounds = () => {
  rondas = document.getElementById('header-input').value;
  if ( rondas > 0 ) {
    ronda.innerHTML = `Preparate para jugar ${rondas} rondas contra la maquina!`
    console.log(rondas);
    return rondas;
  } else {
    alert('Debe ser un numero mayor a 0.')
  }
}

function game (userOption) {
let optionMachine = Math.floor(Math.random() * 3);
  if ( rondas > 0 ) {
    calcResult(userOption, optionMachine)
    rondas--
  }
  if ( rondas === 0 ) {
    alert(`Se acabaron tus rondas. Ingresa un nuevo numero para seguir jugando.`);
  }
}

const calcResult = (userOption, optionMachine) => {
  if( userOption === optionMachine) { // Usuario y maquina escogen lo mismo
      resultadoFinal.innerHTML = `Empate!`;
    console.log('Empate!');

  } else if ( userOption === rock ) { //Usuario escoge roca

    if (optionMachine === scissors) {
      resultadoFinal.innerHTML = `Que mal! Perdiste!`;
    console.log('Una lastima! Perdiste!');
    }
    if ( optionMachine === paper ) {
      resultadoFinal.innerHTML = `Buena suerte! Ganaste!`;
    console.log('Genial! Ganaste!');
    }

  } else if ( userOption === paper ) { // Usuario escoge papel

    if ( optionMachine === rock ) {
      resultadoFinal.innerHTML = `Que mal! Perdiste!`;
    console.log('Una lastima! Perdiste!');
    }
    if ( optionMachine === scissors ) {
      resultadoFinal.innerHTML = `Buena suerte! Ganaste!`;
    console.log('Genial! Ganaste!');
    }
  } else if ( userOption === scissors ) { // Usuario escoge tijeras

    if ( optionMachine === rock ) { 
      resultadoFinal.innerHTML = `Buena suerte! Ganaste!`;
    console.log('Genial! Ganaste!');
    }
    if ( optionMachine === paper ) {
      resultadoFinal.innerHTML = `Que mal! Perdiste!`;
    console.log('Una lastima! Perdiste!');
    }
  }

}
