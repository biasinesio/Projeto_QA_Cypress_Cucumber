Feature: Registro de novo usuário
  Objetivo: Validar o funcionamento da criação de contas.

  Scenario: Cadastro com dados válidos
    Given que estou na página de cadastro
    And preencho todos os campos obrigatórios com dados válidos
    When clico no botão de registrar
    Then minha conta deve ser criada com sucesso
    And devo ver uma mensagem de boas-vindas

  Scenario: Cadastro com e-mail já existente
    Given que estou na página de cadastro
    And preencho o campo de e-mail com um e-mail já cadastrado
    And preencho os demais campos obrigatórios corretamente
    When clico no botão de registrar
    Then devo ver uma mensagem de erro informando que o e-mail já está em uso

  Scenario: Cadastro com campos obrigatórios em branco
    Given que estou na página de cadastro
    And deixo um ou mais campos obrigatórios em branco
    When clico no botão de registrar
    Then devo ver mensagens de erro informando que os campos são obrigatórios

  Scenario: Validação de formato de e-mail inválido
    Given que estou na página de cadastro
    And preencho o campo de e-mail com um formato inválido
    And preencho os demais campos obrigatórios corretamente
    When clico no botão de registrar
    Then devo ver uma mensagem de erro informando que o e-mail é inválido