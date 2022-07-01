
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays div with id="choices"', async () => {
    await driver.findElement(By.id('draw')).click();

    await driver.findElement(By.className('bot-btn')).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})

test('Rmoved from Duo button puts selection back into choices', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.className('bot-btn')).click()
    const sectionCount = []
    const getSectionCount = await driver.findElements(By.xpath('//section/div/h3'))
    getSectionCount.map((el) => sectionCount.push(el))
    console.log(sectionCount)
    console.log(getSectionCount)
    
    
    // const displayed = await playerDuo.isDisplayed()
    // expect(displayed).toBe(true)
})

