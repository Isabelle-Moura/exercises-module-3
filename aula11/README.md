# Sistema de mercado

## Entidade

Em um contexto de desenvolvimento de software, uma entidade no backend geralmente
se refere a um objeto ou conceito que representa algo do mundo real. Essas entidades
são usadas para modelar e armazenar dados no sistema.

### Produto

-  Nome (string)
-  Descricao (string)
-  Preco (number)
-  Estoque (string)
-  Categoria (string)

## Requisitos

-  Deve ser possível cadastrar um produto, passando as informacoes: nome, descricao,
   preco, estoque e categoria
-  Deve ser possível buscar um produto pelo nome
-  Deve ser possível buscar todos os produtos de uma determinada categoria
-  Deve ser possível atualizar as informacoes de um produto passando o seu id
-  Deve ser possível deletar cada produto pelo id

## Hints

1 - Para iniciar um projeto node

```bash
npm init
```

2 - Para instalar o drive do mongodb

```bash
npm install mongodb
#ou
npm i mongodb
```

3 - Para configurar o mongodb

```js
const { MongoClient } = require("mongodb");

const client = new MongoClient("a url mongo aqui");
const database = client.db("o nome do banco").collection("o nome da sua collection/tabela");
```

4 - Funcoes do mongoClient

```js
database.find();
database.findOne();
database.insertOne();
database.updateOne();
database.deleteOne();
```
