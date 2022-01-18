const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value; /*vai pegar o valor*/
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1); /*toFixed: qtd de casas decimais*/

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso!';
        }
        else if (valorIMC < 25){
            classificacao = 'com peso ideal!';
        }
        else if (valorIMC < 30){
            classificacao = 'com sobrepeso!';
        }
        else if (valorIMC < 35){
            classificacao = 'com obesidade grau I!';
        }
        else if (valorIMC < 40){
            classificacao = 'com obesidade grau II!';
        }
        else{
            classificacao = 'com obesidade grau III!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; /*textContent é o conteúdo da tag*/
    }

    else{
        alert('Preencha todos os campos!!!')
    }
}

calcular.addEventListener('click', imc); /*quando clicar em calcular, vai mostrar o resultado da funcao imc*/ 