# Meu E-commerce

Loja online de eletrônicos em desenvolvimento, construída com React, Vite e Tailwind CSS.

> ⚠️ Projeto em desenvolvimento ativo. Várias telas e componentes ainda estão em fase de rascunho/teste.

## Stack

- **React** — biblioteca principal de UI
- **Vite** — bundler e servidor de desenvolvimento
- **Tailwind CSS** — estilização utility-first
- **React Router (`react-router-dom`)** — roteamento entre páginas, usando `createBrowserRouter` + rotas aninhadas com `Outlet`
- **Lucide React** — ícones (carrinho, busca, usuário, etc.)

## Estrutura do projeto

```
src/
├── assets/              # imagens e fontes locais
├── componentes/
│   ├── Layout.jsx       # casca fixa com Nav + <Outlet /> para as páginas
│   ├── Nav.jsx          # barra de navegação (logo, catálogo, carrinho, login)
│   ├── Home.jsx         # página inicial (hero com imagem de fundo)
│   └── cardProduto.jsx  # página/listagem de produtos (em desenvolvimento)
├── App.jsx
├── main.jsx             # configuração das rotas (createBrowserRouter)
└── index.css            # diretivas do Tailwind + estilos globais (scrollbar, fontes)
```

## Rotas

| Caminho | Página |
|---|---|
| `/` | Home |
| `/best` | Mais vendidos / Card de produtos |

Todas as rotas compartilham o mesmo `Layout`, que mantém a barra de navegação fixa e injeta o conteúdo de cada página via `<Outlet />`.

## Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar em modo desenvolvimento
npm run dev

# gerar build de produção
npm run build
```

## Paleta de cores (tema escuro)

Cores customizadas definidas no `tailwind.config.js`:

| Uso | Classe |
|---|---|
| Fundo da página | `loja-fundo` |
| Fundo de cards/nav | `loja-card` |
| Texto principal | `loja-texto` |
| Texto em destaque/hover | `loja-navtexto` |
| Cor de destaque | `loja-destaque` |

## Roadmap / Próximos passos

- [ ] Estruturar `CardProduto` como componente reutilizável, recebendo dados via props (`produto.nome`, `produto.preco`, etc.)
- [ ] Criar listagem de produtos em grid (`grid grid-cols-3`)
- [ ] Substituir imagens hotlinked por assets locais otimizados (WebP)
- [ ] Implementar página de produto individual (`/produto/:id`)
- [ ] Implementar carrinho de compras
- [ ] Conectar a uma fonte de dados de produtos (API ou banco de dados)

## Autor

Projeto pessoal, em desenvolvimento como estudo de React + Tailwind aplicado a e-commerce.
