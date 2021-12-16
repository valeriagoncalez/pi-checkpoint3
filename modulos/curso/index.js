module.exports = {
    curso: {
        nomeCurso: 'Programação Imperativa - Java Script',
        notaAprovacao: 7,
        faltasMaximas: 5,
        listaEstudantes: [],
        addAluno: function (novoAluno) {
            this.listaEstudantes.push(novoAluno);
        },
        statusAprovacao: function (aluno) {
            let media = aluno.calcularMedia();
            let status = false;

            if ((aluno.quantidadeFaltas < this.faltasMaximas && media >= this.notaAprovacao) || 
                (aluno.quantidadeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1))
            ) {
                status = true;
            } 

            return status;
        },
        listaStatus: function () {
            let listaStatus = [];
            for (let i = 0; i < this.listaEstudantes.length; i++) {
                listaStatus.push(this.statusAprovacao(this.listaEstudantes[i]));
            }

            return listaStatus;
        }
    }
}
