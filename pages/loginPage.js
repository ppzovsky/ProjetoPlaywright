import { PageObject } from './pageObject';

export class LoginPage extends PageObject {

    constructor(page) {
        super(page);
    }

    async preencherFormLogin(email, senha) {
        await this.emailInput.fill(email);
        await this.senhaInput.fill(senha);
    }

    async fazLogin() {
        await this.loginButton.click();
    }

};