const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        await driver.findElement(By.id('username')).sendKeys('testuser');
        await driver.findElement(By.id('email')).sendKeys('testuser@example.com');
        await driver.findElement(By.id('password')).sendKeys('password123');

        await driver.findElement(By.tagName('button')).click();

        await driver.wait(until.elementLocated(By.tagName('body')), 5000);

        let bodyText = await driver.findElement(By.tagName('body')).getText();

        if (bodyText.includes('Registration successful!')) {
            console.log('Test Passed: Registration was successful.');
        } else {
            console.log('Test Failed: Registration was not successful.');
        }

        

    } finally {
        await driver.quit();
    }
}

runTest();
