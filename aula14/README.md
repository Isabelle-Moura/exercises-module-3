# Sistema de Controle Financeiro

## Transaction

value -> number
description -> string
kind -> 'withdraw' or 'deposit'
createdAt -> Date
canceledAt -> Date

## Funcionalidades

-  Deve ser capaz de fazer uma transacao, passando: value, description and kind.
-  Deve ser possivel buscar todas as transacoes
-  Deve ser possivel buscar apenas as transacoes do tipo "withdraw"
-  Deve ser possivel buscar apenas as transacoes do tipo "deposit"
-  Deve ser possivel buscar uma transacao pelo id
-  Deve ser possivel cancelar uma transacao buscando pelo id e atualizando o canceledAt
