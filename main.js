function tocaSom(AudioSelector) {
    const element = document.querySelector(AudioSelector);

    if (element && element.localName === 'audio') {
            element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const keyList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrument = key.classList[1];

    //template string
    const idAudio = `#som_${instrument}`; 

    key.onclick = function (){
        tocaSom(idAudio);
    }

    key.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('active');
        }
    }

    key.onkeyup = function () {
        key.classList.remove('active');
    }

}
