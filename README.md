# 🛒 Meu E-commerce

E-commerce de eletrônicos desenvolvido com **React**, **Vite** e **Tailwind CSS**.

O projeto está sendo desenvolvido como um projeto de estudo, com foco no aprendizado de React, componentização, gerenciamento de estado, roteamento e integração com APIs.

> ⚠️ **Projeto em desenvolvimento:** novas funcionalidades e melhorias de interface ainda estão sendo implementadas.

---

## 📸 Sobre o projeto

A aplicação simula uma loja virtual de produtos eletrônicos, permitindo ao usuário navegar pelo catálogo, pesquisar produtos, aplicar filtros, visualizar detalhes de um produto e adicionar itens ao carrinho.

Os produtos são obtidos através da **DummyJSON API**.

---

## 🚀 Funcionalidades

### 🏠 Página inicial

* Página inicial com banner principal.
* Layout responsivo.
* Barra de navegação compartilhada entre as páginas.

### 🔎 Pesquisa de produtos

A barra de navegação possui um campo de pesquisa.

A pesquisa utiliza parâmetros da URL para compartilhar o termo pesquisado entre componentes.

Exemplo:

```text
/best?busca=iphone
```

Os produtos são filtrados de acordo com o nome informado pelo usuário.

### 🛍️ Catálogo de produtos

A página de mais vendidos apresenta produtos obtidos da API.

Cada produto possui informações como:

* Nome
* Preço
* Desconto
* Preço original
* Marca
* Imagem
* Descrição
* Avaliação
* Imagens adicionais

### 🔎 Filtros

O catálogo possui filtros por:

* Marca
* Preço máximo
* Pesquisa por nome

Os filtros podem ser utilizados simultaneamente.

### 📱 Página individual do produto

Cada produto pode ser selecionado para abrir uma página com mais informações.

A navegação utiliza o ID do produto através dos parâmetros da URL:

```text
/produto?id=1
```

A página consulta a API novamente para carregar os dados do produto selecionado.

### 🛒 Carrinho

O projeto possui um `CarrinhoContext` utilizando **Context API** para compartilhar o estado do carrinho entre os componentes.

É possível:

* Adicionar produtos ao carrinho.
* Ver os produtos adicionados.
* Identificar produtos que já estão no carrinho.

### 🧭 Navegação

A aplicação utiliza `react-router-dom` com:

* `createBrowserRouter`
* Rotas aninhadas
* `Outlet`
* `useNavigate`
* `useSearchParams`

---

## 🛠️ Tecnologias utilizadas

| Tecnologia           | Utilização                          |
| -------------------- | ----------------------------------- |
| **React 19**         | Construção da interface             |
| **Vite**             | Ambiente de desenvolvimento e build |
| **Tailwind CSS**     | Estilização                         |
| **React Router DOM** | Roteamento                          |
| **Context API**      | Gerenciamento do carrinho           |
| **Lucide React**     | Ícones                              |
| **DummyJSON API**    | Dados dos produtos                  |
| **JavaScript**       | Lógica da aplicação                 |

As dependências atuais do projeto estão definidas no `package.json`, incluindo React 19, React Router DOM 7, Tailwind CSS e Lucide React.

---

## 📂 Estrutura do projeto

