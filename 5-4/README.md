# Dia 5.4 - WebStorage - Encerramento do Bloco 5

### Slide

### Exemplos no console

- Apresente as diferentes formas de inserir os dados em LocalStorage e SessionStorage (use o console do Google Chrome para demonstração):

````
localStorage.setItem("nome", "Tamara")
localStorage.other_key = "other_value"
````

- Apresente as diferentes formas de acessar os dados em LocalStorage e SessionStorage (use o console do Google Chrome para demonstração);

````
localStorage.getItem("my_key")
localStorage.other_key
localStorage['cidade']
````

- É possível acessar as keys através de índices:

````
localStorage.key(0) // my_key
localStorage.key(1) // other_key
````

- É possível iterar por todas as entradas:

````
for (let i = 0; i < localStorage.length; i +=1) {
    let chave = localStorage.key(i);
    console.log(chave + ': ' + localStorage[chave]);
}

idade: 34
nome: Tamara
````

Apresente as diferentes formas de remover os dados em LocalStorage e SessionStorage (use o console do Google Chrome para demonstração):

````
localStorage.removeItem("my_key")
delete localStorage.other_key
localStorage.clear()
````


