import { Page } from "playwright";
import { expect } from "@playwright/test";
import holidayEntitlementPage_content from "../content/holidayEntitlementPage_content";
import axeTest from "../accessibilityTestHelper";

class HolidayEntitlementPage {
  private readonly title: string;
  private readonly text: string;
  private readonly radioText1: string;
  private readonly radioText2: string;
  private readonly radioText3: string;
  private readonly radioText4: string;
  private readonly radioText5: string;

  constructor() {
    this.title = `.govuk-fieldset__heading`;
    this.text = `.gem-c-hint`;
    this.radioText1 = `label[for="response-0"]`;
    this.radioText2 = `label[for="response-1"]`;
    this.radioText3 = `label[for="response-2"]`;
    this.radioText4 = `label[for="response-3"]`;
    this.radioText5 = `label[for="response-4"]`;
  }

  async checkPageLoads(page: Page): Promise<void> {
    await Promise.all([
      expect(page.locator(this.title)).toContainText(holidayEntitlementPage_content.pageTitle),
      expect(page.locator(this.text)).toContainText(holidayEntitlementPage_content.divText),
      expect(page.locator(this.radioText1)).toContainText(holidayEntitlementPage_content.radioText1),
      expect(page.locator(this.radioText2)).toContainText(holidayEntitlementPage_content.radioText2),
      expect(page.locator(this.radioText3)).toContainText(holidayEntitlementPage_content.radioText3),
      expect(page.locator(this.radioText4)).toContainText(holidayEntitlementPage_content.radioText4),
      expect(page.locator(this.radioText5)).toContainText(holidayEntitlementPage_content.radioText5),
    ]);
    await axeTest(page);
  }
  
  async continueWithDaysWorkedPerWeekSelected(page: Page): Promise<void> {
    await page.click('label[for="response-0"]');
    await page.getByRole("button", { name: "Continue" }).click();
  }

  async continueWithHoursWorkedPerWeekSelected(page: Page): Promise<void> {
    await page.click('label[for="response-1"]');
    await page.getByRole("button", { name: "Continue" }).click();
  }

  async continueWithAnnualisedHoursSelected(page: Page): Promise<void> {
    await page.click('label[for="response-2"]');
    await page.getByRole("button", { name: "Continue" }).click();
  }

  async continueWithCompressedHoursSelected(page: Page): Promise<void> {
    await page.click('label[for="response-3"]');
    await page.getByRole("button", { name: "Continue" }).click();
  }

  async continueWithShiftsSelected(page: Page): Promise<void> {
    await page.click('label[for="response-4"]');
    await page.getByRole("button", { name: "Continue" }).click();
  }
}

export default HolidayEntitlementPage;
