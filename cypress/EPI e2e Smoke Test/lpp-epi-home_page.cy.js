import {assertions} from "../support/page_objects/assertions";
import {onHomeEPI} from "../support/page_objects/home_page_EPI";

describe("EAP Home page ", () => {
    beforeEach(() => {
        cy.auth(null);
        cy.clearAll();
        cy.visitWait(Cypress.env("EAP_HOME_URL"));
        assertions.assertEPI_home_pageURL()
    });

    it('searchByMSN', () => {
        assertions.assertEPI_SearchBtnIsDisabled()
        onHomeEPI.setMSN()
        assertions.assertEPI_SearchBtnIsEnabled()
        onHomeEPI.clickSearchButton()
    })



});