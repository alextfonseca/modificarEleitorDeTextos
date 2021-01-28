// form
'use strickt';
const form = document.getElementById('form');
// text input
const textinput = document.getElementById('textinput');
// text modify
const textModify = document.getElementById('textModify');
// result
const result = document.querySelector('.result');
// speak text
const utterance = new SpeechSynthesisUtterance();
const speak = document.querySelector('.speak');
const stop = document.querySelector('.stop');

// function form
form.addEventListener('submit', function(e) {
    const init = textinput.value;
    const modify = textModify.value;
    const location = init.indexOf(modify);

    result.innerHTML = init.substring(location);
    result.classList.add('ativo');
    speak.classList.add('ativo');
    stop.classList.add('ativo');
    // init speak text
    utterance.lang = "pt-BR";
    utterance.text = init.substring(location);
    // function speak
    speak.addEventListener('click', () => {
        speechSynthesis.speak(utterance);
    });

    stop.addEventListener('click', () => {
        speechSynthesis.cancel();
    });

    // no submit form
    e.preventDefault();
});