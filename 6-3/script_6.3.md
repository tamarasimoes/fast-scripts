# .menu-container flexível
.menu-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

# .menu flexível (esse seletor já existe)
display: flex;
justify-content: space-around;

# .links
.links {
  border: 1px solid #fff;
  display: flex;
  justify-content: flex-end;
}

# .login
.login {
  margin-left: 20px;
}

Remover bordas

# .header

.header-container {
  color: #5995da;
  background-color: #d6e9fe;
  display: flex;
  justify-content: center;
}

.header {
  width: 900px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

<!-- depende da propriedade height da classe header. Alterar altura -->

# Adicionar borda aos componentes

.social,
.logo,
.subscribe {
  border: 1px solid #5995DA;
}

no header: align-items: stretch;

# Grid de imagens

.photo-grid-container {
  display: flex;
  justify-content: center;
}

.photo-grid {
  width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.photo-grid-item {
  border: 1px solid #fff;
  width: 300px;
  height: 300px;
}

