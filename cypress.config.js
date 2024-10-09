const {defineConfig} = require("cypress");
const fs = require("fs");
const {rm} = require("fs");
const {downloadFile} = require("cypress-downloadfile/lib/addPlugin");
const {removeDirectory} = require("cypress-delete-downloads-folder");
require("dotenv").config();


module.exports = defineConfig({
    // chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    projectId: "1bzgc8",
    numTestsKeptInMemory: 5,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        reportDir: "cypress/reports/mochawesome-report",
        reportPageTitle: "lpp-SmokeTest",
        reportFileName: "lpp-smokeTest_report",
        overwrite: true,
        html: false,
        json: true
    },
    env: {
        lpp_qa_username: process.env.LPP_QA_USERNAME,
        lpp_qa_password: process.env.CYPRESS_LPP_QA_PASSWORD,
        eap_testing_viewer_password: process.env.CYPRESS_EAP_TESTING_VIEWER_PASSWORD,
        eap_testing_shop_password: process.env.CYPRESS_EAP_TESTING_SHOP_PASSWORD,
        checker_a_pin: process.env.CYPRESS_CHECKER_A_PIN,
        production_coordinator_pin: process.env.CYPRESS_PRODUCTION_COORDINATOR_PIN,
        recordKey: process.env.CYPRESS_RECORD_KEY,
        url_main: process.env.URL_MAIN,
        url_epi_test: process.env.URL_EPI_TEST,
        url_dev: process.env.URL_DEV,
        url_test: process.env.URL_TEST,
        url_analytics: process.env.URL_ANALYTICS,
        url_inside: process.env.URL_INSIDE
    },
    e2e: {
        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on);
            on("task", {downloadFile});
            on("task", {removeDirectory});
            on("task", {
                async downloads(downloadsPath) {
                    return fs.readdirSync(downloadsPath);
                },
            });
            on("task", {
                deleteFolder(folderName) {
                    return new Promise((resolve, reject) => {
                        rm(folderName, {maxRetries: 5, recursive: true}, (error) => {
                            if (error) {
                                console.error(error);
                                reject(error);
                            } else {
                                resolve(null);
                            }
                        });
                    });
                },
            });
            return config;
        },
        retries: {
            runMode: 2,
            openMode: 0,
        },
        testIsolation: true,
        baseUrl: process.env.CYPRESS_BASE_URL,
        eap_home_url: process.env.CYPRESS_EAP_HOME_URL,
        specPattern: ["cypress/EAP e2e Smoke Test/**/*.{js,jsx,ts,tsx}", "cypress/EPI e2e Smoke Test/**/*.{js,jsx,ts,tsx}"],
        excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
    },
    // pageLoadTimeout: 80000
});
