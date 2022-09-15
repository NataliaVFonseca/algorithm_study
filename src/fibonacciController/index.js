/* Desafio: Cada novo termo na sequência de Fibonacci é gerado pela adição dos dois termos anteriores. 
Começando com 1 e 2, os 10 primeiros termos serão: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
Considerando os termos da sequência de Fibonacci cujos valores não excedem quatro milhões,
encontre a soma dos termos de valor par. */

function testFibonacci(req, res) {
    const {fibonacci} = req.body;

    let result = pairFibonacci(fibonacci);

    return res.status(200).json({message: "Result is " + result});
}

module.exports = { testFibonacci };

function pairFibonacci(fibonacci){

    let vetFibonacci = [1];
    // let fibonacci = 1
    let vetPairFibo = [];
    let sumPair = 0;
    
    while(vetFibonacci.length - 1 <= 4000000){
        
         vetFibonacci.push(fibonacci);
         
        
         fibonacci= vetFibonacci[vetFibonacci.length - 1] + vetFibonacci[vetFibonacci.length - 2] 
         
         if( fibonacci % 2 === 0 && fibonacci < 4000000){

            vetPairFibo.push(fibonacci);
         }
    }
        for(var i = 0; i < vetPairFibo.length; i++) {
            sumPair = sumPair + vetPairFibo[i];
        }

        return sumPair;
}