const quadrinho1 = {
  colecao: 'Tio Patinhas',
  titulo: 'O Tesouro dos Dez Avatares',
};

quadrinho1.autor = 'Don Rosa';
quadrinho1['editora'] = 'Editora Abril';

console.log(`Chaves de quadrinho1: ${Object.keys(quadrinho1)}`);

console.log(`quadrinho1 tem autor? ${Object.keys(quadrinho1).includes('autor')}`);

console.log(`quadrinho1 tem autor? ${Object.keys(quadrinho1).includes('numeroDePaginas')}`);

console.log(`Valores de quadrinho1: ${Object.values(quadrinho1)}`);

console.log(`Entradas de quadrinho1: ${Object.entries(quadrinho1)}`);

// -------------------------

const quadrinho2 = {
  colecao: 'The Order of the Stick',
  titulo: 'No Cure for Paladin Blues',
};

const objetoAutor = { autor: 'Rich Burlew' };

// Assim, o 'objeto autor' se une a 'quadrinho2'.
Object.assign(quadrinho2, objetoAutor);

console.log('quadrinho2:', quadrinho2);
console.log(`quadrinho2: ${Object.entries(quadrinho2)}`);


const cloneDeQuadrinho2 = Object.assign({}, quadrinho2);

console.log('cloneDeQuadrinho2:', cloneDeQuadrinho2);

console.log(quadrinho1);

const novoQuadrinho = Object.assign(quadrinho2, { author: 'Novo autor' });

console.log('novoQuadrinho:', novoQuadrinho);
console.log('quadrinho2 original:', quadrinho2);