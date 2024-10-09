declare namespace Cypress {
    interface Chainable<Subject = any> {
        clearAll(): void

        auth(username: any): void

        // @ts-ignore
        visitWait(url: any): void

        exists(selector: any): void

        // @ts-ignore
        shouldHave(selector: any, text: any, opts: #JSStubBasedExpressionType): void
    }
}