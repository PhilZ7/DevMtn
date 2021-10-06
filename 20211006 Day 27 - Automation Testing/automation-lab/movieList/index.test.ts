import { Builder, Capabilities, By } from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// const { } = require('./index')

beforeAll(async () => {
    await driver.get('http://localhost:5500/index.html')
})


afterAll(async () => {
    await driver.quit()
});

test('add movie to list', async () => {
    let inputField = await driver.findElement(By.id('input-field'))
    let button = await driver.findElement(By.id('button'))

    await driver.sleep(2000)
    await inputField.sendKeys('Free Guy\n')
    await driver.sleep(2000)
    // await button.click()
    await driver.sleep(3000)
    
})

test('delete movie from list', async () => {
    let deleteBtn = await driver.findElement(By.id('FreeGuy'))

    await deleteBtn.click()
    await driver.sleep(3000)
})

// test('crossing off a movie', async () => {
//     let crossOff = await driver.findElement(By.xpath("//*[text()='Free Guy']"))

//     await crossOff.click()
//     await driver.sleep(3000)
// })

test('does the message say what its supposed to', async () => {
    let contains = await driver.findElement(By.xpath("//*[contains(text(), 'deleted')]"))

    await contains.getText().then(function () {
        console.log('it says deleted')
    })
    await driver.sleep(3000)
})


