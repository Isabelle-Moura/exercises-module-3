# Sistema de Gerenciamento de Filmes e Atuações

## Entidades

Vamos adicionar uma nova entidade ao nosso sistema de gerenciamento de filmes: Atuação.

### Filme

-  Título (string)
-  Descrição (string)
-  Ano de Lançamento (string)
-  Diretor (string)
-  Gênero (string)

### Atuação

-  Ator/Atriz (string)
-  Papel (string)
-  Filme (referência ao ID do filme)

## Funcionalidades

### Filmes

-  Deve ser possível cadastrar um filme, fornecendo as informações: título, descrição, ano de lançamento, diretor e gênero.
-  Deve ser possível buscar um filme pelo título.
-  Deve ser possível buscar todos os filmes de um determinado diretor.
-  Deve ser possível atualizar as informações de um filme, fornecendo seu ID.
-  Deve ser possível excluir um filme pelo ID.

### Atuações

-  Deve ser possível cadastrar uma atuação, fornecendo as informações: ator/atriz, papel e referência ao ID do filme.
-  Deve ser possível buscar todas as atuações de um ator/atriz.
-  Deve ser possível buscar todas as atuações de um filme.
-  Deve ser possível atualizar as informações de uma atuação, fornecendo seu ID.
-  Deve ser possível excluir uma atuação pelo ID.

## Início do Projeto Node e Importação/Exportação de Módulos

1. Para iniciar um projeto Node:
   ```bash
   npm init
   ```
