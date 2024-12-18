import { test, expect } from '@playwright/test';
import massa from '../fixtures/massa-login.json';
const { LoginPage } = require('../pages/loginPage');

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
});

test('Verifica carregamento página de login', async () => {
  const campoEmail = await loginPage.page.locator('xpath=/html/body/div[2]/form/div[1]/input');
  await expect(campoEmail).toBeVisible();
});

test('Faz login com senha válida', async () => {
  await loginPage.preencherFormLogin(massa.loginvalido.email, massa.loginvalido.senha);
  await loginPage.fazLogin();
  await expect(loginPage.page.locator("xpath=/html/body/div[1]")).toBeVisible();
  await expect(loginPage.page.locator("xpath=/html/body/div[1]")).toContainText("Bem vindo, JOAO PEDRO SOARES DE BRITO!");
});

test('Faz login com senha inválida', async () => {
  await loginPage.preencherFormLogin(massa.logininvalido.email, massa.logininvalido.senha);
  await loginPage.fazLogin();
  await expect(loginPage.page.locator('xpath=/html/body/div[1]')).toContainText('Problemas com o login do usuário');
});

