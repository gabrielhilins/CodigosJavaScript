function executar(fn, num1 = 0, num2 = 0)
{

    do // laço de repetição "do-while" (faça-enquanto)
    { 
        if (typeof fn === 'function') // se a variável fn for do tipo function(função)
         { 
        console.log(fn(num1, num2)); // escreva fn passando os argumentos dos parâmetros num1 e num2
         };
    } while (num1 <= 1|| num2 <=5 ); // faça o código acima, enquanto o valor de num1 for menor/igual a 1 ou o valor de num2menor/igual a 5
                                     

};

function soma(a,b)
{
    return a + b;
};

function subtracao(a,b) 
{
    return a-b;
};

function multiplicacao(a,b) 
{
    return a*b;
};

function divisao(a,b) 
{
    return a/b;
};

function media(a,b) 
{
    return (a+b)/2;
};

executar(soma, 1, 5);
executar(subtracao, 30, 5);
executar(multiplicacao, 19, 4);
executar(divisao, 40, 8);
executar(media, 1980, 12);
