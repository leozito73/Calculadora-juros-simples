/**
 * Escreva uma função que faça o calculo de juros simples e retorne o valor:

 * @param {*} captStart capital inicial
 * @param {*} taxaM quantidade de juros
 * @param {*} tempoM  quantidade de dias
 * @returns 
 */

function jurosSimples(captStart, taxaM, tempoM) {
    let jurosSimples = captStart * (taxaM / 100) * tempoM;
    return jurosSimples;
}
console.log(jurosSimples(1000,10, 1));
/** Para saber o montante do juros simples:
 * montante = resultado da operação + capital inicial.
 */

function montanteSimples(captStart,taxaM, tempoM){
    let montanteSimples = captStart + jurosSimples(captStart, taxaM, tempoM);
    return montanteSimples;
}
// Valores inseridos Entre parenteses.
console.log(montanteSimples(1000,10,1));