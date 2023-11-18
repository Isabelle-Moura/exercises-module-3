# Sistema de campeonato interclasse

## Entidade
Em um contexto de desenvolvimento de software, uma entidade no backend geralmente
se refere a um objeto ou conceito que representa algo do mundo real. Essas entidades
são usadas para modelar e armazenar dados no sistema.

### Time
- Nome (string)
- Pontos (number)
- Categoria (string)
- Qtd. integrantes (number)

## Requisitos
- Deve ser possível cadastrar um time, passando as informacoes: nome, pontos, categoria
e qtd. integrante.
- Deve ser possível buscar um time pelo nome(LIKE QUERY)
- Deve ser possível buscar os times com pontuacao acima de 10(Greater than QUERY)
- Deve ser possível buscar todos os times de uma determinada categoria
- Deve ser possível atualizar os pontos do time passando o seu id
- Deve ser possível deletar cada time pelo id

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
const { MongoClient } = require('mongodb');

const client = new MongoClient('a url mongo aqui');
const database = client.db('o nome do banco').collection('o nome da sua collection/tabela');
```

4 - Funcoes do mongoClient
```js
database.find();
database.findOne();
database.insertOne();
database.updateOne();
database.deleteOne();
```