function contarletra(palabra, letra) {
    let conteo = palabra.toLowerCase().split(letra.toLowerCase()).length - 1;
    return `La letra '${letra}' aparece ${conteo} veces en la palabra ${palabra}`;
  }

  //Para la ejecucion: Ingresar datos de entrada
  console.log(contarletra("suuuuusan", "u")); 

  //la salida nos bota: La letra 'u' aparece 5 veces en la palabra suuuuusan