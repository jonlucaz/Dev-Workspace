//types
//interfaces
/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
}

type IDomestico = IFelino | ICanino

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}

const animal: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true,
}
*/

//tag input
/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});*/

//generic types
/*
function adicionaApendice<Generico>(array: any[], valor: Generico) {
    return array.map(item => item + valor);
}

adicionaApendice(['1', '2', '3'], 1);
*/

//condicionais a partir de parâmetros
/*
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redirecionar para a área de administração
    }

    //redirecionar para a área do usuário
}
*/

//usando o caracter "?" para variáveis opcionais
/*
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
}  

function redirecione(usuario: IUsuario) {
   if (usuario.cargo) {
    //redirecionar(usuario.cargo);
   }

   // redirecionar para área do usuário
}
*/

//readonly e private
/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFav?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-? Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro ('Snoopy', 7);
*/

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();