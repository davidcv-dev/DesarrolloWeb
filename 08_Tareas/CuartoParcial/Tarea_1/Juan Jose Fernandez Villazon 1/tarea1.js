function ContarLetras(cadena,caracter) {
    let contador=0;
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index] === caracter) {
            contador++;
        }
    }
    console.log("la letra "+caracter+" se repite "+contador+" veces");
}

ContarLetras("paralelepipedo","e");