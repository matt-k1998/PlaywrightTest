import { Page } from "playwright";
import { expect } from "@playwright/test";
import noOfHoursPerShiftPage_content from "../../content/shift-work-content/noOfHoursPerShiftPage_content";
import axeTest from "../../accessibilityTestHelper";

class NoOfHoursPerShiftPage {
  private readonly title: string;
  private readonly field: string;

  constructor() {
    this.title = `.govuk-label-wrapper`
    this.field = `#response`
  }

  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
        expect(page.locator(this.title)).toHaveText(noOfHoursPerShiftPage_content.pageTitle),
    ]);
    await axeTest(page);
  }
  
  async continueOn(page: Page): Promise<void> {
    await page.locator(this.field).fill("8");
    await page.getByRole("button", { name: "Continue" }).click();
  }
}

export default NoOfHoursPerShiftPage;
