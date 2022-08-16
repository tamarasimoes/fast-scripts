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
  a. Colocar _text-center_ no header

# Commit
# Dúvidas
# Intervalo

9. Pesquisar _forms_ 
  a. _form-label_ para label
  b. _form-control_ para input

10. Pesquisar _checks & radios_ 
  a. Apagar fiedset
  b. Legend vira p
  c. _form-check-label_ para label
  d. _form-check-input_ para input

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
  </div>
  ````

12. Criar arquivo css novamente e linkar.

````
body {
  max-width: 80%;
  width: 100%;
  margin: 40px auto;					                            
  background-color: aliceblue;
}

header, form {
  background-color: white;
  border-radius: 5px;					                                          
  box-shadow: 10px 5px 15px rgb(150, 150, 150);
  padding: 10px;
}

.container {
  margin: 20px 0 20px 0;
}

.form-select {
  width: 20%;
}

button {
  margin-bottom: 10px;
}
````

13. Adicionar JS
  a. Link do bootstrap com arquivp js.
  b. Adicionar novo botão: Não clique aqui
  c. Pesquisar por _modal_
    - Div pai se chama _myModal_
    - Conteúdo h5 para _NÃO CLICAR_
    - Parágrafo para _Eu avisei para não clicar_
    - Segundo botão para _fechar_ 