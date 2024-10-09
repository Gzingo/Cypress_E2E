export class DWPage {

    setWorkplaceForDW() {
        cy.get("[id=\"search\"]")
            // .find("div").eq(2)
            .find("div").eq(2)
            .then((setInput) => {
                cy.wrap(setInput);
                cy.wait(2000);
                cy.get("input").eq(1)
                    .type("420 APM{enter}");
            });
    }

    clickSearchDW() {
        cy.get("[id=\"search\"]")
            .find("div").eq(3)
            .then((searchBtn) => {
                cy.wrap(searchBtn);
                cy.get("button").eq(1).click();
                cy.wait(60000);
            });
    }

    waitForDWTable() {
        cy.intercept({
            method: "GET",
            url: "NDA_Protected_URL"
        }).as("tableLoaded");

        cy.wait("@tableLoaded", {timeout: 60000}).its("response.statusCode").should("eq", 200);
    }

    openOWL_fromDW() {
        // _____Open in same window when an HTML element is a button_____
        // const url = "NDA_Protected_URL";

        cy.get("table")
            .find("tbody")
            .within(() => {
                cy.get("td").eq(5);
                // Stub window.open to prevent opening a new tab
                cy.window().then((win) => {
                    cy.stub(win, "open").callsFake((url) => {
                        win.location.href = url;
                    });
                });
                cy.get(".btn").eq(0).click();
            });
    }
}

export const onDWPage = new DWPage();
