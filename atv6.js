const biblioteca = [];

function cadastrarLivro() {
  const id = prompt("Digite o ID do livro:");
  const titulo = prompt("Digite o Título do Livro:");
  const autor = prompt("Digite o nome do Autor do Livro:");
  const emprestado = false; // Inicialmente, o livro não está emprestado
  biblioteca.push({ id, titulo, autor, emprestado });
  console.log(`O Livro "${titulo}" foi cadastrado com sucesso!`);
}

function alterarLivro() {
  const id = prompt("Digite o ID do Livro já cadastrado que deseja alterar:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) {
    const novoTitulo = prompt(`Digite o novo Título do livro ${id}:`);
    const novoAutor = prompt(`Digite o novo nome do Autor do livro ${id}:`);

    if (novoTitulo) {
      livroCadastrado.titulo = novoTitulo;
    }

    if (novoAutor) {
      livroCadastrado.autor = novoAutor;
    }

    console.log(`O Título do Livro "${id}" foi alterado para "${novoTitulo}" com sucesso!`);
    console.log(`O Autor do Livro "${id}" foi alterado para "${novoAutor}" com sucesso!`);
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

function deletarLivro() {
  const id = prompt("Digite o ID do livro já cadastrado que deseja deletar:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) {
    const index = biblioteca.indexOf(livroCadastrado);
    biblioteca.splice(index, 1);
    console.log(`O Livro "${id}" foi deletado com sucesso!`);
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

function realizarEmprestimo() {
  const id = prompt("Digite o ID do livro já cadastrado que deseja realizar empréstimo:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) {
    if (livroCadastrado.emprestado) {
      console.log(`O livro ${id} já foi emprestado. Digite um ID de um livro que não foi emprestado ainda`);
    } else {
      livroCadastrado.emprestado = true;
      console.log(`O livro ${id} foi emprestado com sucesso!`);
    }
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

function realizarDevolucao() {
  const id = prompt("Digite o ID do livro já cadastrado que deseja devolver:");
  const livroCadastrado = biblioteca.find((livro) => livro.id === id);

  if (livroCadastrado) {
    if (livroCadastrado.emprestado) {
      livroCadastrado.emprestado = false;
      console.log(`O Livro "${id}" foi devolvido com sucesso.`);
    } else {
      console.log(`O Livro "${id}" não foi emprestado ainda. Por favor, digite um livro que já foi emprestado.`);
    }
  } else {
    console.log(`O Livro com ID "${id}" não foi encontrado. Por favor, digite um ID de livro válido.`);
  }
}

while (true) {
  console.log("\nMenu de opções do nosso Sistema de Gerenciamento da Biblioteca");
  console.log("1) Cadastrar Livro");
  console.log("2) Alterar Livro");
  console.log("3) Deletar Livro");
  console.log("4) Realizar empréstimo de Livro");
  console.log("5) Realizar devolução de Livro");
  console.log("6) Sair");

  const opcao = Number(prompt("Escolha uma opção:"));

  switch (opcao) {
    case 1:
      cadastrarLivro();
      break;

    case 2:
      alterarLivro();
      break;

    case 3:
      deletarLivro();
      break;

    case 4:
      realizarEmprestimo();
      break;

    case 5:
      realizarDevolucao();
      break;

    case 6:
      console.log("Encerrando o programa...");
      process.exit(0);
      break;

    default:
      console.log("Opção inválida; Escolha uma opção entre 1 e 6");
  }
}
