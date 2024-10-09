export class Assertions {
    assertHomePageURL() {
        cy.url().should("eq", "NDA_Protected_URL");
    }

    assertSignedInDefaultUser() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "Nikolic Nikola");
        });
    }

    assertSignedInA_Checker() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_shop_sen");
        });
    }

    assertSignedInA2_Checker() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_shop_TL");
        });
    }

    assertSignedInB_Checker() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_shop");
        });
    }

    assertSignedInQ_Checker() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_shop_quality");
        });
    }

    assertSignedInFQ_Checker() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_fquality");
        });
    }

    assertSignedInG_Checker() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_customer");
        });
    }

    assertSignedInG1_Checker() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_custome2");
        });
    }

    assertSignedInReporter() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_report");
        });
    }

    assertSignedInApprentice() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "eap_testing_shop_app");
        });
    }

    assertSignedInQualityEditor() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "epp_testing_qeditor");
        });
    }

    assertSignedInShopfloorAdmin() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "epp_testing_shopfloor_admin");
        });
    }

    assertSignedInProductionCoordinator() {
        cy.get("[id=\"main-navbar\"]").then((assertUserName) => {
            cy.wrap(assertUserName);
            cy.get(".nav")
                .find("li")
                .eq(0)
                .contains("Signed in as:" && "Nikolic Nikola");
        });
    }

    assertMSNSearch() {
        cy.get("pilatus-apps-aircraft-list").should("contain", "188 | PC-24");
    }

    assertArchivedIncluded() {
        cy.wait(30000);
        cy.get(".checkbox")
            .find("[type=checkbox]").should("be.checked");
        cy.get("pilatus-apps-aircraft-list")
            .find(".panel-group")
            .then((assertForm52) => {
                cy.wrap(assertForm52);
                cy.get("[id=\"accordion\"]").find(".label").should("contain", "Form 52");
            });
    }

    assertAircraftTypeSearch() {
        const validType = "PC-24";
        const invalidTypes = ["PC-12", "PC-21"];

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".panel").each(($item) => {
                    cy.wrap($item)
                        .invoke("text")
                        .then((text) => {
                            expect(text).to.include(validType);
                            invalidTypes.forEach((invalidType) => {
                                expect(text).not.to.include(invalidType);
                            });
                        });
                });
            });
    }

    assertWorkplacesSearch() {
        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .should("not.be.empty")
            .should("contain.text", "EAP-12-00405 (Issue 01)");
    }

    assertEAP_NameSearch() {
        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .should("not.be.empty")
            .should("contain.text", "BATTERY 1 INSTLN. (STD)");
    }

    assertEAP_NumberSearch() {
        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .should("not.be.empty")
            .should("contain.text", "EAP-12-00405");
    }

    assertStateSearchCompleted() {
        const validText = "Completed";
        const invalidTexts = [
            "Not Started",
            "In Progress",
            "With anomaly",
            "Needs Signature",
            "Obsolete",
        ];

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".table")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                expect(text).to.include(validText);
                                invalidTexts.forEach((invalidText) => {
                                    expect(text).not.to.include(invalidText);
                                });
                            });
                    });
            });
    }

    assertStateNotStarted() {
        const validText = "Not Started";
        const invalidTexts = [
            "In Progress",
            "With anomaly",
            "Needs Signature",
            "Obsolete",
        ];

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".table")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                expect(text).to.include(validText);
                                invalidTexts.forEach((invalidText) => {
                                    expect(text).not.to.include(invalidText);
                                });
                            });
                    });
            });
    }

    assertNA_Search() {
        const validText = "Completed + N/A";
        const invalidTexts = [
            "Not Started",
            "In Progress",
            "With anomaly",
            "Needs Signature",
            "Obsolete",
        ];

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".table")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                expect(text).to.include(validText);
                                invalidTexts.forEach((invalidText) => {
                                    expect(text).not.to.include(invalidText);
                                });
                            });
                    });
            });
    }

    assertEOWL_Yes_Search() {
        const validText = " + OWL";
        const invalidTexts = ["Not Started", "Obsolete"];

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".table")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                expect(text).to.include(validText);
                                invalidTexts.forEach((invalidText) => {
                                    expect(text).not.to.include(invalidText);
                                });
                            });
                    });
            });
    }

    assertEOWL_No_Search() {
        const invalidText = " + OWL";

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".table")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                expect(text).not.to.include(invalidText);
                            });
                    });
            });
    }

    assertMultiParamSearch() {
        const validMarks = ["Form 52", "280", "PC-24", "Open eOwl"];
        const validTexts = ["Completed", "N/A", "4605 AFF", "Flight Line Check List - Nach Einflug", "EAP-24-00221 (Issue 03)"];
        const invalidTexts = [" + OWL", "Not Started", "Obsolete", "In Progress", "Needs Signature"];

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".panel-heading")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                validMarks.forEach((validMark) => {
                                    expect(text).to.include(validMark);
                                });
                            });
                    });
            });

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".table")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                validTexts.forEach((validText) => {
                                    expect(text).to.include(validText);
                                });
                                invalidTexts.forEach((invalidText) => {
                                    expect(text).not.to.include(invalidText);
                                });
                            });
                    });
            });
    }

    assertClearedSearch() {
        cy.get(".checkbox").find("[type=checkbox]").should("not.be.checked");
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getMSN) => {
                cy.wrap(getMSN);
                cy.get("td").eq(0).find("input").should("be.empty");
            });
        cy.get("pilatus-apps-ewi-aircraft-filter-form")
            .find("tbody")
            .then((getAircraftType) => {
                cy.wrap(getAircraftType);
                cy.get("td")
                    .eq(3)
                    .find(".ng-select-container")
                    .should("contain", "Select Some Options");
            });
    }

    assertDW_A_CheckerURL() {
        cy.url().should("eq", "NDA_Protected_URL");
    }

    assertDW_Q_CheckerURL() {
        cy.url().should("eq", "NDA_Protected_URL");
    }

    assertDWResult() {
        const validAircrafts = ["PC-12", "2"];
        cy.get("table").should("be.visible");
        cy.get("tbody")
            .within(() => {
                cy.get("tr").find("td").eq(0)
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                validAircrafts.forEach((validAircraft) => {
                                    expect(text).to.include(validAircraft);
                                });
                            });
                    });
            });
    }

    assertDW_OWL_page() {
        const validWorkplace = "420 APM";
        cy.url().should("equal", "NDA_Protected_URL");
        cy.get("app-open-work-list-overview").find("tbody")
            .within(() => {
                cy.get("td").eq(4).find("button").click();
                cy.get("app-tracebility")
                    .within(() => {
                        cy.get(".float").find("div").eq(2).should("contain", validWorkplace);
                    });
                cy.get("tr").eq(2)
                    .within(() => {
                        cy.get("td").eq(4).find("button").click();
                    });
                cy.get("tr").eq(3).find("app-tracebility")
                    .within(() => {
                        cy.get(".float").find("div").eq(2).should("contain", validWorkplace);
                    });
            });

    }

    assertOWL_recordPage() {
        cy.url().should("equal", "NDA_Protected_URL");
        cy.get("app-search-filter").find(".filter-form").within(() => {
            cy.get(".filter-row").eq(0).should("contain", "2");
            cy.get(".filter-row").eq(0).should("contain", "PC-12");
        });
        cy.get("app-owl-accordion").should("be.visible");
        cy.get("app-owl-accordion")
            .find(".card-header").should("contain", "2 | PC-12");
    }

    assertTestRecordViewPage() {
        cy.url().should("equal", "NDA_Protected_URL");
        cy.get("epi-test-recording").find(".col-md-12")
            .within(() => {
                cy.get("h3").should("contain", "MSN: 198 | EAP-24-00023 | PC-24 | Issue: 01");
            });
    }

    assertTestRecordChapterPage() {
        cy.url().should("equal", "NDA_Protected_URL");
        cy.wait(8000);
        cy.get("epi-test-recording").find(".col-md-12")
            .within(() => {
                cy.get("h3").should("contain", "MSN: 2 | EAP-12-00331 | PC-12 | Issue: 01");
            });
    }

    assertTestChapterSearch() {
        const validHeading = "188 | PC-24";
        const validTexts = ["FACT.OPT. MICROWAVE OVEN", "EAP-24-00495 (Issue 01)"];
        cy.wait(20000);
        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get(".panel-heading")
                    .should("be.visible")
                    .invoke("text")
                    .then((text) => {
                        expect(text).to.include(validHeading);
                    });
            });

        cy.get("pilatus-apps-aircraft-list")
            .find("[id=\"accordion\"]")
            .within(() => {
                cy.get("pilatus-apps-test-table").find(".table")
                    .should("be.visible")
                    .each(($item) => {
                        cy.wrap($item)
                            .invoke("text")
                            .then((text) => {
                                validTexts.forEach((validText) => {
                                    expect(text).to.include(validText);
                                });
                            });
                    });
            });
    }

    assertTestRecordingPage() {
        cy.url().should("equal", "NDA_Protected_URL");
        cy.wait(8000);
        cy.get("epi-test-recording").find(".col-md-12")
            .within(() => {
                cy.get("h3").should("contain", "MSN: 188 | EAP-24-00495 | PC-24 | Issue: 01");
            });
    }

    assertTestRecordingFillOutPage() {
        cy.visitWait("NDA_Protected_URL");
        cy.url().should("contain", "NDA_Protected_URL");
        cy.wait(45000);

        cy.get("epi-test-recording").find(".col-md-12")
            .within(() => {
                cy.get("h3").should("contain", "MSN: 2" && "EAP-12-00331" && "PC-12" && "Issue:");
            });
    }

    assertTestRecordingTab() {
        cy.get("[id=\"tab1\"]")
            .find("h3").should("contain.text", " MSN:" && "EAP" && "PC" && "Issue:");
        cy.get("[id=\"tab1\"]").find(".panel-group")
            .should("contain.text", "Definition und Bestimmungen" && "Arbeits- & Prüfprotokoll");
    }

    assertTestRecordingMetaInformationTab() {
        cy.get("[id=\"tab2\"]")
            .find("h3").should("contain.text", "Meta Information");
    }

    assertTestRecordingRecordOfRevisionsTab() {
        cy.get("[id=\"tab3\"]")
            .find("h3").should("contain.text", "Record of Revisions");
    }

    assertTestRecordingSwappingHistoryTab() {
        cy.get("[id=\"tab4\"]")
            .find("h3").should("contain.text", "Swapping History");
    }

    assertTestRecordingAdvancedActionsTab() {
        cy.get("[id=\"tab5\"]")
            .find("h3").should("contain.text", "Advanced Actions");
    }

    assert_A_check_open_badge() {
        cy.get("epi-chapter-template").eq(1)
            .within(() => {
                cy.get(".checker-badge").should("contain.text", "A-check open");
            });
    }

    assertSuccessfulTestReset() {
        cy.get("[id=\"toast-container\"]").should("be.visible").and("contain.text", "Test reseted.");
        cy.get("app-advanced-actions").find("table")
            .within(() => {
                cy.get("tr").eq(0).should("contain.text", "Not allowed!");
            });
    }

    assert_single_B_Check_wasSuccessful() {
        cy.get(".panel-collapse").find(".panel-group").eq(1)
            .within(() => {
                cy.get("div").first().find(".panel-heading").should("be.visible");
                cy.get("div").first().find(".panel-collapse").then((checkerAction) => {
                    cy.wrap(checkerAction);
                    cy.get(".test-step").eq(1).within(() => {
                        cy.get(".row").eq(1).should("contain.text", "CONFIRMED").and("contain.text", "(B)");
                    });
                });
            });
    }

    assertAll_B_Checks_areSuccessful() {
        const validText = ["CONFIRMED", "(B)"];
        cy.get(".panel-collapse").find(".panel-group").eq(1)
            .within(() => {
                cy.get("div").first().find(".panel-heading").should("be.visible").should("contain.text", "2.1");
                cy.get("div").first().find(".panel-collapse")
                    .then((checkerAction) => {
                        cy.wrap(checkerAction);
                        cy.get(".test-step").each(($testStep, index) => {
                            if (index > 0) { // Exclude the test step with index 0
                                // noinspection CypressCommandSubjectValidation
                                cy.wrap($testStep).within(() => {
                                    const rowElement = cy.get(".row").eq(1);
                                    validText.forEach(text => {
                                        rowElement.should("contain.text", text);
                                    });
                                });
                            }
                        });
                    });
            });
    }

    assertSwapTestRecordingPopup() {
        cy.get("swap-test-recording").should("be.visible").and("contain.text", "Swap Test Recording");
    }

    assertSwapConfirmBtnEnabled() {
        cy.get("swap-test-recording").find(".action-container")
            .within(() => {
                cy.get("button").eq(0).should("contain.text", "Swap").and("be.enabled");
                cy.get("button").eq(1).should("contain.text", "Cancel");
            });
    }

    assertSwapConfirmBtnDisabled() {
        cy.get("swap-test-recording").find(".action-container")
            .within(() => {
                cy.get("button").eq(0).should("contain.text", "Swap").and("be.disabled");
                cy.get("button").eq(1).should("contain.text", "Cancel");
            });
    }

    assertSwapSuccess() {
        cy.get("[id=\"toast-container\"]").should("be.visible")
            .and("contain.text", "Successfully swapped Test recordings.");
    }

    assertSwappingHistory() {
        const validTexts = ["Nikolic Nikola", "Swapping Test Recording for purposes of QA E2E test"];

        cy.get("[id=\"testrecording-checklist\"]").find(".tab-content")
            .within(() => {
                cy.get("[id=\"tab4\"]")
                    .within(() => {
                        cy.get("table").find("tbody")
                            .within(() => {
                                cy.get("tr").each(($row) => {
                                    let containsValidText = false;
                                    // noinspection CypressCommandSubjectValidation
                                    cy.wrap($row).find("td").each(($span) => {
                                        const text = $span.text().trim();
                                        if (validTexts.includes(text)) {
                                            containsValidText = true;
                                        }
                                    }).then(() => {
                                        expect(containsValidText).to.be.true;
                                    });
                                });
                            });
                    });
            });
    }

    assertEPI_home_pageURL() {
        cy.url().should('equal', 'NDA_Protected_URL')
    }

    assertEPI_SearchBtnIsDisabled() {
        cy.get('pilatus-apps-epi-aircraft-filter-form').find('.table')
            .within(() => {
                cy.get('tr').eq(0)
                    .within(() => {
                        cy.get('td').eq(2).find('button')
                            .should('be.disabled')
                    })
            })
    }

    assertEPI_SearchBtnIsEnabled() {
        cy.get('pilatus-apps-epi-aircraft-filter-form').find('.table')
            .within(() => {
                cy.get('tr').eq(0)
                    .within(() => {
                        cy.get('td').eq(2).find('button')
                            .should('be.enabled')
                    })
            })
    }
}

export const assertions = new Assertions();
