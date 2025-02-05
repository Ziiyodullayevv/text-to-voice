let btn = document.querySelector("button")



function speaker() {
    let inp = document.querySelector('input')


    let speech = new SpeechSynthesisUtterance(inp.value)
    speech.speed = 1;
    speech.pitch = 1;
    speech.lang = 'ru-RU'


    window.speechSynthesis.speak(speech)
}









