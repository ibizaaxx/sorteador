document.getElementById('sortear').addEventListener('click', function() {
    const min = 1; // Valor mínimo
    const max = 100; // Valor máximo
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultado').textContent = `Número sorteado: ${numeroSorteado}`;
});