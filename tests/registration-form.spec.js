const { test, expect } = require('@playwright/test');

test('requires the mandatory details before continuing registration', async ({ page }) => {
  await page.goto('https://afpiwb.in/registration-form');

  // Fill in the mandatory details
 await page.getByLabel('Are you a member of AFPI? *', { exact: true }).selectOption('No');
 await expect(page.locator('span').filter({ hasText: 'Registering under For Non-Members' })).toBeVisible();
await page.locator('#name').fill('John Doe');
await page.locator('#email').fill('test@gmail.com');
await page.locator('#mobile_number').fill('1234567890');
await page.locator("input[value='Female']").click();
await page.getByLabel('Date of Birth *').fill('1990-04-01');
await page.getByRole('button', { name: 'Next: Professional Details' }).click();
//Proceed to the next step and fill in the professional details
await page.getByLabel('Are you a student? *', { exact: true }).selectOption('No');
await page.locator('#qualifications:visible').fill('MBBS');
await page.getByRole('textbox', { name: 'Designation / Affiliation *' }).fill('Cardiology'); 
await page.locator('#state_district:visible').fill('West Bengal - Kolkata'); 
await page.locator('button').filter({ hasText: 'Next: AFPI Membership →' }).click();

// Proceed to the next step and fill in the AFPI membership details

await page.getByRole('textbox', { name: 'Medical Council Registration No.' }).fill('20251231');
await page.locator("input[value='Yes'][name='want_membership']").click();
//await page.locator('[name="want_membership"]').selectOption('Yes');
await page.locator('button').filter({ hasText: 'Next: Registration & Payment →' }).click();

// Proceed to the next step and fill in the registration and payment details
await page.getByLabel('Non-veg').click();
await page.locator('[name="submitting_abstract"]').selectOption('No');
await page.getByRole('button', { name: 'Submit Registration' }).click();
});