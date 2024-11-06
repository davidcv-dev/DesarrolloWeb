// CONTAR EL NUMERO DE VECES QUE APARECE UNA LETRA EN UNA PALABRA
let pal="Betzabe";
let letra= "e";
function NumLetra(p, l){
    let c = 0;
    for (i = 0; i<p.length; i++){
        if(p.charAt(i) == l){
            c++;
        }
    }
    document.write(`La letra ' ${l} 'se repite ${c} veces en la palabra ${p}`)
}
NumLetra(pal, letra);
        
    

