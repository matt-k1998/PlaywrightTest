import { test } from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";
import NoOfDaysWorkedPage from "./pages/noOfDaysWorkedPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import AnswersPage from "./pages/answersPage";

test(`Full E2E test - happy path`, async ({
  page,
}): Promise<void> => {
  const landingPage: LandingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);

  const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.continueOn(page);

  const holidayEntitlementPage: HolidayEntitlementPage = new HolidayEntitlementPage();
  await holidayEntitlementPage.checkPageLoads(page);
  await holidayEntitlementPage.continueOn(page);

  const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
  await workOutHolidayPage.checkPageLoads(page);
  await workOutHolidayPage.continueOn(page);

  const noOfDaysWorkedPage: NoOfDaysWorkedPage = new NoOfDaysWorkedPage();
  await noOfDaysWorkedPage.checkPageLoads(page);
  await noOfDaysWorkedPage.continueOn(page);

  const answersPage: AnswersPage = new AnswersPage();
  await answersPage.checkPageLoads(page);
});

test(`Test unhappy path`, async ({ page }): Promise<void> => {
  const landingPage: LandingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);
  const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.triggerErrorMessages(page);
});