//beltran gonzalo quispe
function contarLetra(palabra, letra) {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {  
        if (palabra[i] === letra) {
            contador++;
        }
    }
    console.log(`La letra '${letra}' aparece ${contador} veces en la palabra '${palabra}';`);
}
contarLetra('banana', 'a');