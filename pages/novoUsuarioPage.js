import { PageObject } from './pageObject';


export class NovoUsuarioPage extends PageObject {

    constructor(page) {
        super(page);
        this.nomeInput = page.locator('xpath=/html/body/div[2]/form/div[1]/input');
        this.emailInput = page.locator('xpath=/html/body/div[2]/form/div[2]/input');
        this.senhaInput = page.locator('xpath=/html/body/div[2]/form/div[3]/input');
        this.cadastrarButton = page.locator('xpath=/html/body/div[2]/form/input');
    }

    async acessaPaginaNovoUsuario() {
        await this.novoUsuarioButton.click();
    }

    async preencherFormNovoUsuario(nome, email, senha) {
        await this.nomeInput.fill(nome);
        await this.emailInput.fill(email);
        await this.senhaInput.fill(senha);
    }

    async cadastraUsuario() {
        await this.cadastrarButton.click();
    }

};