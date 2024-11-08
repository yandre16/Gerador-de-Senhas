const botoes = document.querySelectorAll(".botoes");
const numeroSenha = document.querySelector(".numeroSenha");
const forcaSenha = document.querySelector('.forca');

let tamanhoSenha = 12;

botoes[0].onclick = diminuirSenha;
botoes[1].onclick = aumentarSenha;

function diminuirSenha (){
    if (tamanhoSenha > 0) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentarSenha (){
    if (tamanhoSenha < 15){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();

}
// ---------------------------------------------------
const campoSenha = document.querySelector('#campoSenha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXWYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%*&';
const checkbox = document.querySelectorAll('.checkbox');


geraSenha();

function geraSenha() { let alfabeto = '';

    if (checkbox[0].checked){
        alfabeto = alfabeto +letrasMaiusculas;
    }if (checkbox[1].checked) {
        alfabeto = alfabeto +letrasMinusculas;
    }if (checkbox[2].checked) {
        alfabeto = alfabeto +numeros;
    }if (checkbox[3].checked) {
        alfabeto = alfabeto +simbolos;
    }

    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++) {
        let numeroAleatorio = Math.floor(Math.random()*alfabeto.length);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
classificaSenha(alfabeto.length)
}
function classificaSenha (tamanhoAlfabeto) {
    let entropia = parseInt(Math.log2(tamanhoAlfabeto)*tamanhoSenha);

    forcaSenha.classList.remove('fraco','medio','forte');

    if (entropia < 25) {
        forcaSenha.classList.add('fraco');
    } if (entropia >= 25 && entropia < 40) {
        forcaSenha.classList.add('medio');
    } if (entropia >= 40) {
        forcaSenha.classList.add('forte');
    }
}
