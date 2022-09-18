const loginpage = require('./../pageObjects/loginpage.js');

describe('Sample Suite', () => {

    beforeAll( async () => {
        await loginpage.openBrowser('https://www.saucedemo.com/');
    })

    beforeEach( async () => {

    })

    afterAll( async () => {
        await loginpage.driverClose();
    })

    test('Login Test', async () => {

        
        await loginpage.click(loginpage.loginPageObjects.USERNAME_FIELD);
        await loginpage.setText(loginpage.loginPageObjects.USERNAME_FIELD, 'standard_user');

        await loginpage.click(loginpage.loginPageObjects.PASSWORD_FIELD);
        await loginpage.setText(loginpage.loginPageObjects.PASSWORD_FIELD, 'secret_sauce');

        await loginpage.click(loginpage.loginPageObjects.LOGIN_BUTTON);
    })
})
