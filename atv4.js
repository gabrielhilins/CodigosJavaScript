// Vetores para armazenar os produtos e as pessoas
const produtos = [];
const pessoas = [];

// Função para gerar um número aleatório entre min e max (incluindo ambos)
function sorteioNumAleatorio(min, max ) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para exibir o menu
function exibirMenu() 
{
  console.log("1. Cadastrar Produto");
  console.log("2. Cadastrar Pessoas");
  console.log("3. Sortear");
  console.log("4. Sair");
}


let continuar = true;
// Enquanto continuar for verdadeiro, ele irá exibir o menu e perguntar pro usuário escolher uma opção
// Enquanto continuar for verdadeiro, o escolha-caso Switch será executado
while (continuar) 
{
  exibirMenu();

  const opcao = parseInt(prompt("Escolha uma opção:")); // parseInt irá analisar a opção escolhida pelo usuário como um número inteiro e não como um prompt comum, que seria uma string

  switch (opcao) 
  {
    // Caso o usuário escolha a opção 1, um produto será cadastrado
    case 1:
      const novoProduto = prompt("Digite o nome do produto:");
      produtos.push(novoProduto); // O push irá adicionar o novo produto cadastrado pelo usuário ao primeiro produto adicionado, criando uma lista
      console.log(`Produto ${novoProduto} cadastrado com sucesso!`);
      break;

    // Caso o usuário escolha a opção 2, uma pessoa será cadastrada
    case 2:
      const novaPessoa = prompt("Digite o nome da pessoa:");
      pessoas.push(novaPessoa); // O push irá adicionar a nova pessoa cadastrada pelo usuário aos outros produtos, criando uma lista interligada
      console.log(`Pessoa ${novaPessoa} cadastrada com sucesso!`);
      break;

    // Caso o usuário escolha a opção 3, se a quantidade de produtos ou pessoas (produtos.length)(pessoas.length) for zero, irá dizer que não há produtos ou pessoas cadastrados(as)
    case 3:
      if (produtos.length === 0) 
      {
        console.log("Não há produtos cadastrados para o sorteio.");
      } else if (pessoas.length === 0) 
      {
        console.log("Não há pessoas cadastradas para o sorteio.");
      } else 
      {
        // A variável "numeroSorteado" é igual ao retorno da função "sorteioNumAleatorio", sendo o mínimo = 0 e o máximo = quantidade de produtos - 1
        const numeroSorteado = sorteioNumAleatorio(0, produtos.length - 1); 
        // A variável "produtoSorteado" é atribuída à variável produtos correspodente à posição do vetor produtos
        const produtoSorteado = produtos[numeroSorteado];
        // A variável "pessoaSorteada" é igual ao retorno da função "sorteioNumAleatorio", sendo o mínimo = 0 e o máximo = quantidade de pessoas - 1
        const pessoaSorteada = pessoas[sorteioNumAleatorio(0, pessoas.length - 1)];

        console.log(`A pessoa sorteada é: ${pessoaSorteada}`);
        console.log(`E o produto que ela ganhou é: ${produtoSorteado}`);
      }
      break;

    // Caso o usuário escolha a opção 4, ele irá considerar a variável continuar como falsa e irá encerrar o programa
    case 4:
      continuar = false;
      console.log("Saindo do programa.");
      break;

    default:
      console.log("Opção inválida.");
      break;
  }
}
