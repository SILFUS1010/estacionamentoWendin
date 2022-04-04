
//Funcao para carregar dados da tela de historico
function exibeDadosTabelaPesquisa() {

    var table = document.querySelector('#tableHistorico');

    var placaLS = JSON.parse(localStorage.getItem('placa'))
    var carroLS = JSON.parse(localStorage.getItem('modelo'))
    var horaLS = JSON.parse(localStorage.getItem('data'))

    for (i = 0; i < placaLS.length; i++) {

        var row = table.insertRow(i+1);

        var placaHistorico = row.insertCell(0);
        var dataHistorico = row.insertCell(1);
        var carroHistorico = row.insertCell(2);

        placa = placaLS[i];
        placaHistorico.innerHTML = placa;
       
        data = horaLS[i];
        dataHistorico.innerHTML = data;

        caro = carroLS[i];
        carroHistorico.innerHTML = caro;
    }
}

exibeDadosTabelaPesquisa()