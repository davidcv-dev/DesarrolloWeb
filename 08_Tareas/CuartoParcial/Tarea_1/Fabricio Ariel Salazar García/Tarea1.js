let pal = "Banana";
let letra = "a";
function numLetra(p, l) {
    let c = 0;
    for (i = 0; i < p.length; i++) {
        if (p.charAt(i) == l) {
            c++;
        }
    }
    document.write(`La letra '${l}' se repite ${c} veces en la palabra Banana ${p}`)
}
numLetra(pal, letra);