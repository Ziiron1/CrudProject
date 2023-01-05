# CrudProject [ API ] 
### 📑 Descrição
Desenvolvimento da **API REST** que retorna informações das entidades de um restaurante e efetua todas as operações **C.R.U.D.**: ``pratos``, ``bebidas``, ``sobremesas``.


**[ Tecnologias ]**
  
- <em>**Node.js**</em> | <em>**Express**</em> | <em>**Insomnia**</em> | <em>**npm**</em>

### 💻 Como iniciar o Projeto

> **Note**
> Requisitos: Git, Node.js & Editor de Código.

```bash
# Clone o repositório do GitHub no Git
$ git clone <https://github.com/Ziiron1/CrudProject.git>

# Acesse a pasta do projeto no cmd ou Terminal do Editor
$ cd CrudProject

# Instale as dependências
$ npm install

# Execute o script/aplicação
$ npm start

# Acesse o servidor
$ <http://localhost:3000>
```

Ou

Entre Server Hosteado https://crudserver2.onrender.com


## Rotas CRUD

### [ 1 ] <em>Pratos</em>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/pratos** | Retorna todos os pratos. |
|  **`GET`** | **/pratos/id** | Retorna um só prato. |
|  **`POST`** | **/pratos** | Cria um novo prato.  |
|  **`PUT`** | **/pratos/id** | Altera os dados do prato.
|  **`DELETE`** | **/pratos/id** | Remove o prato.
  
### [ 2 ] <em>Bebidas</em>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
|  **`GET`** | **/bebidas** | Retorna todos os clientes. |
|  **`GET`** | **/bebidas/id** | Retorna um cliente. |
|  **`POST`** | **/bebidas** | Cria um novo cliente.  |
|  **`PUT`** | **/bebidas/id** | Altera os dados do cliente.
|  **`DELETE`** | **/bebidas/id** | Remove o cliente.
  

### [ 3 ] <em>Sobremesa</em>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
|  **`GET`** | **/sobremesa** | Retorna todos os materiais. |
|  **`GET`** | **/sobremesa/id** |  Retorna um material. |
|  **`POST`** | **/sobremesa** | Cria um novo material.  |
|  **`PUT`** | **/sobremesa/id** | Altera os dados do material.
|  **`DELETE`** | **/sobremesa/id** | Remove o material.
  
---
