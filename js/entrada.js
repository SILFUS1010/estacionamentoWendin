form = document.getElementById('formEntrada')
inputPlaca = document.getElementById('inputPlaca')
inputModelo = document.getElementById('inputModelo')
inputCategoria = document.getElementById('inputCategoria')
inputCor = document.getElementById('inputCor')
inputDataeHora = document.getElementById('inputData')

btnRegistraSaida = document.getElementById('btnRegistraSaida');

let localSTPlaca = []
let localSTModelo = []
let localSTCategoria = []
let localSTCor = []
let localSTData = []

// Funcao que verifica o preenchimento dos campos de entrada de novo veiculo
function validaCampoVazio() {

    if (inputPlaca.value == 0 || inputModelo.value == 0 || inputCategoria.value == 0
        || inputCor.value == 0 || inputDataeHora.value == 0) {
        alert('Os campos não podem sem vazios')
        return;
    }

    localSTPlaca = JSON.parse(localStorage.getItem('placa')) ?? localSTPlaca;
    localSTModelo = JSON.parse(localStorage.getItem('modelo')) ?? localSTCategoria;
    localSTCategoria = JSON.parse(localStorage.getItem('categoria')) ?? localSTCategoria;
    localSTCor = JSON.parse(localStorage.getItem('cor')) ?? localSTCor; 
    localSTData = JSON.parse(localStorage.getItem('data')) ?? localSTData;


    localSTPlaca.push(inputPlaca.value);
    localSTModelo.push(inputModelo.value);
    localSTCategoria.push(inputModelo.value);
    localSTCor.push(inputCor.value);
    localSTData.push(inputData.value);

    localStorage.setItem('placa', JSON.stringify(localSTPlaca));
    localStorage.setItem('modelo', JSON.stringify(localSTModelo));
    localStorage.setItem('categoria', JSON.stringify(localSTCategoria));
    localStorage.setItem('cor', JSON.stringify(localSTCor));
    localStorage.setItem('data', JSON.stringify(localSTData));

    inputPlaca.value = '';
    inputModelo.value = '';
    inputCategoria.value = '';
    inputCor.value = '';
    inputDataeHora.value = ''

    mudaPag();

    console.log(localSTPlaca)
}

//funcao para redirecionar para pagina de patio
function mudaPag(){
    window.location.href = "/html/patio.html"
}

//funcao para redirecionar para tela de entrada
function mudaPagEntrada(){
    window.location.href = "/index.html"
}
