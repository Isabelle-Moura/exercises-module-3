## Sistema de Gerenciamento de Tarefas

### Entidades

Tarefa {
título
descrição
data de criação
data de conclusão
prioridade
}

Usuário {
nome
email
tarefa [task]
}

### Casos de Uso

1. Deve ser possível cadastrar uma tarefa, fornecendo as seguintes informações: título, descrição, data de criação, data de conclusão (opcional) e prioridade.
2. Deve ser possível buscar uma tarefa pelo título.
3. Deve ser possível listar todas as tarefas de um determinado usuário.
4. Deve ser possível atualizar as informações de uma tarefa, fornecendo o seu ID.
5. Deve ser possível marcar uma tarefa como concluída, fornecendo o seu ID.
6. Deve ser possível excluir uma tarefa pelo seu ID.
7. Deve ser possível cadastrar um usuário, fornecendo as informações: nome e email.
8. Deve ser possível buscar um usuário pelo seu email.
9. Deve ser possívell atribuir uma tarefa à um único usuário.
