import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

// NEW TESTS

// test('An X shows in the bottom-left block', async () => {
    
//     let button = await (await driver).findElement(By.id('cell-6'));
//     await button.click();
//     await driver.sleep(1000);
//     expect(button).not.toContain('O');
    
// });

// test('An X shows in the bottom-right block', async () => {
    
//     let button = await (await driver).findElement(By.id('cell-8'));
//     await button.click();
//     await driver.sleep(1000);
//     expect(button).not.toContain('O');
    
// });


// test('Check if O plays after X', async () => {
//     await checkBlock(6)
//     let aiBlock = await driver.findElement(By.xpath('//td[text()="O" or text()="o"]'));

//     expect(aiBlock).toContain('O');
// })

const checkSquare = async (cellIndex) => {
    let square = await driver.findElement(By.id(`cell-${cellIndex}`))
    await square.click();

    let text = await square.getText()

    expect(text).toBe('X')
    await driver.sleep(1000)
}

test('X on top left', async () => {
    let square = await driver.findElement(By.id('cell-0'))

    await square.click();
    
    let text = await square.getText()

    expect(text).toBe('X')
    await driver.sleep(1000)
});

test('X on top left', async () => {
    let square = await driver.findElement(By.id('cell-4'))

    await square.click();
    
    let text = await square.getText()

    expect(text).toBe('X')
    await driver.sleep(1000)
});

test('X on top left', async () => {
    let square = await driver.findElement(By.id('cell-8'))

    await square.click();
    
    let text = await square.getText()

    expect(text).toBe('X')
    await driver.sleep(1000)
});

test('Check winner', async () => {
    const displayText = await driver.findElement(By.xpath('//h1')).getText()
    console.log(displayText)

    expect(displayText).toBe('X won')
    await driver.sleep(1000)
})