function calcularIdadePrisioneiro() {
    let idadePrisioneiro = prompt("Informe a idade do indivíduo");
    const liberdade = 18;
    const regimeFechado = 16;
    const regimeSemiaberto = 17;

    if (idadePrisioneiro <= regimeFechado) {
        document.write("Aguarde, seu tempo ainda precisa ser concluído.");
    } else if (idadePrisioneiro == regimeSemiaberto) {
        document.write("No momento, você encontra-se em regime semiaberto.");
    } else {
        document.write("Você está em liberdade.");
    }
}
