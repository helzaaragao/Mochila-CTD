class Aluno {
  constructor(nome, q_faltas, notas) {
    this.nome = nome;
    this.q_faltas = q_faltas;
    this.notas = notas;
  }
  calcularMedia() {
    let soma = 0;
    this.notas.forEach(nota => {
      soma += nota;
    });
    return soma / this.notas.length;
  }
  faltas() {
    return this.q_faltas++;
  }
}

let cadastro = new Aluno('Luisa Ferreira Aragão', 1, [10, 8, 5, 10]);
let cadastro2 = new Aluno('Bianca Vanessa Costa', 3, [9,10,7,6]);
let cadastro3 = new Aluno('Felipe Vitor Vasconcelos', 3, [ 0,7,7,6]);

console.log(cadastro, cadastro2, cadastro3);
console.log('Média da Luisa:'+ cadastro.calcularMedia(), 'Média da Bianca:'+ cadastro2.calcularMedia(), 'Média da Felipe: ' + cadastro3.calcularMedia());
console.log('Faltas da Luisa:' + cadastro.faltas(), 'Faltas da Bianca:' + cadastro2.faltas(), 'Faltas da Felipe:'+ cadastro3.faltas());


let curso = {
  nomeDoCurso: 'Música',
  notaAprovacao: 7,
  faltasMáximas: 3,
  listaAlunos: [],
  adicionarAlunos(nome, q_faltas, notas) {
    const novoAluno = new Aluno(nome, q_faltas, notas);
    this.listaAlunos.push(novoAluno);
  },
  seAprovou(aluno) {
    let media = aluno.calcularMedia();
    if (media >= this.notaAprovacao && aluno.q_faltas < this.faltasMáximas) {
      return true
    }
    else if (aluno.q_faltas === this.faltasMáximas && media >= this.notaAprovacao * 1.1) {
      return true
    }
    return false
  },
  listaAprovacao() {
    return this.listaAlunos.map((aluno) => this.seAprovou(aluno));
  }

}


curso.adicionarAlunos('Gabriel Jesus de Maria', 2, [8, 7, 7, 8]);
curso.adicionarAlunos('Afra Taiza Valente', 0, [10, 9, 8, 7]);
curso.adicionarAlunos('Sheila dos Santos', 5, [10, 10, 10, 10]);


console.log(curso.listaAprovacao()); //true, true, false --> Gabriel e Afra foi aprovado, mas Sheila não. 
console.log(curso.listaAlunos); //todos que estão presentes que eu adicionei agora. 
// console.log(curso.seAprovou()); --> tem que verificar