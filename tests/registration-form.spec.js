const { test, expect } = require('@playwright/test');

test('requires the mandatory details before continuing registration', async ({ page }) => {
  await page.goto('https://afpiwb.in/registration-form');

  await expect(page.getByRole('heading', { name: 'Membership & Personal Details' })).toBeVisible();
  await page.getByRole('button', { name: 'Next: Professional Details' }).click();

  await expect(page.getByText('Select whether you are an AFPI WB member.')).toBeVisible();
  //await page.locator("//*[@id='is_member']/option[2]").click(); 
 await page.getByLabel('Are you a member of AFPI? *', { exact: true }).selectOption('Yes');
});