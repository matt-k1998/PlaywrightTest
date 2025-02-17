import { Page } from "playwright";
import { expect } from "@playwright/test";
import noOfDaysWorkedPage_content from "../content/noOfDaysWorkedPage_content";
import axeTest from "../accessibilityTestHelper";

class NoOfDaysWorkedPage {
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
        expect(page.locator(this.title)).toHaveText(noOfDaysWorkedPage_content.pageTitle),
        expect(page.locator(this.text)).toContainText(noOfDaysWorkedPage_content.divText),
    ]);
    await axeTest(page);
  }
  
  async continueOn(page: Page): Promise<void> {
    await page.locator(this.field).fill("5");
    await page.getByRole("button", { name: "Continue" }).click();
  }
}

export default NoOfDaysWorkedPage;
