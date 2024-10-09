declare namespace Cypress {
    interface Chainable<Subject = any> {
        waitForRequest(method: any, url: any, alias: any): void

        waitForPageLoad(): void

        enterA_checker_Pin(): void

        enterProductionCoordinator_Pin(): void
    }
}