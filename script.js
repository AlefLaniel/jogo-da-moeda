let resultado = document.querySelector('.resultado');


function girarMoeda() {
    document.querySelector('.moeda').setAttribute('src', './images/girando.gif');
    setTimeout(resultadoFinal, 1500);
}

function resultadoFinal() {
    let random = Math.floor(Math.random() * 2);
    if(random === 0){
        resultado.innerHTML ='Deu Cara <br> Gire novamente se quiser ;)';
        document.querySelector('.moeda').setAttribute('src', './images/cara.png');
    }else{
        resultado.innerHTML ='Deu Coroa <br> Gire novamente se quiser ;)';
        document.querySelector('.moeda').setAttribute('src', './images/coroa.png');
    }
}