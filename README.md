# Testes E2E – EBAC Shop com Cypress (Exercício)

Este projeto foi desenvolvido como parte de um exercício prático no curso de Testes Automatizados com Cypress da EBAC.  
A base do projeto foi fornecida pela escola e **forkada do repositório oficial da EBAC**, com modificações e desenvolvimento dos testes por mim.

## 📌 Funcionalidades testadas

### 🔹 e2e.spec.js – Fluxo de Compra
- Adição de múltiplos produtos ao carrinho com comando customizado
- Navegação entre páginas de produtos
- Validação de quantidade de itens no carrinho
- Processo de checkout completo com login e aceite de termos
- Verificação da mensagem de confirmação de pedido

### 🔹 login.spec.js – Testes de Login
- Login com dados válidos via comando customizado
- Login utilizando fixture (`perfil.json`)
- Validação da página "Minha conta" e saudação ao usuário logado
- Comparação com login sem otimização

## 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Visual Studio Code


