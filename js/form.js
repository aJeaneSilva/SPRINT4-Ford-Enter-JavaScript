
//class contato

class contato {
    constructor(nome, email, telefone, tipodecontato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipodecontato = tipodecontato;
        this.escreva = mensagem;
    }
}

function Post(form) {
    event.preventDefault();
   
  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value,  
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("escreva").value);
    Enviar(data);

    form.reset();
}

function Enviar(data) {
    if (data && data.nome) {
    alert("Obrigado sr(a). " + data.nome + " os seus dados foram encaminhados com sucesso!");
    }

    let nomeInput = document.getElementById("nome");
    let emailInput = document.getElementById("email"); 
    let telefoneInput = document.getElementById("telefone");
    let tipodecontatoSelect = document.getElementById("tipodecontato");
    let mensagemInput = document.getElementById("escreva");
        console.log(data);

}