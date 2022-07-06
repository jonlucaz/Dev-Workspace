"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
const maria = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
const roberto = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
const laura = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
const carlos = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
