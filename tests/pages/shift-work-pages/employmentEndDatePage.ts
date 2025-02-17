import { Page } from "playwright";
import { expect } from "@playwright/test";
import employmentEndDatePage_content from "../../content/shift-work-content/employmentEndDatePage_content";
import axeTest from "../../accessibilityTestHelper";

class EmploymentEndDatePage {
    private readonly title: string;
    private readonly dayField: string;
    private readonly monthField: string;
    private readonly yearField: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.dayField = `#response-0`;
        this.monthField = `#response-1`;
        this.yearField = `#response-2`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(employmentEndDatePage_content.pageTitle),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.dayField).fill("1");
        await page.locator(this.monthField).fill("12");
        await page.locator(this.yearField).fill("2020");
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default EmploymentEndDatePage;
