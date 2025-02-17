import { Page } from "playwright";
import { expect } from "@playwright/test";
import noOfShiftsPerShiftPatternPage_content from "../../content/shift-work-content/noOfShiftsPerShiftPatternPage_content";
import axeTest from "../../accessibilityTestHelper";

class NoOfShiftsPerShiftPatternPage {
  private readonly title: string;
  private readonly field: string;

  constructor() {
    this.title = `.govuk-label-wrapper`
    this.field = `#response`
  }

  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
        expect(page.locator(this.title)).toHaveText(noOfShiftsPerShiftPatternPage_content.pageTitle),
    ]);
    await axeTest(page);
  }
  
  async continueOn(page: Page): Promise<void> {
    await page.locator(this.field).fill("10");
    await page.getByRole("button", { name: "Continue" }).click();
  }
}

export default NoOfShiftsPerShiftPatternPage;
