import type {Locator, Page} from "@playwright/test";


export class HomePage {

    readonly url = '/secure';
    readonly page: Page;
    readonly successText: Locator;

    constructor(page: Page) {

        this.page = page;
        this.successText = page.locator('#flash');
    }


    async goto(): Promise<void> {
        await this.page.goto(this.url)
    }
}