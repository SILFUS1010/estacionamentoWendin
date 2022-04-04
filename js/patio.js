var quantidadeDeCarro = 0;

let exibeCarros = document.getElementById("exibeCarros")
let placaCliente = document.getElementById("placa")
let nomeCliente = document.getElementById("nomeCliente")


registroSaidaVeiculo();
exibeDadosTabelaPesquisa()
exibeCarrosPatio();

//Funcao para carregar carros na tela de patio
function exibeCarrosPatio() {
    exibeCarros.value = quantidadeDeCarro;
}

//Funcao que insere os carros na tabela de patio
function exibeDadosTabelaPesquisa() {

    var placaLocalSt = JSON.parse(localStorage.getItem('placa'));
    var modeloLocalSt = JSON.parse(localStorage.getItem('modelo'));
    var categoriaLocalSt = JSON.parse(localStorage.getItem('categoria'));
    var corLocalSt = JSON.parse(localStorage.getItem('cor'));
    var dataLocalSt = JSON.parse(localStorage.getItem('data'));

    var table = document.querySelector('#tabelaPesquisaCliente');

    for (i = 0; i < placaLocalSt.length; i++) {

        var row = table.insertRow(i+1);
        var placaTable = row.insertCell(0);
        var modeloTable = row.insertCell(1);
        var dataTable = row.insertCell(2);

        placa = placaLocalSt[i];
        placaTable.innerHTML = placa;

        modelo = modeloLocalSt[i];
        modeloTable.innerHTML = modelo;

        data = dataLocalSt[i];
        dataTable.innerHTML = data;
        quantidadeDeCarro++;
    }

    exibeCarrosPatio();
}

//Funcao para registrar a saide dos veiculos
function registroSaidaVeiculo() {

    let tableSaida = document.getElementById('tabelaPesquisaCliente');
    let btnRegistraSaida = document.getElementById('btnRegistraSaida');
    var linhas = tableSaida.getElementsByTagName("td");

    for (var i = 0; i < linhas.length; i++) {
        var linha = linhas[i];
        linha.addEventListener("click", function () {
            selLinha(this, true);
        });
    }
}

//Funcao para remover o carro selecionado da lista
function selLinha(linha, multiplos){
    if(!multiplos){
        var linha = document.getElementsByTagName("td");
          for(var i = 0; i < linha.length; i++){
             var linha_ = linha[i];
             linha_.classList.remove("selecionado");    
          }
    }
    linha.classList.toggle("selecionado");
  }
