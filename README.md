# 🧪 Projeto de Qualidade de Software com Cypress e Cucumber

Este projeto demonstra testes automatizados de **cadastro de usuários** usando **Cypress** com o **Cucumber Preprocessor**. Ele valida diferentes cenários de criação de conta, como cadastro com dados válidos, e-mail já cadastrado, campos em branco e e-mail inválido.

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [ESBuild](https://esbuild.github.io/)

---

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instale as dependências

Certifique-se de ter o **Node.js** instalado. Em seguida, execute:

```bash
npm install
```

---

## 📁 Estrutura de Pastas

```
projetoqualidade/
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.feature
│   │   └── cadastro.js
│   ├── support/
│   │   └── e2e.js
│   │   └── commands.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## ⚙️ Como Executar os Testes

### 1. Atualize a URL base do projeto

No arquivo `cypress.config.js`, edite o valor de `baseUrl` com o endereço do sistema que você está testando:

```js
baseUrl: "https://www.site.com/"
```

### 2. Execute a interface do Cypress

```bash
npx cypress open
```

Na interface gráfica, selecione os testes `.feature` para executá-los com os cenários definidos em Gherkin.

---

## 📌 Observações

- Os seletores usados (como `#email`, `#senha`, etc.) devem existir no HTML da página em teste.
- Verifique se a aplicação que será testada está **ativa e acessível** no endereço definido no `baseUrl`.
