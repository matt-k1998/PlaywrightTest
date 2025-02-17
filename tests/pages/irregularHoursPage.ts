import { Page } from "playwright";
import { expect } from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";
import axeTest from "../accessibilityTestHelper";
class irregularHoursPage {
  private readonly title: string;
  private readonly text: string;
  private readonly title2: string;
  private readonly radioYes: string;
  private readonly radioNo: string;
  private readonly errorBanner: string;
  private readonly errorMessage: string;

  constructor() {
    this.title = `.govuk-fieldset__heading`;
    this.title2 = `.govuk-caption-l`;
    this.text = `.gem-c-hint`;
    this.radioYes = `label[for="response-0"]`;
    this.radioNo = `label[for="response-1"]`;
    this.errorBanner = `.govuk-error-summary__title`;
    this.errorMessage = `.govuk-error-message`;
  }

  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
      expect(page.locator(this.title)).toContainText(irregularHoursPage_content.pageTitle),
      expect(page.locator(this.text)).toContainText(irregularHoursPage_content.pText1),
      expect(page.locator(this.title2)).toContainText(irregularHoursPage_content.spanText),
      expect(page.locator(this.radioYes)).toContainText(irregularHoursPage_content.radioYes),
      expect(page.locator(this.radioNo)).toContainText(irregularHoursPage_content.radioNo),
    ]);
    await axeTest(page);
  }

  async continueOn(page: Page): Promise<void> {
    // Select the No radio button
    await page.click('label[for="response-1"]');
    // Click the continue button
    await page.getByRole("button", { name: "Continue" }).click();
  }

  async triggerErrorMessages(page: Page): Promise<void> {
    await page.getByRole("button", { name: "Continue" }).click();
    await Promise.all([
        expect(page.locator(this.errorBanner)).toHaveText(irregularHoursPage_content.errorBanner),
        expect(page.locator(this.errorMessage)).toContainText(irregularHoursPage_content.errorMessage),
    ]);
}
}

export default irregularHoursPage;
