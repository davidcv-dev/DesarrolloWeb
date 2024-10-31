function ContarLetras(cadena,caracter) {
    let cont=0;
    for (let index = 0; index < cadena.length; index++) {
        if (cadena[index] === caracter) {
            cont++;
        }
    }
    console.log("la letra '"+caracter+"' se repite "+cont+" veces");
}
console.log(ContarLetras("calculadora","a"));