function calcularSomaIdade() {
    let nomeTemp, nomeNovo, nomeVelho;
    let idadeTemp;
    let menorIdade = 200;
    let maiorIdade = 0;
    let somadasidades = 0;

    for (let i = 1; i <= 5; i++) {
        nomeTemp = prompt(`Informe o nome da pessoa ${i}: `);
        idadeTemp = parseInt(prompt(`Informe a idade de ${nomeTemp}: `));

        if (idadeTemp > maiorIdade) {
            maiorIdade = idadeTemp;
            nomeVelho = nomeTemp;
        }
        if (idadeTemp < menorIdade) {
            menorIdade = idadeTemp;
            nomeNovo = nomeTemp;
        }

        somadasidades += idadeTemp;
    }

    let mediaidades = somadasidades / 5;
    document.write(`A pessoa mais velha é: ${nomeVelho} com: ${maiorIdade} anos.<br>`);
    document.write(`A pessoa mais nova é: ${nomeNovo} com: ${menorIdade} anos.<br>`);
    document.write(`A média das idades é: ${mediaidades.toFixed(2)} anos.`);
}
