# Sistema de Gerenciamento de Livraria e Empréstimos

## Entidades

Vamos adicionar uma nova entidade ao nosso sistema de gerenciamento de livraria: Empréstimo.

### Livro

-  Título (string)
-  Autor (string)
-  Ano de Publicação (string)
-  Editora (string)
-  Gênero (string)

### Empréstimo

-  Cliente (string)
-  Livro (referência ao ID do livro)
-  Data do Empréstimo (data)
-  Data de Devolução Prevista (data)

## Funcionalidades

### Livros

-  Deve ser possível cadastrar um livro, fornecendo as informações: título, autor, ano de publicação, editora e gênero.
-  Deve ser possível buscar um livro pelo título.
-  Deve ser possível buscar todos os livros de um determinado autor.
-  Deve ser possível atualizar as informações de um livro, fornecendo seu ID.
-  Deve ser possível excluir um livro pelo ID.

### Empréstimos

-  Deve ser possível cadastrar um empréstimo, fornecendo as informações: cliente, referência ao ID do livro, data do empréstimo e data de devolução prevista.
-  Deve ser possível buscar todos os empréstimos de um cliente.
-  Deve ser possível buscar todos os empréstimos de um livro.
-  Deve ser possível atualizar as informações de um empréstimo, fornecendo seu ID.
-  Deve ser possível excluir um empréstimo pelo ID.

## Início do Projeto Node e Importação/Exportação de Módulos

1. Para iniciar um projeto Node:
   ```bash
   npm init -y
   ```
