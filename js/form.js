
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contatarpor) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contatarpor = contatarpor;
    }
}

function Post(form) {
    event.preventDefault();
   
  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
    Enviar(data);
}

function Enviar(data) {
    if (data && data.nome) {
    alert("Obrigado sr(a). " + data.nome + " os seus dados foram encaminhados com sucesso!");
    }

    let nomeInput = document.getElementById("nome");
    let sobrenomeInput = document.getElementById("sobrenome");
    let emailInput = document.getElementById("email");
    let cpfInput = document.getElementById("cpf"); 
    let telefoneInput = document.getElementById("telefone");
    let contatarporSelect = document.getElementById("Contatar por:");

        console.log(data);

}