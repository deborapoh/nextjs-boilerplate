This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn
yarn dev
```

---

## How to Login

TODO: Implement login in the api with jwt validation

Open [http://localhost:3000](http://localhost:3000) with your browser and use the infor below to login

```bash
usuario: admin
senha: 123
```

---

## Instructions on how to use the software

### Menu

- Preferências
  - Empresas Parceiras
      1. Ao abrir esta opção é possível cadastrar uma empresa para quem se oferece serviço
      2. Na lista de empresas cadastradas é possível clicar no ícone de editar para editar qualquer campo da empresa
      3. Na lista de empresas cadastradas é possível clicar no ícone de expandir para visualizar os dados da empresa

  - Categorias de Despesa
      1. Ao abrir esta opção é possível cadastrar uma categoria de despesa
      2. Na lista de categorias cadastradas é possível clicar no ícone de editar para editar a categoria
      3. Na lista de categorias cadastradas é possível clicar no ícone de arquivar para desabilitar uma categoria, clicando novamente esta é habilitada novamente

  - Configurações:
    - TODO: implementar

### Dashboard

A tela principal contém os dashboards para rápida visualização

- Gráfico indicativo de quanto ainda há disponível de faturamento para emitir uma Nota Fiscal sem que haja desenquadramento como MEI
- Gráficos com o valor de NF gerado, mês a mês
- Gráficos com o valor de despesas mês a mês
- Gráficos com balanço simples, mostrando receitas - despesas mês a mês
- Gráficos com as despesas por categorias

- TODO: implementar

### Sair

- Ao clicar em Sair o usuário é direcionado para a tela de login novamente

### Lançar NF

- Ao clicar em Lançar NF será possível selecionar uma empresa e cadastrar os dados de uma Nota Fiscal para determinada empresa

TODO: Finish Lançar NF implementation

### Lançar Despesa

- Ao clicar em Lançar Despesa será possível selecionar uma categoria e cadastrar os dados de uma Despesa

- TODO: implementar

---

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

---

## TODO: Configure eslint

---

## TODO: Create api and database

---

## TODO: Create env file

---

## TODO: implement all routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

---
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---

## TODO: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
