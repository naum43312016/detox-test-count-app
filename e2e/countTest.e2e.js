describe('Counter screen test', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.id('counterBtn')).tap();
    });
  
    it('Button Increase should be visible', async () => {
        await expect(element(by.id('increaseBtn'))).toBeVisible();
    });

    it('Button Decrease should be visible', async () => {
        await expect(element(by.id('decreaseBtn'))).toBeVisible();
    });

    it('Count text should be 0', async () => {
        await expect(element(by.id('countText'))).toHaveText("0")
    });
  
    it('Increase button functionality', async () => {
        await expect(element(by.id('countText'))).toHaveText("0")
        await element(by.id('increaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("1")
        await element(by.id('increaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("2")
        await element(by.id('increaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("3")
    });

    it("Decrease button when count text is 0", async () => {
        await expect(element(by.id('countText'))).toHaveText("0")
        await element(by.id('decreaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("0")
    })

    it('Increase and Decrease buttons combain functionality', async () => {
        await expect(element(by.id('countText'))).toHaveText("0")
        await element(by.id('increaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("1")
        await element(by.id('increaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("2")
        await element(by.id('decreaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("1")
        await element(by.id('increaseBtn')).tap();
        await expect(element(by.id('countText'))).toHaveText("2")
    });
});