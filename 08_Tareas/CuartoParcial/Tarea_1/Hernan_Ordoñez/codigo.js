//CONTAR EL NUMERO DE VECES QUE APARECE UNA LETRA EN UNA PALABRA
//HERNAN ORDOÑEZ SANGUEZA

let pal = "banana";
let letra = "a";
function numLetra(p, l) {
    let c = 0;
    for (i = 0; i < p.length; i++) {
        if (p.charAt(i) == l) {
            c++;
        }
    }
    document.write(`la letra '${l}' se repite ${c} veces en la palabra ${p}`)
}
numLetra(pal, letra);