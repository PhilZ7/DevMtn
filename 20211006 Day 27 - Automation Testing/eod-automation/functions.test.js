const { Builder, Capabilities, By } = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit();
})

test('we can add a movie', async () => {
    const addMovieInput = await driver.findElement(By.xpath('//input'))

    await driver.sleep(5000);

    await addMovieInput.sendKeys('James Bond: No time to die');

    await driver.sleep(2000)

    const addMovieBtn = await driver.findElement(By.css('button'))
    await addMovieBtn.click();

    await driver.sleep(3000)

    const movieItem = await driver.findElement(By.css('span'))

    expect(await movieItem.getText()).toContain('James Bond: No time to die') // added the await keyword since using getText() method that comes from selenium
})