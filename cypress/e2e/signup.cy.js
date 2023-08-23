// signup.cy.js

import { generateRandomEmail, generateRandomPassword } from "../generator/utils.js";
import MainPage from "../pageObjects/mainPage"; // Import MainPage object
import SignupPage from "../pageObjects/signupPage"; // Import SignupPage object
import SubscriptionPage from "../pageObjects/subscriptionPage.js";


describe("Subscription Test", () => {
  before(() => {
    cy.loadTestData();
  });

  it("Sign up a new user and verify redirection", () => {
    const randomEmail = generateRandomEmail();
    cy.clearCookies()

    MainPage.visit();
    MainPage.clickSignUpButton();

    SignupPage.verifyUrl();
    SignupPage.fillEmail(randomEmail);
    SignupPage.clickSubmitButton();

    SubscriptionPage.verifyUrl();
    SubscriptionPage.findText();
    
    const newData = {
      email: randomEmail
    };
    cy.writeFile("cypress/fixtures/testdata.json", JSON.stringify(newData, null, 2));
  });
});
