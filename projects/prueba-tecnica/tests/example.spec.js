import { test, expect } from "@playwright/test";

const CATAAS_URL = "https://cataas.com";
const LOCALHOST_URL = "http://localhost:4000/";

test("app shows random fact and image", async ({ page }) => {
    await page.goto(LOCALHOST_URL);

    const text = page.getByRole("paragraph");
    const image = page.getByRole("img");

    const textContent = await text.textContent();
    const imageSrc = await image.getAttribute("src");

    expect(textContent?.length).toBeGreaterThan(0);
    expect(imageSrc?.startsWith(CATAAS_URL)).toBeTruthy();
});
