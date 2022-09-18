const loginpage = require('./../pageObjects/loginpage.js');



describe('Sample Suite', () => {

    const { USERNAME_FIELD, PASSWORD_FIELD, LOGIN_BUTTON } = loginpage.loginPageObjects

    beforeAll( async () => {
        await loginpage.openBrowser('https://www.saucedemo.com/');
    })

    beforeEach( async () => {

    })

    afterAll( async () => {
        await loginpage.driverClose();
    })

    test('Login Test', async () => {

        await loginpage.click(USERNAME_FIELD);
        await loginpage.setText(USERNAME_FIELD, 'standard_user');
        const usernameFieldVal = await loginpage.getAttribute(USERNAME_FIELD, 'value');
        console.log(usernameFieldVal);

        await loginpage.click(PASSWORD_FIELD);
        await loginpage.setText(PASSWORD_FIELD, 'secret_sauce');

        await loginpage.click(LOGIN_BUTTON);
    })
})
