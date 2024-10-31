function contar() {
    const frase = document.getElementById('frase').value;
    const letra = document.getElementById('letra').value;
    const total = [...frase].filter(c => c === letra).length;
    document.getElementById('resultado').innerText = `La letra '${letra}' se repite ${total} veces.`;
}
