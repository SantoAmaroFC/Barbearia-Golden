# Backend - Barbearia Brilho Premium

Backend em TypeScript, Express, PostgreSQL e Knex, seguindo a estrutura do projeto de exemplo enviado: controllers, repositories, routes, services e types.

## Instalação

```bash
npm install
npm install -D tsx typescript @types/node @types/express
npm install express cors dotenv knex pg
```

Copie `.env.example` para `.env` e configure os dados do PostgreSQL.

## Executar

```bash
npm run dev
```

## Rotas

Todas as entidades possuem CRUD:
- `POST /<recurso>` cria
- `GET /<recurso>` lista
- `GET /<recurso>/:id` busca por UUID
- `PATCH /<recurso>/:id` atualiza parcialmente
- `DELETE /<recurso>/:id` exclui

Recursos: clientes, barbeiros, servicos, agendamentos, planos, assinaturas, marketing, avaliacoes, alimentos, entretenimentos, pagamentos, comodidades, barbearia e eventlogs.

## Observações

- O banco precisa ter as 14 tabelas criadas previamente, com UUID como chave primária e nomes/colunas iguais aos SQL definidos para o projeto.
- As chaves estrangeiras dos agendamentos, assinaturas, avaliações e pagamentos usam UUID.
- `data_nascimento`, `data`, `data_inicio`, `data_fim` e `data_publicacao` devem ser enviadas no formato `YYYY-MM-DD`.
- `horario`, `horario_abertura` e `horario_fechamento` devem ser enviados no formato `HH:mm:ss`.
- Os tipos são uma referência TypeScript; valide os dados recebidos antes de inserir em produção.
