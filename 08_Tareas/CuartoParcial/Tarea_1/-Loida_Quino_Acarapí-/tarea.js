function contarLetras(cadena, caracter) {
    return cadena.split("").filter(letra => letra === caracter).length;
}

console.log(`La letra "a" se repite ${contarLetras("anaranjado", "a")} veces`);