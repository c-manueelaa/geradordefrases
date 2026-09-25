const frases = [
    'frase1',
    'frase2',
    'frase3',
    'frase4',
    'frase5'
]

const btnNova = document.getElementById("btn-nova");
const textoFrase = document.getElementById("texto-frase");

btnNova.addEventListener("click", function( ) {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    textoFrase.textContent = frases[indiceAleatorio];
    
});