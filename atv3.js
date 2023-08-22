// Declaração das variáveis "Palavras" que vão ser as palavras verificadas
const palavra1 = 'arara';
const palavra2 = 'carro';
const palavra3 = "omississimo";

// Declaração das variáveis "Reverso" que irá inverter as strings "palavra1, palavra2, palavra3"
const reverso = palavra1.split('').reverse().join(''); 
const reverso2 = palavra2.split('').reverse().join(''); 
const reverso3 = palavra3.split('').reverse().join(''); 
// O split reparte a string, o reverse inverte a string e o join junta tudo sem nenhum separador

// Verificação das palavras
if(palavra1 === reverso) 
{ 
    console.log(`A palavra ${palavra1} é um palíndromo!`);
}
else 
{
    console.log(`A palavra ${palavra1} não é um palíndromo!`);
}

    if(palavra2 === reverso2)
    {
        console.log(`A palavra ${palavra2} é um palíndromo!`);
    }
    else
    {
        console.log(`A palavra ${palavra2} não é um palíndromo!`);
    }
         if(palavra3 === reverso3)
         {
            console.log(`A palavra ${palavra3} é um palíndromo!`);
         }
         else{
            console.log(`A palavra ${palavra3} não é um palíndromo!`);
         }

