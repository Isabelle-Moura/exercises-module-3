# Sistema de Locadora de Carros

## Entidade

Em um contexto de desenvolvimento de software, uma entidade no backend geralmente se refere a um objeto ou conceito que representa algo do mundo real. Essas entidades são usadas para modelar e armazenar dados no sistema.

### Car

-  model (string)
-  releasedAt (number)
-  brand (string)
-  price (number)
-  status ("rented" ou "available") por padrao "available"

## Requisitos

-  Deve ser possível cadastrar um carro, passando as informações: modelo, ano, marca e

## Hints

1 - Para iniciar um projeto node

```bash
npm init
```

2 - Para instalar o driver do MongoDB

```bash
npm install mongodb
#ou
npm i mongodb
```

3 - Para configurar o MongoDB

```js
const { MongoClient } = require("mongodb");

const client = new MongoClient("a url mongo aqui");
const database = client.db("o nome do banco").collection("o nome da sua collection/tabela");
```

4 - Funções do MongoClient

**Buscar um carro pelo modelo (LIKE QUERY)**

```js
database.find({ modelo: { $regex: "modelo", $options: "i" } });
```

**Buscar os carros com ano maior ou igual a 2010 (Greater than or equal QUERY)**

```js
database.find({ ano: { $gte: 2010 } });
```

**Buscar os carros com preço menor ou igual a um determinado valor (Less than or equal QUERY)**

```js
database.find({ preço: { $lte: valor } });
```

**Atualizar o preço do carro passando o seu id**

```js
database.updateOne({ _id: id }, { $set: { preço: novoPreço } });
```

**Deletar um carro pelo id**

```js
database.deleteOne({ _id: id });
```

Estas são as instruções básicas para a criação de um sistema de locadora de carros com as consultas especificadas utilizando o MongoDB em Node.js.
