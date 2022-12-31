import { defineConfig } from 'cypress';

export default defineConfig({
    fixturesFolder: 'cypress/fixtures',
    viewportHeight: 1200,
    viewportWidth: 1600,
    projectId: 'someId',
    video: false,
    modifyObstructiveCode: false,
    screenshotsFolder: '../screenshots',
    chromeWebSecurity: true,
    defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
        // implement node event listeners here
    },
    baseUrl: 'https://www.edu.goit.global/pl/account/login',
    loginUsername: 'user888@gmail.com',
    loginPass: '1234567890',
});
