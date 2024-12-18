import { test, expect } from '@playwright/test';
import massa from '../fixtures/massa-login.json'
import { faker } from '@faker-js/faker';
const { NovoUsuarioPage } = require('../pages/novoUsuarioPage');

let novoUsuarioPage;

test.beforeEach(async ({ page }) => {
  novoUsuarioPage = new NovoUsuarioPage(page);
});

test('Verifica carregamento página de cadastro', async () => {
  await novoUsuarioPage.acessaPaginaNovoUsuario();
  const campoNome = await novoUsuarioPage.page.locator('xpath=/html/body/div[2]/form/div[1]/input');
  await expect(campoNome).toBeVisible();
});

test('Cadastra novo usuario', async () => {
  await novoUsuarioPage.acessaPaginaNovoUsuario();
  await novoUsuarioPage.preencherFormNovoUsuario(faker.person.fullName() , faker.internet.email() , massa.logininvalido.senha);
  await novoUsuarioPage.cadastraUsuario();
  await expect(novoUsuarioPage.page.locator("xpath=/html/body/div[1]")).toBeVisible();
  await expect(novoUsuarioPage.page.locator("xpath=/html/body/div[1]")).toContainText("Usuário inserido com sucesso");
});

test('Cadastra usuario com email ja utilizado', async () => {
  await novoUsuarioPage.acessaPaginaNovoUsuario();
  await novoUsuarioPage.preencherFormNovoUsuario(faker.person.fullName(), massa.loginvalido.email, massa.logininvalido.senha);
  await novoUsuarioPage.cadastraUsuario();
  await expect(novoUsuarioPage.page.locator('xpath=/html/body/div[1]')).toContainText('Endereço de email já utilizado');
});

test('Tenta cadastro sem dados obrigatorios', async () => {
    await novoUsuarioPage.acessaPaginaNovoUsuario();
    await novoUsuarioPage.cadastraUsuario();
    await expect(novoUsuarioPage.page.locator('xpath=/html/body/div[1]')).toContainText('Nome é um campo obrigatório');
    await expect(novoUsuarioPage.page.locator('xpath=/html/body/div[2]')).toContainText('Email é um campo obrigatório');
    await expect(novoUsuarioPage.page.locator('xpath=/html/body/div[3]')).toContainText('Senha é um campo obrigatório');
});

