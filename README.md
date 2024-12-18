# Projeto de Testes Automatizados com Playwright

## Descrição
Este é um projeto de estudo e aprendizado que utiliza o framework Playwright para automação de testes em aplicações web. O site testado neste projeto é [Seu Barriga](https://seubarriga.wcaquino.me/).

## Objetivo
O principal objetivo deste projeto é praticar e consolidar conhecimentos em automação de testes utilizando Playwright e Node.js, explorando:

- Criação de testes automatizados.
- Configurações do Playwright.
- Uso de boas práticas no POM (Page Object Model).
- Execução de testes em diferentes navegadores.

## Tecnologias Utilizadas
- **Playwright**: Framework de automação de testes.
- **Node.js**: Ambiente de execução JavaScript.
- **JavaScript**: Linguagem de programação utilizada no projeto.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
┌── tests/                 # Diretório onde ficam os testes
├── pages/                 # Implementação do POM
├── fixtures/              # Massas de dados
├── playwright.config.js   # Configurações do Playwright
└── package.json           # Gerenciamento de dependências
```

## Configuração do Ambiente
### Requisitos
- Node.js instalado na máquina.
- Gerenciador de pacotes (npm ou yarn).

### Passos para Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/ppzovsky/ProjetoPlaywright.git
   cd ProjetoPlaywright
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Instale os navegadores utilizados pelo Playwright:
   ```bash
   npx playwright install
   ```

## Como Executar os Testes
Execute os testes utilizando o comando:
```bash
npx playwright test
```

### Relatórios de Testes
Após a execução, você pode acessar o relatório gerado em formato HTML:
```bash
npx playwright show-report
```
## Autor
João Pedro Soares de Brito

## Contribuições
Contribuições são bem-vindas! Caso encontre problemas ou queira sugerir melhorias, abra uma issue ou envie um pull request.


