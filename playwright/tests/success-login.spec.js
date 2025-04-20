// Success login test

const { test, expect } = require("@playwright/test");

// Import the variable from user.js
import { USER_EMAIL } from '../user.js';
import { USER_PASSWORD } from '../user.js';
import { PROFILE_NUMBER } from '../user.js';

test("test success login", async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Input email
  await page.getByPlaceholder("Email").fill(USER_EMAIL);
  // Input password
  await page.getByPlaceholder("Пароль").fill(USER_PASSWORD);
  // Click submit
  await page.locator('button:text("Войти")').click();

  // Check that we login
  await expect(page).toHaveURL("https://netology.ru/profile/" + PROFILE_NUMBER);

// Locate the h2 element and get its text conten
const h2Text = await page.locator("h2").textContent();
  // Assert the text of the h2 element
  expect(h2Text).toContain("Моё обучение");
});