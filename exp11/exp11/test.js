const { Builder, By, until } = require('selenium-webdriver');

async function testForm() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 👇 Use a general local server URL or relative path
    await driver.get('http://localhost:3000');

    // Wait until the form appears
    await driver.wait(until.elementLocated(By.id('name')), 5000);

    // Fill the form fields
    await driver.findElement(By.id('name')).sendKeys('TestUser');
    await driver.findElement(By.id('email')).sendKeys('test@example.com');
    await driver.findElement(By.id('password')).sendKeys('password123');

    // Submit the form
    await driver.findElement(By.css('button[type="submit"]')).click();

    console.log("✅ Form submitted successfully!");
    await new Promise(r => setTimeout(r, 5000));
  } finally {
    await driver.quit();
  }
}

testForm();