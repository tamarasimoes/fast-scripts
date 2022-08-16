const soma = require('./script_2');

test('Verifica se a soma entre 1 e 2 é igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});