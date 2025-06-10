
// classe para gerenciar dados do formulário de contato

document.addEventListener('DOMContentLoaded', function() {
    const termsCheckbox = document.getElementById('terms-checkbox');
    const submitButton = document.getElementById('submit-button');

    termsCheckbox.addEventListener('change', function() {
        submitButton.disabled = !this.checked;
    });
});

class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(form) {
    let data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value
    );

    // validações dos campos do formulário
    if (!validarEmail(data.email)) {
        alert("Por favor, insira um endereço de e-mail válido");
        return false;
    }

    if (!validarCPF(data.cpf)) {
        alert("Por favor, insira um número de CPF válido");
        return false;
    }

    if (!validarTelefone(data.telefone)) {
        alert("Por favor, insira um número de telefone válido");
        return false;
    }

    alert(`Obrigado ${data.nome} ${data.sobrenome}!
Seus dados foram enviados com sucesso.
Entraremos em contato através do seu ${data.tipoContato.toLowerCase()}.`);
    form.reset();
    return false;
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    return cpf.length === 11;
}

function validarTelefone(telefone) {
    telefone = telefone.replace(/[^\d]/g, '');
    return telefone.length >= 10 && telefone.length <= 11;
}