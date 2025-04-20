// Not success login test

const { test, expect } = require("@playwright/test");

// Init invalid data
const INVALID_EMAIL = "invalid@email.com";
const INVALID_PASSWORD = "invalid";

test("test not success login", async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Input email
  await page.getByPlaceholder("Email").fill(INVALID_EMAIL);
  // Input password
  await page.getByPlaceholder("Пароль").fill(INVALID_PASSWORD);
  // Click submit
  await page.locator('button:text("Войти")').click();

  // Locate the error element and get its text conten
  const errorText = page.locator('[data-testid="login-error-hint"]');
  await expect(errorText).toBeVisible();
});