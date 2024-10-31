const palab = "banana";
const letBusc = "a";

function contarLetra(texto, letra) {
    let cont = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === letra) {
            cont++;
        }
    }
    console.log(`La letra '${letra}' se repite ${cont} veces en la palabra '${texto}'`);
}
contarLetra(palab, letBusc);
