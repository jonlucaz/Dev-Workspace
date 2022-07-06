/*function somarValoresNumericos (numero1: number, numero2: number): number {
    return numero1 + numero2;
}
//: number - protege a função de não fugir do tipo correto
console.log(somarValoresNumericos(1, 3));
*/
//void - ausência do retorno, funções que não retornam nada

function printarValoresNumericos (numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}
// console.log sozinho não retorna nada no console
//callback - a função só irá rodar quando atender determinado requisito
function somarValoresNumericosETratar (numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado (numero: number): number {
    return numero * numero;
} 

function dividirPorEleMesmo(numero: number) {
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));

