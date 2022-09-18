const {Builder, By, Key, util} = require('selenium-webdriver'); 
const edge = require('selenium-webdriver/edge');

const path = require('path');
const absolutePath = path.resolve('drivers');

const edgePath = `${absolutePath}\\edgedriver_win32\\msedgedriver.exe`;

let driver;

module.exports = {

    //objects
    loginPageObjects: {
        USERNAME_FIELD: 'user-name',
        PASSWORD_FIELD: 'password',
        LOGIN_BUTTON: 'login-button'
    },

    openBrowser : async (url) => {
        initialize();
    
        await driver.get(url);
        await driver.manage()
                    .window()
                    .maximize();
    },

    /**
     * 
     * @param {*} objToClick 
     */
    click : async (objLocator) => {
        await driver.sleep(500);
        try {
            const clickEvt = await driver.findElement(By.id(objLocator));
            await clickEvt.click();
        }
        catch(error) {
            console.log(error);
        }
    },

    /**
     * 
     * @param {*} fieldToFill 
     * @param {*} text 
     */
    setText : async (objLocator, text) => {
        await driver.sleep(500);
        try {

            const input = await driver.findElement(By.id(objLocator));
            await input.sendKeys(text);
        }
        catch(error) {
            console.log(error);
        }
    },

    performValidLogin : async () => {
        
    },

    driverClose : async () => {
        await driver.sleep(4000);
        await driver.close();
    }
},

initialize = async () => {

    const options = new edge.Options();
    options.addArguments('inprivate');
    const service = new edge.ServiceBuilder(edgePath).build();

    driver = edge.Driver.createSession(options, service);
    await driver.manage().setTimeouts({ implicit : 60000 });

    // return driver;
}
