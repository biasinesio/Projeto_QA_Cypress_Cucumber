import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que estou na página de cadastro', () => {
  cy.visit('/cadastro'); // 🔥 ajuste conforme a rota real
});

And('preencho todos os campos obrigatórios com dados válidos', () => {
  cy.get('#nome').type('Ana Teste');
  cy.get('#email').type('ana@email.com');
  cy.get('#senha').type('Senha123!');
  cy.get('#confirmarSenha').type('Senha123!');
});

And('preencho o campo de e-mail com um e-mail já cadastrado', () => {
  cy.get('#nome').type('Ana Teste');
  cy.get('#email').type('emailja@cadastrado.com');
  cy.get('#senha').type('Senha123!');
  cy.get('#confirmarSenha').type('Senha123!');
});

And('preencho os demais campos obrigatórios corretamente', () => {
  cy.get('#nome').type('Ana Teste');
  cy.get('#senha').type('Senha123!');
  cy.get('#confirmarSenha').type('Senha123!');
});

And('deixo um ou mais campos obrigatórios em branco', () => {
  // Deixar sem preencher ou apenas alguns campos
  cy.get('#nome').type('Ana Teste');
  // Não preenche o e-mail e senha
});

And('preencho o campo de e-mail com um formato inválido', () => {
  cy.get('#nome').type('Ana Teste');
  cy.get('#email').type('emailinvalido'); // sem @ ou domínio
  cy.get('#senha').type('Senha123!');
  cy.get('#confirmarSenha').type('Senha123!');
});

When('clico no botão de registrar', () => {
  cy.get('#botaoRegistrar').click();
});

Then('minha conta deve ser criada com sucesso', () => {
  cy.contains('Conta criada com sucesso').should('be.visible');
});

Then('devo ver uma mensagem de boas-vindas', () => {
  cy.contains('Bem-vindo').should('be.visible');
});

Then('devo ver uma mensagem de erro informando que o e-mail já está em uso', () => {
  cy.contains('E-mail já cadastrado').should('be.visible');
});

Then('devo ver mensagens de erro informando que os campos são obrigatórios', () => {
  cy.contains('Campo obrigatório').should('be.visible');
});

Then('devo ver uma mensagem de erro informando que o e-mail é inválido', () => {
  cy.contains('E-mail inválido').should('be.visible');
});