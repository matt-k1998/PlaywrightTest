import { test } from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import HolidayEntitlementPage from "./pages/holidayEntitlementPage";
import NoOfDaysWorkedPage from "./pages/noOfDaysWorkedPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import AnswersPage from "./pages/answersPage";
import LeaveStartPage from "./pages/leaveStartPage";

test(`Full E2E test - happy path`, async ({
  page,
}): Promise<void> => {
  const landingPage: LandingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);

  const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.continueWithNoSelected(page);

  const holidayEntitlementPage: HolidayEntitlementPage = new HolidayEntitlementPage();
  await holidayEntitlementPage.checkPageLoads(page);
  await holidayEntitlementPage.continueWithDaysWorkedPerWeekSelected(page);

  const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
  await workOutHolidayPage.checkPageLoads(page);
  await workOutHolidayPage.continueWithFullLeaveYearSelected(page);

  const noOfDaysWorkedPage: NoOfDaysWorkedPage = new NoOfDaysWorkedPage();
  await noOfDaysWorkedPage.checkPageLoads(page);
  await noOfDaysWorkedPage.continueOn(page);

  const answersPage: AnswersPage = new AnswersPage();
  await answersPage.checkPageLoads(page, 'standard');
});

test(`Test unhappy path`, async ({ page }): Promise<void> => {
  const landingPage: LandingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);
  const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.triggerErrorMessages(page);
});

test(`First Assessment Task`, async ({ page }): Promise<void> => {
  const landingPage: LandingPage = new LandingPage();
  await landingPage.checkPageLoads(page);
  await landingPage.continueOn(page);

  const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
  await irregularHoursPage.checkPageLoads(page);
  await irregularHoursPage.continueWithYesSelected(page);

  const leaveStartPage: LeaveStartPage = new LeaveStartPage();
  await leaveStartPage.checkPageLoads(page);
  await leaveStartPage.continueOn(page);

  const holidayEntitlementPage: HolidayEntitlementPage = new HolidayEntitlementPage();
  await holidayEntitlementPage.checkPageLoads(page);
  await holidayEntitlementPage.continueWithAnnualisedHoursSelected(page);

  const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
  await workOutHolidayPage.checkPageLoads(page);
  await workOutHolidayPage.continueWithFullLeaveYearSelected(page);

  const answersPage: AnswersPage = new AnswersPage();
  await answersPage.checkPageLoads(page, 'irregularOutcomeOne');
});
