function validarInput(input, erro, mensagem, validacao) {
    input.addEventListener('invalid', function (evento) {
        evento.preventDefault();
        if (input.validity.valueMissing) {
            erro.textContent = 'O campo não pode ser deixado em branco';
        } else if (input.validity.typeMismatch) {
            erro.textContent = mensagem;
        }
        erro.style.display = 'block';
    });

    input.addEventListener('input', function (evento) {
        if (validacao(evento.target.value)) {
            erro.style.display = 'none';
        } else {
            erro.textContent = mensagem;
            erro.style.display = 'block';
        }
    });
}

const nomeInput = document.getElementById('nome');
const nomeErro = document.querySelector('.contato__nome .input-mensagem-erro');

validarInput(nomeInput, nomeErro, 'O nome deve ter no máximo 50 caracteres', function (valor) {
    return valor.length <= 50;
});

const emailInput = document.getElementById('email');
const emailErro = document.querySelector('.contato__email .input-mensagem-erro');

validarInput(emailInput, emailErro, 'Por favor, insira um endereço de e-mail válido', function (valor) {
    return valor.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
});

const assuntoInput = document.getElementById('assunto')
const assuntoErro = document.querySelector('.contato__assunto .input-mensagem-erro')

validarInput(assuntoInput, assuntoErro, 'O campo assunto deve ter no máximo 50 caracteres', function (valor) {
    return valor.length <= 50;
});

const mensagemInput = document.getElementById('mensagem');
const mensagemErro = mensagemInput.nextElementSibling;

mensagemInput.addEventListener('blur', function () {
    if (mensagemInput.value.trim() === '') {
        mensagemErro.textContent = 'O campo de mensagem não pode ser deixado em branco.';
        mensagemErro.style.display = 'block';
    } else if (mensagemInput.value.length > 300) {
        mensagemErro.textContent = 'O campo de mensagem não pode ter mais de 300 caracteres.';
        mensagemErro.style.display = 'block';
    } else {
        mensagemErro.style.display = 'none';
    }
});