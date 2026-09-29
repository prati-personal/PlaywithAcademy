# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration-form.spec.js >> requires the mandatory details before continuing registration
- Location: tests\registration-form.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Error: strict mode violation: locator('[name="submitting_abstract"]') resolved to 2 elements:
    1) <input value="Yes" required="" type="radio" name="submitting_abstract"/> aka getByRole('radio', { name: 'Yes' })
    2) <input value="No" required="" type="radio" name="submitting_abstract"/> aka getByRole('radio', { name: 'No', exact: true })

Call log:
  - waiting for locator('[name="submitting_abstract"]')

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('requires the mandatory details before continuing registration', async ({ page }) => {
  4  |   await page.goto('https://afpiwb.in/registration-form');
  5  | 
  6  |   // Fill in the mandatory details
  7  |  await page.getByLabel('Are you a member of AFPI? *', { exact: true }).selectOption('No');
  8  |  await expect(page.locator('span').filter({ hasText: 'Registering under For Non-Members' })).toBeVisible();
  9  | await page.locator('#name').fill('John Doe');
  10 | await page.locator('#email').fill('test@gmail.com');
  11 | await page.locator('#mobile_number').fill('1234567890');
  12 | await page.locator("input[value='Female']").click();
  13 | await page.getByLabel('Date of Birth *').fill('1990-04-01');
  14 | await page.getByRole('button', { name: 'Next: Professional Details' }).click();
  15 | //Proceed to the next step and fill in the professional details
  16 | await page.getByLabel('Are you a student? *', { exact: true }).selectOption('No');
  17 | await page.locator('#qualifications:visible').fill('MBBS');
  18 | await page.getByRole('textbox', { name: 'Designation / Affiliation *' }).fill('Cardiology'); 
  19 | await page.locator('#state_district:visible').fill('West Bengal - Kolkata'); 
  20 | await page.locator('button').filter({ hasText: 'Next: AFPI Membership →' }).click();
  21 | 
  22 | // Proceed to the next step and fill in the AFPI membership details
  23 | 
  24 | await page.getByRole('textbox', { name: 'Medical Council Registration No.' }).fill('20251231');
  25 | await page.locator("input[value='Yes'][name='want_membership']").click();
  26 | //await page.locator('[name="want_membership"]').selectOption('Yes');
  27 | await page.locator('button').filter({ hasText: 'Next: Registration & Payment →' }).click();
  28 | 
  29 | // Proceed to the next step and fill in the registration and payment details
  30 | await page.getByLabel('Non-veg').click();
> 31 | await page.locator('[name="submitting_abstract"]').selectOption('No');
     |                                                    ^ Error: locator.selectOption: Error: strict mode violation: locator('[name="submitting_abstract"]') resolved to 2 elements:
  32 | await page.getByRole('button', { name: 'Submit Registration' }).click();
  33 | });
```