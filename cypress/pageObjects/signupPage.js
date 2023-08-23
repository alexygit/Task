import * as Selectors from "../fixtures/selectors";

class SignupPage {
    fillEmail(email) {
        cy.get(Selectors.EMAIL_FIELD).type(email);
    }
  
    clickSubmitButton() {
        cy.get(Selectors.SUBMIT_BUTTON).click();
    }
  
    verifyUrl() {
      cy.url().should('eq', 'https://www.abcmouse.com/abc/prospect-register/');
    }
  }
  
  export default new SignupPage();
  