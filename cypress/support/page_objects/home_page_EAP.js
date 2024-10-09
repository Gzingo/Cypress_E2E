export class HomePage {
    setMSN() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getMSN) => {
                cy.wrap(getMSN);
                cy.get("td").eq(0).find("input").type("188");
            });
    }

    setDownloadMSN() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getMSN) => {
                cy.wrap(getMSN);
                cy.get("td").eq(0).find("input").type("1");
            });
    }

    setViewMSN() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getMSN) => {
                cy.wrap(getMSN);
                cy.get("td").eq(0).find("input").type("2");
            });
    }

    setMSN_Form52() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getMSN) => {
                cy.wrap(getMSN);
                cy.get("td").eq(0).find("input").type("280");
            });
    }

    includeArchived() {
        cy.get(".checkbox")
            .find("[type=checkbox]")
            .check({force: true});
        // .should("be.checked");
    }

    setAircraftType() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getAircraftType) => {
                cy.wrap(getAircraftType);
                cy.get("td").eq(3).find(".ng-arrow-wrapper").click();
                cy.contains("PC-24").click();
            });
    }

    setWorkplace() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("2");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getWorkplaces) => {
                cy.wrap(getWorkplaces);
                cy.get("td").eq(4).find(".ng-arrow-wrapper").click();
                cy.contains("168 FF").click();
            });
    }

    setWorkplace_Form52() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getWorkplaces) => {
                cy.wrap(getWorkplaces);
                cy.get("td").eq(4).find(".ng-arrow-wrapper").click();
                cy.contains("4605 AFF").click();
            });
    }

    setEAP_Name() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("2");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPName) => {
                cy.wrap(getEAPName);
                cy.get("td").eq(5).type("BATTERY 1 INSTLN. (STD)");
            });
    }

    setEAP_NameForm52() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPName) => {
                cy.wrap(getEAPName);
                cy.get("td").eq(5).type("Flight Line Check List");
            });
    }

    setEAP_Number() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("2");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPNumber) => {
                cy.wrap(getEAPNumber);
                cy.get("td").eq(6).type("EAP-12-00405");
            });
    }

    setEAP_NumberForSwap() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPNumber) => {
                cy.wrap(getEAPNumber);
                cy.get("td").eq(6).type("EAP-24-00495");
            });
    }

    setEAP_NumberForm52() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPNumber) => {
                cy.wrap(getEAPNumber);
                cy.get("td").eq(6).type("EAP-24-00221");
            });
    }

    setState_Completed() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("198");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getStates) => {
                cy.wrap(getStates);
                cy.get("td").eq(7).find(".ng-arrow-wrapper").click();
                cy.get(".ng-dropdown-panel-items")
                    .should("be.visible")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("Completed").click();
                    });
            });
    }

    setState_CompletedForm52() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getStates) => {
                cy.wrap(getStates);
                cy.get("td").eq(7).find(".ng-arrow-wrapper").click();
                cy.get(".ng-dropdown-panel-items")
                    .should("be.visible")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("Completed").click();
                    });
            });
    }

    setStateNotStarted() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getStates) => {
                cy.wrap(getStates);
                cy.get("td").eq(7).find(".ng-arrow-wrapper").click();
                cy.get(".ng-dropdown-panel-items")
                    .should("be.visible")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("Not Started").click();
                    });
            });
    }

    setNA_Yes() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("198");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getNAStatus) => {
                cy.wrap(getNAStatus);
                cy.get("td").eq(8).find(".ng-arrow-wrapper").click({force: true});
                cy.get(".ng-dropdown-panel-items")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("Yes").click();
                    });
            });
    }

    setNA_Form52() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getNAStatus) => {
                cy.wrap(getNAStatus);
                cy.get("td").eq(8).find(".ng-arrow-wrapper").click({force: true});
                cy.get(".ng-dropdown-panel-items")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("Yes").click();
                    });
            });
    }

    setNA_No() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getNAStatus) => {
                cy.wrap(getNAStatus);
                cy.get("td").eq(8).find(".ng-arrow-wrapper").click({force: true});
                cy.get(".ng-dropdown-panel-items")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("No").click();
                    });
            });
    }

    setEOWL_Yes() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("2");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEOWLStatus) => {
                cy.wrap(getEOWLStatus);
                cy.get("td").eq(9).find(".ng-arrow-wrapper").click();
                cy.get(".ng-dropdown-panel-items")
                    .should("be.visible")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("Yes").click();
                    });
            });
    }

    setEOWL_No() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("2");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEOWLStatus) => {
                cy.wrap(getEOWLStatus);
                cy.get("td").eq(9).find(".ng-arrow-wrapper").click({force: true});
                cy.get(".ng-dropdown-panel-items")
                    .should("be.visible")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("No").click();
                    });
            });
    }

    setEOWL_Form52() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEOWLStatus) => {
                cy.wrap(getEOWLStatus);
                cy.get("td").eq(9).find(".ng-arrow-wrapper").click();
                cy.get(".ng-dropdown-panel-items")
                    .should("be.visible")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("No").click();
                    });
            });
    }

    clearSearchParams() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getClearBtn) => {
                cy.wrap(getClearBtn);
                cy.get("td")
                    .eq(2)
                    .find("button")
                    .contains("Clear")
                    .click();
            });
    }

    clickSearchBtn() {
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getSearchBtn) => {
                cy.wrap(getSearchBtn);
                cy.get("td")
                    .eq(2)
                    .find("button")
                    .contains("Search")
                    .click();
            });
    }

    download_and_assertPDF_Report() {
        cy.task("downloads", "cypress/downloads").then((before) => {
            cy.get("pilatus-apps-aircraft-list")
                .find("[id=\"accordion\"]").then((clickDownloadBtn) => {
                cy.wrap(clickDownloadBtn);
                cy.get(".panel-heading")
                    .find("button")
                    .eq(0).click();
                cy.wait(2000);
                cy.task("downloads", "cypress/downloads").then((after) => {
                    cy.wait(2000);
                    expect(after.length).to.be.eq(before.length + 1);
                    const newFile = after.filter(() => !before.includes("zip"))[0];
                    cy.log("The new file is: " + newFile);
                    cy.readFile("cypress/downloads/" + newFile).should("contain", "EAP-12");
                    cy.wait(3000);
                    cy.task("deleteFolder", "cypress/downloads/" + newFile);
                });
            });
        });
    }

    visitDigitalWorkplace() {
        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .then((clickABtn) => {
                cy.wrap(clickABtn);
                cy.get(".panel-heading").eq(1)
                    .find("a").eq(1).click();
            });
    }

    open_eOWL_record() {
        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]").within(() => {
            cy.get(".panel")
                .find("button").eq(1).click();
        });
    }

    clickViewButton() {
        cy.get("pilatus-apps-aircraft-list")
            .find(".panel-body").should("be.visible");
        cy.wait(10000);
        cy.get("pilatus-apps-test-table")
            .find(".panel-collapse").within(() => {
            cy.get("table tbody").find("tr").eq(0).within(() => {
                cy.get("td").eq(4).click();
            });
        });
    }

    clickFillOutButton() {
        cy.get("pilatus-apps-aircraft-list")
            .find(".panel-body").should("be.visible");
        cy.wait(10000);
        cy.get("pilatus-apps-test-table")
            .find(".panel-collapse").within(() => {
            cy.get("table tbody").find("tr").eq(0).within(() => {
                cy.get("td").eq(4).click();
            });
        });
    }

    setChapterSearchParams() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("188");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPNumber) => {
                cy.wrap(getEAPNumber);
                cy.get("td").eq(6).type("EAP-24-00495");
            });
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPName) => {
                cy.wrap(getEAPName);
                cy.get("td").eq(5).type("FACT.OPT. MICROWAVE OVEN");
            });
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getAircraftType) => {
                cy.wrap(getAircraftType);
                cy.get("td").eq(3).find(".ng-arrow-wrapper").click();
                cy.contains("PC-24").click();
            });
    }

    setChapterSearch() {
        cy.get("input[placeholder=\"Type * for all MSNs\"]").type("2");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPNumber) => {
                cy.wrap(getEAPNumber);
                cy.get("td").eq(6).type("EAP-12-00331");
            });
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getEAPName) => {
                cy.wrap(getEAPName);
                cy.get("td").eq(5).type("PRE-ASSEMBLY MECHANIC");
            });
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getAircraftType) => {
                cy.wrap(getAircraftType);
                cy.get("td").eq(3).find(".ng-arrow-wrapper").click();
                cy.contains("PC-12").click();
            });
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getStates) => {
                cy.wrap(getStates);
                cy.get("td").eq(7).find(".ng-arrow-wrapper").click();
                cy.get(".ng-dropdown-panel-items")
                    .should("be.visible")
                    .then((getOptions) => {
                        cy.wrap(getOptions);
                        cy.contains("Not Started").click();
                    });
            });
    }

}

export const onHomePage = new HomePage();