```text
E-Commerce/
│
├── context/
│   └── CarrinhoContext.jsx
│
├── src/
│   ├── assets/
│   │   └── imagens e arquivos locais
│   │
│   ├── componentes/
│   │   ├── CardCarrinho.jsx
│   │   ├── cardProduto.jsx
│   │   └── Nav.jsx
│   │
│   ├── pages/
│   │   ├── Layout.jsx
│   │   ├── Home.jsx
│   │   ├── BestSellers.jsx
│   │   ├── Carrinho.jsx
│   │   └── ProdutoTela.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

A estrutura atual do repositório contém `assets`, `componentes`, `pages`, `App.jsx` e `main.jsx`, além do contexto separado para o carrinho.

---

## 🧭 Rotas

| Rota             | Página                   |
| ---------------- | ------------------------ |
| `/`              | Página inicial           |
| `/best`          | Mais vendidos / catálogo |
| `/carrinho`      | Carrinho de compras      |
| `/produto?id=ID` | Detalhes de um produto   |

As rotas são configuradas em `src/main.jsx` utilizando `createBrowserRouter`. Todas ficam dentro do `Layout`, que mantém a barra de navegação e utiliza `<Outlet />` para renderizar a página atual.

---

## 🔌 API

Os produtos são obtidos através da:

**DummyJSON**

A página de mais vendidos utiliza a categoria de smartphones:

```text
https://dummyjson.com/products/category/smartphones
```

Os dados recebidos da API são transformados para um formato utilizado pelos componentes da aplicação.

Por exemplo:

```javascript
{
  id,
  nome,
  preco,
  desconto,
  marca,
  imagem,
  precoOriginal,
  descricao,
  carroselImg,
  avaliacao
}
```

A página individual utiliza a API geral de produtos para buscar um produto específico pelo ID.

---

## 🎨 Estilização

O projeto utiliza **Tailwind CSS**.

Também foram criadas classes de cores personalizadas para manter o tema visual da loja:

```text
loja-fundo
loja-card
loja-texto
loja-navtexto
loja-destaque
```

O projeto utiliza principalmente uma interface com tema escuro.

---

## 🛒 Gerenciamento do carrinho

O carrinho é gerenciado através do `CarrinhoContext`.

A estrutura utiliza:

```javascript
createContext()
useContext()
useState()
```

O provider disponibiliza funções como:

```javascript
AdicionarAoCarrinho()
CarrinhoVerde()
```

e o estado:

```javascript
CarrinhoArray
```

Dessa forma, diferentes componentes podem acessar o carrinho sem precisar passar os dados manualmente através de várias camadas de props.

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/joaovitorS-silva/E-Commerce.git
```

### 2. Entre na pasta

```bash
cd E-Commerce
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Abra o endereço informado pelo Vite

Normalmente:

```text
http://localhost:5173
```

---

## 📦 Scripts disponíveis

### Desenvolvimento

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Vite.

### Build

```bash
npm run build
```

Gera a versão de produção da aplicação.

### Preview

```bash
npm run preview
```

Executa uma prévia do build de produção.

### Lint

```bash
npm run lint
```

Executa o ESLint para verificar problemas no código.

Esses scripts estão definidos no `package.json` atual do projeto.

---

## 🗺️ Roadmap

Funcionalidades planejadas ou que ainda podem ser aprimoradas:

* [ ] Melhorar o sistema de pesquisa.
* [ ] Criar sugestões de produtos enquanto o usuário digita.
* [ ] Melhorar a página individual do produto.
* [ ] Implementar remoção de produtos do carrinho.
* [ ] Implementar alteração da quantidade de produtos.
* [ ] Implementar cálculo do valor total do carrinho.
* [ ] Criar sistema de login.
* [ ] Criar sistema de favoritos.
* [ ] Melhorar responsividade para dispositivos móveis.
* [ ] Melhorar o sistema de categorias.
* [ ] Adicionar mais categorias de produtos.
* [ ] Criar uma página de checkout.
* [ ] Melhorar tratamento de erros da API.
* [ ] Adicionar estados de carregamento.
* [ ] Melhorar acessibilidade.
* [ ] Criar backend e banco de dados futuramente.

---

## 📚 Objetivo

Este projeto está sendo desenvolvido principalmente para praticar:

* React
* Componentização
* Props
* Hooks
* `useState`
* `useEffect`
* Context API
* React Router
* Parâmetros de URL
* Consumo de APIs
* `fetch`
* Filtragem de arrays
* Tailwind CSS
* Organização de projetos Front-End

---

## 👨‍💻 Autor

**João Vitor**

Projeto desenvolvido para estudo e prática de desenvolvimento Front-End com React.

---

## 🔗 Repositório

[GitHub — joaovitorS-silva/E-Commerce](https://github.com/joaovitorS-silva/E-Commerce?utm_source=chatgpt.com)
