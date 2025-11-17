const { Builder, By, Key, until } = require('selenium-webdriver'); 

async function testGoogleSearch() {
    // Step 1: Launch Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Step 2: Open Google
        await driver.get('https://www.google.com');

        // Step 3: Search for "Selenium WebDriver"
        await driver.findElement(By.name('q'))
            .sendKeys('Selenium WebDriver', Key.RETURN);

        // Step 4: Wait for page title to update
        await driver.wait(until.titleContains('Selenium WebDriver'), 5000);

        // Step 5: Print the title
        let title = await driver.getTitle();
        console.log("Page Title:", title);

        // Step 6: Verify the result
        if (title.includes("Selenium WebDriver")) {
            console.log("Test Passed: Search results loaded successfully.");
        } else {
            console.log("Test Failed: Search results not loaded.");
        }

    } catch (error) {
        console.error("Error:", error);
    } finally {
        // Step 7: Close browser
        await driver.quit();
    }
}

testGoogleSearch();
