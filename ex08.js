function validarFormulario() {
    event.preventDefault();
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }
    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }
    if (senha === "") {
        alert("Por favor, preencha o campo Senha.");
        return false;
    }
    return true;

    function exibirDados() {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const genero = document.querySelector('input[name="genero"]:checked') ? document.querySelector('input[name="genero"]:checked').value : "Não especificado";
        const pais = document.getElementById("pais").value;
        const comentarios = document.getElementById("comentarios").value;
    
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `
            <h3>Dados Enviados:</h3>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gênero:</strong> ${genero}</p>
            <p><strong>País:</strong> ${pais}</p>
            <p><strong>Comentários:</strong> ${comentarios}</p>
        `;
    }

    function alterarConteudo() {
        document.getElementById("titulo").innerText = "Formulário Enviado com Sucesso!";
        document.getElementById("meuFormulario").style.backgroundColor = "#d4edda";
    }

    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
        event.preventDefault();  
    
       
        if (validarFormulario()) {
            exibirDados();
            alterarConteudo();  
        }
    })};