# poc-typescript

## Descrição

Esse projeto tem como objetivo criar um CRUD simples em node.js e express para servir de POC do mini curso de TypeScript. O banco de dados foi implementado com postgreSQL.

O Projeto Implementa um sistema em que é possível inserir matérias da faculdade em um banco de dados, portanto é possível criar, editar, deletar e pegar a lista de matérias. Cada matéria possuí um código, um nome, e um número de créditos.

## Como rodar

Criar o banco de dados com a tabela disciplinas
```SQL
CREATE TABLE "disciplinas" (
    	"id" SERIAL PRIMARY KEY,
    	"nome" TEXT NOT NULL,
    	"codigo" TEXT NOT NULL,
    	"creditos" INTEGER NOT NULL
    );
```

Criar um .env na raiz do projeto com a varivel DATABASE_URL
```
DATABASE_URL=<String de conexão do banco de dados>
```

Abra o terminal na raiz do projeto e rode os seguintes comandos
```
npm i
npm run dev
```

## Rotas

### POST: /disciplinas

Permite a inserção de uma nova disciplina no banco de dados

Body: { "codigo": "ma311", "nome": "Calculo 3", "creditos": 6 }

### GET: /disciplinas

Retorna a lista de disciplinas oferecidas pela instituiçao com id, nome e código da disciplina e número de créditos

### PUT: /disciplinas/:id
Permite atualizar todos os campos de uma disciplina através do seu id

Body: { "codigo": "ma311", "nome": "Calculo 3", "creditos": 6 }

### DELETE: /disciplinas/:id

Permite a deleção de uma disciplina através de seu id
