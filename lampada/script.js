const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/quebrada') > -1;
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = 'https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/ligada.jpg';
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = 'https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = 'https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken);