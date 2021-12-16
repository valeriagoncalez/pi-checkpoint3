let curso = require('./modulos/curso');

function Aluno(nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    this.faltas = function () {
        this.quantidadeFaltas += 1;
    },
    this.calcularMedia = function () {
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            media += this.notas[i] / this.notas.length;
        }

        return media ;
    }
}

let aluno1 = new Aluno('Nome Aluno1', 0, [9, 10, 10]);
let aluno2 = new Aluno('Nome Aluno1', 2, [10, 9, 10]);
let aluno3 = new Aluno('Nome Aluno1', 2, [6, 7, 7]);
let aluno4 = new Aluno('Nome Aluno1', 5, [7, 7, 7]);
let aluno5 = new Aluno('Nome Aluno1', 5, [8, 8, 8]);
let aluno6 = new Aluno('Nome Aluno1', 6, [10, 10, 10]);

curso.curso.addAluno(aluno1);
curso.curso.addAluno(aluno2);
curso.curso.addAluno(aluno3);
curso.curso.addAluno(aluno4);
curso.curso.addAluno(aluno5);
curso.curso.addAluno(aluno6);

console.log(curso.curso.listaStatus())