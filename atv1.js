function verificarEntrada(entrada) {

    for (let i = 0; i < 10; i++){ 
        // Para contador igual a zero e menor que 10, continue a verificação de entrada
        // Ou seja, ele irá fazer a verificaçaõ 10 vezes de um caso e depois seguir para próxima
        if (typeof entrada == 'number') {
            if (entrada % 2 == 0) {
                console.log('A entrada é um número par');
            } else{
                console.log('A entrada é um número ímpar');
            }
        } else if (typeof entrada == 'string') {
            console.log('A entrada é uma string');
        } else {
            console.log('A entrada não é nem string nem numero');
        }
    }
    }

// Testando a função
verificarEntrada(1);
verificarEntrada(2);
verificarEntrada(3);
verificarEntrada(4);
verificarEntrada("Texto")
