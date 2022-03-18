const calcular = document.getElementById('calcular');

function horaLocal(){
    let horaSaida = parseInt(document.getElementById('horaSaida').value);
    let tempoViagem = parseInt(document.getElementById('tempoViagem').value);
    let fuso = parseInt(document.getElementById('fuso').value);
    let mensagem = document.getElementById('mensagem');

    let somaHoras = horaSaida + tempoViagem + fuso;

    let horaChegada;
    if (somaHoras > 0 && somaHoras < 23){
        horaChegada = somaHoras;
    }
    else if (somaHoras == 24){
        horaChegada = 0;
    }
    else if (somaHoras > 24){
        horaChegada = somaHoras - 24
    }
    else if (somaHoras < 0){
        horaChegada = 24 + somaHoras;
    }

    mensagem.textContent = `Você chegará ao seu destino às ${horaChegada} horas!`
}

calcular.addEventListener('click', horaLocal);