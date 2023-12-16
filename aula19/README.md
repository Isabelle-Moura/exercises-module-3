# Sistema de Blog Part 2

## Entidades
User
- fullname -> string[Required]
- nickname -> string[Required]
- email -> string[Unique]
- posts -> Array de ObjectId

Post
- content -> string[Required, minLength(3)]
- likes -> number[default(0), min(0)]

## Functionalidades
- Deve ser possível criar um usuário, passando: fullname, nickname e email
- Dever ser possível criar um post, passando: id do usuário e content
- Deve ser possível listar todos usuários e seus posts