// Validação Nome

const nomeInput = document.getElementById('nome');
const nomeErro = document.querySelector('.contato__nome .input-mensagem-erro');


nomeInput.addEventListener('invalid', function (evento) {
    evento.preventDefault();
    if (nomeInput.validity.valueMissing) {
        nomeErro.textContent = 'O campo de nome não pode ser deixado em branco';
    }
    nomeErro.style.display = 'block';
});

nomeInput.addEventListener('input', function (evento) {
    const nome = evento.target.value;
    if (nome.length > 50) {
        nomeErro.textContent = 'O nome deve ter no máximo 50 caracteres';
        nomeErro.style.display = 'block';
    } else {
        nomeErro.style.display = 'none';
    }
});

// Validação e-mail

const emailInput = document.getElementById('email');
const emailErro = document.querySelector('.contato__email .input-mensagem-erro');

emailInput.addEventListener('invalid', function (evento) {
    evento.preventDefault();
    if (emailInput.validity.valueMissing) {
        emailErro.textContent = 'O campo de e-mail não pode ser deixado em branco';
    } else if (emailInput.validity.typeMismatch) {
        emailErro.textContent = 'Por favor, insira um endereço de e-mail válido';
    }
    emailErro.style.display = 'block';
});

emailInput.addEventListener('input', function (evento) {
    if (emailInput.validity.valid) {
        emailErro.style.display = 'none';
    }
});

//Validação assunto

const assuntoInput = document.getElementById('assunto')
const assuntoErro = document.querySelector('.contato__assunto .input-mensagem-erro')

assuntoInput.addEventListener('invalid', function (evento) {
    evento.preventDefault()
    if (assuntoInput.validity.valueMissing) {
        assuntoErro.textContent = 'O campo de assunto não pode ser deixado em branco'
        assuntoErro.style.display = 'block'
    }
})

assuntoInput.addEventListener('input', function (evento) {
    if (assuntoInput.validity.valid) {
        assuntoErro.style.display = 'none';
    }
});

assuntoInput.addEventListener('input', function (evento) {
    const assunto = evento.target.value
    if (assunto.length > 50) {
        assuntoErro.textContent = 'O campo assunto deve ter no máximo 50 caracteres'
        assuntoErro.style.display = 'block'
    } else {
        assuntoErro.style.display = 'none';
    }
})

//Validação mensagem

const mensagemInput = document.getElementById('mensagem');
const mensagemErro = mensagemInput.nextElementSibling;

mensagemInput.addEventListener('blur', function() {
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
