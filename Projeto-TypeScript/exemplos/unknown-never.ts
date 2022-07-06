// a diferença do unknown para o any é que o unknown precisa de uma validação de typeof para garantir que a propridade dentro desse
//unknown vai ser o que estamos usando, por exemplo, string terá que ter validação para que com certeza estejamos trabalhando com string
/*
let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;


let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
stringTest2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
*/

//tipo never - código que por alguma razão foi interrompido e não pode concluir o código
