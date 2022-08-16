const myModal = new bootstrap.Modal(document.getElementById('myModal'));

let button = document.getElementById('nao-clicar');
console.log(button);

button.addEventListener('click', function () {
  myModal.show();
});