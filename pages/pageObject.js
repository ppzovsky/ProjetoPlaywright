export class PageObject{

    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('xpath=/html/body/div[2]/form/div[1]/input');
        this.senhaInput = page.locator('xpath=/html/body/div[2]/form/div[2]/input');
        this.loginButton = page.locator('xpath=/html/body/div[2]/form/button');
        this.novoUsuarioButton = page.locator('xpath=//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a');
        this.navegarPara();
    }

    async navegarPara() {
        await this.page.goto('https://seubarriga.wcaquino.me/')
    }
}
