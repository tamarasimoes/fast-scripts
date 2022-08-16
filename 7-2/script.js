const diasDoMes = (mes) => {
  switch (parseInt(mes)) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    default:
      throw new Error('Mês inválido');
  }
};

// const renderizaDiasDoMes = () => {
//   const mes = document.getElementById('month').value;
//   const resultado = document.getElementById('result');
//   resultado.innerHTML = `O mês ${mes} tem ${diasDoMes(mes)} dias`;
//   document.getElementById('month').value = '';
// };

const renderizaDiasDoMes = () => {
  try {
    const mes = document.getElementById('month').value;
    const resultado = document.getElementById('result');
    resultado.innerHTML = `O mês ${mes} tem ${diasDoMes(mes)} dias`;
  }
  catch (erro) {
    alert(`Erro: ${erro.message}`);
  }
  finally {
    document.getElementById('month').value = '';
  }ß
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', renderizaDiasDoMes);
};