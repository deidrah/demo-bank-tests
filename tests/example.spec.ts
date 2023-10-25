import { test, expect } from '@playwright/test';

test('login with correct credentials', async ({ page }) => {
  await page.goto('https://demo-bank.vercel.app/');
  await page.getByTestId('login-input').click();
  await page.getByTestId('login-input').fill('login123');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('hslo1234');
  await page.getByTestId('login-button').click();
  await page.getByTestId('user-name').click();
  await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
});