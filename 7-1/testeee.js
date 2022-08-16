// Colocar no topo da funcao

var x;
mostrar hoisting

// Com var
var x = 3; // escopo global

function func(bool) {
  var x;
  
  if (bool) {
    var x = 48;
  }
  return x; 
}

console.log(func(true));
console.log(func(false)); 

// Com let
let x = 3; // escopo global

function func(bool) {
  if (bool) {
    let x = 48;
  }
  return x; // Acessa a variável x da linha 17
}

console.log(func(true));
console.log(func(false));

// simulando o hoisting do var com o uso do let

let x = 3; // escopo global

function func(bool) {
  let x;
  
  if (bool) {
    x = 48;
  }
  return x; // Acessa a variável x da linha 39
}

console.log(func(true));
console.log(func(false));

// arrow

const saudacao = (nome) => `Olá, ${nome}`;
console.log(saudacao('Tamara'));


//template

const saudacao = (nome) => {
  return `Olá ${nome}`;
}
console.log(`O resultado da função saudação é:
${saudacao(‘Tamara’)}`);

//ternary

let nomesIguais = 'Tamara' === 'Tâmara' ? ‘Sim, são nomes iguais’ : `Não, são nomes diferentes`;
console.log(nomesIguais);