function contarletra(palabra, letra) {
    let conteo = palabra.toLowerCase().split(letra.toLowerCase()).length - 1;
    return `La letra '${letra}' aparece ${conteo} veces en la palabra ${palabra}`;
  }
  console.log(contarletra("suuuuusan", "u")); 

  