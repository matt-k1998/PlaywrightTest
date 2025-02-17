import { Page } from "playwright";
import { expect } from "@playwright/test";
import leaveStartPage_content from "../content/leaveStartPage_content";
import axeTest from "../accessibilityTestHelper";

class LeaveStartPage {
    private readonly title: string;
    private readonly text: string;
    private readonly dayField: string;
    private readonly monthField: string;
    private readonly yearField: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`;
        this.text = `.govuk-hint`;
        this.dayField = `#response-0`;
        this.monthField = `#response-1`;
        this.yearField = `#response-2`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(leaveStartPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(leaveStartPage_content.divText),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.dayField).fill("1");
        await page.locator(this.monthField).fill("1");
        await page.locator(this.yearField).fill("2020");
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default LeaveStartPage;
