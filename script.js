function trocaT() {
    let mensagem = document.getElementById("inputTrocaT").value;
    let mensagemAtualizada = mensagem.replace(/t/ig, "7");
    document.getElementById("textTrocaT").innerHTML = mensagemAtualizada;
}

function procuraP() {
    let mensagem = "Olá , sou Pedro"
    let palavraChave = document.getElementById("inputProcuraP").value;
    let contador = 0;
    let palavras = mensagem.split(" ");
  
    palavras.forEach(palavra => {
        if (palavra.toLowerCase() === palavraChave.toLowerCase()) {
            contador++;
        }
    });
  
    document.getElementById("textProcuraP").innerHTML = `A palavra "${palavraChave}" aparece ${contador} vezes.`;
}

function permite() {
    let entrada = document.getElementById("inputPermite").value;
    let regexUppercase = /[A-Z]/g;
    let regexSpecialCharOrNumber = /^(?=.*[0-9\W]).+$/;

    if (regexSpecialCharOrNumber.test(entrada) || regexUppercase.test(entrada)) {
        document.getElementById("textPermite").innerHTML = "É proibido inserir caracteres especiais, números ou letras maiúsculas.";
    } else {
        document.getElementById("textPermite").innerHTML = entrada;
    }
}