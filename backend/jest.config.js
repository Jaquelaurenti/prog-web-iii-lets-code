// vamos armazenar as configurações básicas do jest

module.exports = {
  clearMocks: true, // aqui eu vou informar para o jest que eu vou atuar com mock
  collectCoverage: true, // irei atuar com coverage
  coverageDirectory: "coverage", // determina o nome do diretório onde será armazenado o coverage dos seus testes
  coverageProvider: "v8", // versionamento do coverage
  testEnvironment: "node",
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}