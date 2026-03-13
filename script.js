// Função para salvar os dados do formulário no localStorage
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Coletar dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    
    // Criar um objeto com os dados
    const cliente = {
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
        dataNascimento: dataNascimento
    };
    
    // Salvar no localStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));

    // Limpar os campos do formulário após salvar
    document.getElementById('formCadastro').reset();

    alert('Cadastro realizado com sucesso!');
});

// Função para redirecionar para uma nova página
document.getElementById('btnContinuar').addEventListener('click', function() {
    window.location.href = 'pagina-inicial.html'; // Novo arquivo HTML para começar do zero
});
