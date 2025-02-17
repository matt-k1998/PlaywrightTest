import { Page } from "playwright";
import { expect } from "@playwright/test";
import noOfDaysPerShiftPatternPage_content from "../../content/shift-work-content/noOfDaysPerShiftPatternPage_content";
import axeTest from "../../accessibilityTestHelper";

class NoOfDaysPerShiftPatternPage {
  private readonly title: string;
  private readonly text: string;
  private readonly field: string;

  constructor() {
    this.title = `.govuk-label-wrapper`
    this.text = `.govuk-hint`
    this.field = `#response`
  }

  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
        expect(page.locator(this.title)).toHaveText(noOfDaysPerShiftPatternPage_content.pageTitle),
        expect(page.locator(this.text)).toContainText(noOfDaysPerShiftPatternPage_content.hintText),
    ]);
    await axeTest(page);
  }
  
  async continueOn(page: Page): Promise<void> {
    await page.locator(this.field).fill("10");
    await page.getByRole("button", { name: "Continue" }).click();
  }
}

export default NoOfDaysPerShiftPatternPage;
