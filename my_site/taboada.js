function calcularTabuada() {
    alert("Taboada");
    let n = prompt("Insira o número: ");
    n = parseInt(n);

    if (isNaN(n)) {
        document.write("Número inválido.");
    } else {
        for (let i = 1; i <= 10; i++) {
            let resultado = n * i;
            document.write(`${n} * ${i} = ${resultado}`);
        }
    }
}
