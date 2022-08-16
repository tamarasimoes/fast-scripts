1 - Remover link css
2 - Colocar o bootstrap
3 - Remover arquivo css
4 - Limpar classes e ids
  a. command + f
  b. class="*.*"
  c. ícone do asterisco selecionado

5 - Pesquisar por _container_
  a. Adicionar classe container na header
  b. Adicionar _form-ckeck_ em todas as divs q se chamavam conteudo

6 - Pesquisar _display headings_
  a. Colocar classe _display-1_ no h1
  b. Adicionar _lead_ no p

7 - Adicionar hr

8. Pesquisar por _text alignment_ 
  a. Colocar _text-center_

# Commit
# Dúvidas
# Intervalo

9. Pesquisar _forms_ 
  a. _form-label_ para label (exceto para o texto do checkbox)
  b. _form-control_ para input text e textarea
  c. _form-select_ para o select

10. Pesquisar _checks & radios_ 
  a. Apagar fiedset
  b. Legend vira p
  c. _fw-semibold_ para o p
  d. _form-check-label_ para label
  e. _form-check-input_ para input

9. Pesquisar _select_ 
  a. _form-label_ para label
  b. _form-select_ para select

10. Pesquisar _checkbox & radios_ 
  a. _form-label_ para label
  b. _form-check-input_ para input

11. Pesquisar _buttons_ 
  a. Colocar dois botões

  ````
  <div class="container form-check">
    <button class="btn btn-success" type="submit">Submit</button>
    <button class="btn btn-danger" type="reset">Cancel</button>
    <button class="btn btn-warning" type="button" id="nao-clicar">Não clique aqui!</button>

  </div>
  ````

12. Criar arquivo css novamente e linkar. Copiar/colar.

13. Adicionar JS
  a. Link do bootstrap com arquivo js.
  b. Adicionar novo botão: Não clique aqui
  c. Pesquisar por _modal_
    - Div pai se chama _myModal_
    - Conteúdo h5 para _NÃO CLICAR_
    - Parágrafo para _Eu avisei para não clicar_
    - Segundo botão para _fechar_ 
  d. Mostrar no navegado que essa div está como display: none 

14. Na mesma página da documentação do modal
  a. let myModal = new bootstrap.Modal(document.getElementById('myModal'));

15. Colodar id 'nao-clicar' no botão do modal.

16. Complementar script
  a. let button = document.querySelector('#nao-clicar');

````
button.addEventListener('click', function () {
  myModal.show();
});
````
