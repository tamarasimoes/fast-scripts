const turma25 = {
  dataInicio: `04/07/2022`,
  moduloAtual: `Fundamentos`,
  projetosEmCurso: [`Playground Functions`, `Pixels Art`, `TrybeWarts`],
  blocoAtual: 7,
  formaturaFundamentos: true,
  tribos: 2
}

const especialistas = {
  especTriboA: `Tamara`,
  especTriboB: `Rods`
}

console.log(Object.keys(turma25));
console.log(Object.values(turma25.projetosEmCurso));
console.log(Object.entries(especialistas));

Object.assign(turma25, especialistas);
console.log(turma25);