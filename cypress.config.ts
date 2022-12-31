import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        fixturesFolder: 'cypress/fixtures',
        supportFile: 'cypress/support',
        viewportHeight: 1200,
        viewportWidth: 1600,
        projectId: 'someId',
        video: false,
        modifyObstructiveCode: false,
        screenshotsFolder: '../screenshots',
        chromeWebSecurity: true,
        defaultCommandTimeout: 15000,
        baseUrl: 'https://www.edu.goit.global/pl/account/login',
        env: {
            loginUsername: 'user888@gmail.com',
            loginPass: '1234567890',
        },
    },
});
