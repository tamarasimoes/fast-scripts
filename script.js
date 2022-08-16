// Crie uma função mostre, abaixo do botão, o texto "Sextou!" quando o botão for acionado.

window.onload = function () {
  alert('página carregada');
  let botao = document.getElementById('botao');
  let container = document.getElementById('container');

  botao.addEventListener('click', function () {
    console.log(container);
    let fraseDoDia = document.createElement('p');
    fraseDoDia.innerHTML = 'SEXTOU!';
    container.appendChild(fraseDoDia);
  });
}

console.log('Carregando');