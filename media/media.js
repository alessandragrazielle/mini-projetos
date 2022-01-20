const calcular = document.getElementById('calcular');


function valor() {
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let mensagem = document.getElementById('mensagem');

    if (nome!=='' && nota1!=='' && nota2!=='' && nota3!==''){
        let media = ((nota1 + nota2 + nota3) / 3).toFixed(1);

        let situacao;
        if (media >= 7.0){
            situacao = "APROVADO(A).";
        }
        else{
            situacao = "REPROVADO(A)";
        }

        mensagem.textContent = `Olá, ${nome}! Sua média é ${media} e você está ${situacao}`;
    }
    else{
        alert('Preencha todos os campos!!!');
    }
}

calcular.addEventListener('click', valor);