# NestJS Backend Boilerplate

<div align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  <img src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" width="120" alt="Prisma Logo" />
</div>

<br />

## 🚀 Sobre o Projeto

Este projeto é um **template (ou boilerplate)** de backend completo construído com [NestJS](https://github.com/nestjs/nest) e altamente configurado. Ele foi criado para que você possa iniciar seus projetos rapidamente, **sem sofrer com dores de cabeça** configurando as ferramentas essenciais do zero.

Se você quer apenas programar a regra de negócio da sua aplicação sem perder tempo com o *setup* inicial de banco de dados e autenticação, basta dar um `git clone`.

### O que já vem configurado?
- **Banco de Dados**: Configurado nativamente com **Prisma ORM** e preparado para conexão com **Supabase** (PostgreSQL).
- **Autenticação**: Integrado com **Passport.js**, suportando estratégias Local (Email/Senha), JWT e **Google OAuth2**.
- **Performance**: Utiliza o compilador **SWC** nativamente para builds e reloads extremamente rápidos durante o desenvolvimento.
- **Testes**: Ambiente configurado com Jest, já mockando Prisma e JWT nos providers necessários.

---

## 🛠️ Como começar (Sem dores de cabeça)

A melhor forma de iniciar um novo projeto utilizando esta estrutura é clonando o repositório principal:

```bash
# 1. Faça o clone do boilerplate para o nome do seu novo projeto
$ git clone https://github.com/Gustavo-Hono/template_backend.git nome-do-seu-projeto

# 2. Acesse a pasta do projeto
$ cd nome-do-seu-projeto

# 3. Instale todas as dependências
$ npm install

# 4. Configure as variáveis de ambiente baseando-se no arquivo de exemplo
$ cp .env.example .env

# 5. Rode as migrations do Prisma para atualizar seu banco de dados
$ npx prisma migrate dev
```

---

## 💻 Rodando a Aplicação

Este template utiliza o compilador ultra-rápido **SWC**. Use o script de watch SWC para a melhor experiência de desenvolvimento.

```bash
# modo de desenvolvimento constante (SWC - Rápido e Recomendado)
$ npm run start:swc:dev

# rodar o build apenas com swc
$ npm run start:swc

# modo de produção
$ npm run start:prod
```

---

## 🧪 Testes

A estrutura de testes unitários básicos (`.spec.ts`) já vem funcional, injetando mocks para o banco e para a autenticação JWT.

```bash
# unit testes básicos
$ npm run test

# e2e testes
$ npm run test:e2e
```

## 📝 Licença
Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
