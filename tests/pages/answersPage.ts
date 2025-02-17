import { Page } from 'playwright';
import {expect} from "@playwright/test";
import answers_content from "../content/answersPage_content";
import axeTest from "../accessibilityTestHelper";

class AnswersPage {
    private readonly title: string;
    private readonly summaryText: string;
    private readonly govspeakText: string;

    constructor() {
        this.title = `.govuk-heading-xl`;
        this.summaryText = `.summary`;
        this.govspeakText = `.gem-c-govspeak`;
    }

    async checkPageLoads(page: Page, outcome: keyof typeof answers_content.outcomes): Promise<void> {
        await expect(page.locator(this.title)).toContainText(answers_content.pageTitle);

        const text = answers_content.outcomes[outcome];

        // First try the summary selector for the first e2e test
        const summaryElement = page.locator(this.summaryText);
        if (await summaryElement.count() > 0) {
            await expect(summaryElement).toContainText(text);
        } else {
            // If the summary selector is not found, try the govspeak selector for the first assessment task
            await expect(page.locator(this.govspeakText)).toContainText(text);
        }

        await axeTest(page);
    }
}

export default AnswersPage;