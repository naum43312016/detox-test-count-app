describe('Example', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    beforeEach(async () => {
      await device.reloadReactNative();
    });
  
    it('Counter screen button should be visible', async () => {
        await expect(element(by.id('counterBtn'))).toBeVisible();
    });

    it('Home text should be visible', async () => {
        await expect(element(by.text('Home Screen'))).toBeVisible();
    });

});