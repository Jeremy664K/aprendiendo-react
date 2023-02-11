import { test, expect } from "@playwright/test";

const CATAAS_URL = "https://cataas.com";
const LOCALHOST_URL = "http://localhost:5173/";

test("app shows random fact and image", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    const fact = page.getByTestId("fact");
    const image = page.getByTestId("image");

    const factContent = await fact.textContent();
    const imageSrc = await image.getAttribute("src");

    expect(factContent?.length).toBeGreaterThan(0);
    expect(imageSrc?.startsWith(CATAAS_URL)).toBeTruthy();
});
