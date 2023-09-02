const biblioteca = []; // Criando array "biblioteca" para armazenar os livros

// Laço de repetição While para o código rodar continuamente
while (true) 
{
  // Menu de opções
  console.log("\nMenu de opções do nosso Sistema de Gerenciamento da Biblioteca");
  console.log("1) Cadastrar Livro");
  console.log("2) Alterar Livro");
  console.log("3) Deletar Livro");
  console.log("4) Realizar empréstimo de Livro");
  console.log("5) Realizar devolução de Livro");
  console.log("6) Sair");

  const opcao = Number(prompt("Escolha uma opção:"));
  // Esolha-caso das opções oferecidas pelo sistema de gerenciamento bibliotecário
  switch (opcao) 
  {
    // Caso o usuário digite 1, irá fazer o seguinte código:
    case 1: // Cadastramento de livro
      const id1 = prompt("Digite o ID do livro:");
      const titulo = prompt("Digite o Título do Livro:");
      const autor = prompt("Digite o nome do Autor do Livro:");
      const emprestado = false;
      biblioteca.push({ id: id1, titulo, autor, emprestado }); // Adicinando o livro cujo id foi digitado pelo usuário ao Array "Biblioteca"
      console.log(`O Livro "${titulo}" foi cadastrado com sucesso!`);
      break;

    case 2: // Alteração de livro
      const id2 = prompt("Digite o ID do Livro já cadastrado que deseja alterar:");
      const livroCadastrado1 = biblioteca.find((livro) => livro.id === id2); // Usando método "find" para procurar o livro, através da verificação se o id do livro(livro.id) é igual ao id2 digitado pelo usuário

      if (livroCadastrado1) { // Se o livroCadastrado existir (de fato foi cadastrado), faça o seguinte código que pede pro usuário digirar as alterações
        const novoTitulo = prompt(`Digite o novo Título do livro ${id2}:`);
        const novoAutor = prompt(`Digite o nome do novo Autor do livro ${id2}:`);

        if (novoTitulo) { // Se novoTitulo existir, faça o código abaixo
          livroCadastrado1.titulo = novoTitulo; // Atribuindo novoTitulo ao livro digitado pelo usuario (livroCadastrado), atualizando o titulo anterior e alterando ele
        }

        if (novoAutor) { // Se novoAutor for verdadeiro. faça o seguinte código
          livroCadastrado1.autor = novoAutor; // Atribuindo novoAutor ao livro digitado pelo usuario (livroCadastrado), atualizando o autor anterior e alterando ele
        }

        console.log(`O Título do Livro "${id2}" foi alterado para "${novoTitulo}" com sucesso!`);
        console.log(`O Autor do Livro "${id2}" foi alterado para "${novoAutor}" com sucesso!`)
      } else {
        console.log(`O Livro "${id2}" não foi encontrado. Por favor, digite um ID de livro válido.`);
      }
      break;

    case 3: // Exclusão de Livro
      const id3 = prompt("Digite o ID do livro já cadastrado que deseja deletar:");
      const livroCadastrado2 = biblioteca.find((livro) => livro.id === id3);

      if (livroCadastrado2) { // Se livroCadastrado2 existir faça o seguinte código:
        const index = biblioteca.indexOf(livroCadastrado2); // Usando o método"indexOf para encontrar o índice (posição) do objeto livroCadastrado2 no array biblioteca e armazenando ele na variável index
        biblioteca.splice(index, 1); // Usando o método splice para remover 1 objeto encontrado no index
        console.log(`O Livro "${id3}" deletado com sucesso!`);
      } else { // Se livroCadastrado2 não existir faça o seguinte código:
        console.log(`O Livro "${id3}" não foi encontrado. Por favor, digite um ID de livro válido.`);
      }
      break;

    case 4: // Realização de empréstimo de livro
      const id4 = prompt("Digite o ID do livro já cadastrado que deseja emprestar:");
      const livroCadastrado3 = biblioteca.find((livro) => livro.id === id4);

      if (livroCadastrado3) { // Se livroCadastrado4 existir, faça o seguinte código:
        if (livroCadastrado3.emprestado) { // Se a propriedade emprestado do objeto livroCadastrado4 existir e ja tiver sido emprestado:
          console.log(`O Livro "${id4}" já está emprestado.`); // escreva que o livro cujo titulo se encontra em livroCadastrado4 já foi emprestado
        } else { // Se livroCadastrado4 não existir e não tiver sido emprestado antes:
          livroCadastrado3.emprestado = true; // define como verdadeiro (como se desse aval) para marcar que o livroCadastrado4 que não foi emprestado seja então emprestado na linha de código seguinte
          console.log(`O Livro "${id4}}" foi emprestado com sucesso.`);
        }
      } else { // Se livroCadastrado4 não existir, faça o seguinte código:
        console.log(`O Livro "${id4}" não foi encontrado. Por favor, digite um ID de livro válido.`);
      }
      break;

    case 5: // Devolução de Livro
      const id5 = prompt("Digite o ID do livro já cadastrado que deseja devolver:");
      const livroCadastrado4 = biblioteca.find((livro) => livro.id === id5);

      if (livroCadastrado4) { // Se livroCadastrado5 existir, faça o seguint
        if (livroCadastrado4.emprestado) { // Se livroCadastrado5 tiver sido emprestado, faça o seguinte código:
          livroCadastrado4.emprestado = false; // Dizendo que livroCadastrado5 é falso (ou seja, devolvido, não mais emprestado)
          console.log(`O Livro "${id5}" foi devolvido com sucesso.`);
        } else { // Se livroCadastrado5 não tiver sido cadastrado, faça o seguinte código:
          console.log(`O Livro "${id5}" não está emprestado.`);
        }
      } else {
        console.log(`O Livro "${id5}" não foi encontrado. Por favor, digite um ID de livro válido.`);
      }
      break;

    case 6: // Sair
      console.log("Encerrando o programa...");
      process.exit(0);
    default:
      console.log("Opção inválida; Escolha uma opção entre 1 e 6");
  }
  // Arrays: Biblioteca, 
  // Objetos: livroCadastrado1, Livrocadastrado2, livroCadastrado3, livroCadastrado4
  // Propriedades: id, titulo, autor, emprestado
  // Variáveis locais: id1, id2, id3, id4, id5, novoTitulo, novoAutor
  // Variável de controle: opcao
}
