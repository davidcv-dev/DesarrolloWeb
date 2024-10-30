function contarLetras(cadena, caracter) {
    return cadena.split("").filter
    (letra => letra === caracter).length;
}

console.log(`La letra "e" se repite 
    ${contarLetras("elefante", "e")} veces`);