const calcular = document.getElementById('calcular');

function calculo() {
    let codigo = parseInt(document.getElementById('codigo').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valor = parseFloat(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');

    let total;
    total = (quantidade*valor).toFixed(2);

    resultado.textContent = `Você adquiriu ${quantidade} peça(s) do código ${codigo}, totalizando R$${total}!`;
}

calcular.addEventListener('click', calculo);