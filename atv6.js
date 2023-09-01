const biblioteca = [];

while (true) {
  console.log(
    "\nMenu de opções do nosso Sistema de Gerenciamento da Biblioteca"
  );
  console.log("1) Cadastrar Livro");
  console.log("2) Alterar Livro");
  console.log("3) Deletar Livro");
  console.log("4) Realizar empréstimo de Livro");
  console.log("5) Realizar devolução de Livro");
  console.log("6) Sair");

  const opcao = Number(prompt("Escolha uma opção:"));

  switch (opcao) {
    case 1:
      const id1 = prompt("Digite o ID do livro:");
      const titulo = prompt("Digite o Título do Livro:");
      const autor = prompt("Digite o nome do Autor do Livro:");
      biblioteca.push({ livro: titulo, autor, id1 });
      break;
    case 2:
      const id2 = prompt(
        "Digite o ID do Livro já cadastrado que deseja alterar:"
      );
      const livrocadastrado = biblioteca.find((a) => a.livro === id2);

      if (livrocadastrado) {
      } else {
        console.log(
          "Livro não encontrado. Por favor, digite um livro que já foi cadastrado anteriormente:"
        );
      }
    case 3:
      const id3 = prompt(
        "Digite o ID do livro já cadastrado que deseja deletar:"
      );
      const livrocadastrado2 = biblioteca.find((a) => a.livro === id3);

      if (livrocadastrado2) {
      } else {
        console.log(
          "Livro não encontrado. Por favor, digite um livro que já foi cadastrado anteriormente:"
        );
      }
    case 4:
      const id4 = prompt(
        "Digite o ID do livro já cadastrado que deseja emprestar:"
      );
      const livrocadastrado4 = biblioteca.find((a) => a.livro === id4);

      if (livrocadastrado4) {
      } else {
        console.log(
          "Livro não encontrado. Por favor, digite um livro que já foi cadastrado anteriormente:"
        );
      }
    case 5:
      const id5 = prompt(
        "Digite o ID do livro já cadastrado que deseja emprestar:"
      );
      const livrocadastrado5 = biblioteca.find((a) => a.livro === id5);

      if (livrocadastrado5) {
        if (livroemprestado) {
          console.log(`O Livro ${id5.livro} foi devolvido com sucesso.`);
        } else {
          console.log(
            "Livro não encontrado. Por favor, digite um livro que já foi cadastrado anteriormente:"
          );
        }
      }

    case 6:
      console.log("Encerrando o programa");
      process.exit(0);
    default:
      console.log("Opção inválida; Escolha uma opção entre 1 e 4");
  }
}
