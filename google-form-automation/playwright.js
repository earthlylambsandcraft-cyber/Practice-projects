const { chromium } = require("playwright");
const fs = require("fs");
const axios = require("axios");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000
  });
  const page = await browser.newPage();

  await page.goto(
    "https://docs.google.com/forms/d/e/1FAIpQLSeU3Cn0eW9aVJZlA2wSRg_KFuU8VPVeJ7OsXtZE-uKP2kNwzw/viewform?pli=1",
    { waitUntil: "domcontentloaded", timeout: 40000 },
  );

  //time inputs

  //check-in

  await page.getByLabel("Hour").nth(0).fill("02");
  await page.getByLabel("Minute").nth(0).fill("00");
  await page.locator('[role="listbox"]').nth(0).click();
  await page.getByRole("option" , {name: "PM" }).nth(0).click();
  

  //Check-out

  await page.getByLabel("Hour").nth(1).fill("11");
  await page.getByLabel("Minute").nth(1).fill("00");
  await page.locator('[role="listbox"]').nth(1).click();
  await page.getByRole("option", { name: "PM" }).nth(1).click();

  //Date

  await page.locator('input[type="date"]').nth(0).fill(new Date().toISOString().split('T')[0]);

  //Full Name

  await page.getByLabel("AGENT'S FULL NAME").fill("Tedor, Ethan Jade M.");

  //CheckBox TLs

  await page.getByText("Charyl D. Diatras").click();
  await page.getByText("Henie Alvarez").click();

  //Campaign

  await page.getByText("DNO Manual Software Tester").click();

  //Site Location (Dropdown Menu)


  await page.locator('[role="listbox"]').nth(2).click();
  await page.getByRole("option", { name: "Gensan Site" }).click();
  
  //Complete Station

  await page.getByLabel("Complete Station No.").fill("4th Floor - M8");

  //Station Issues

  await page.getByText("No issues observed").click();

  //Disclosure (Dropdown Menu)

  await page.locator('[role="listbox"]').nth(3).click();
  await page.getByRole("option", { name : "Yes" }).nth(0).click();

  //Submission Button
  await page.getByRole("button", { name: "Submit" }).click();

  //Wait Post-Submission
  await page.waitForSelector("text=Your response has been recorded");

  //Snapshot Proof
  await page.screenshot({ path: "C:/Users/dnoqa-agent/Desktop/PracticeMakesPerfect/submissions/submission.png", fullPage: true });

  await browser.close();
})();
