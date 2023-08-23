import * as Selectors from "../fixtures/selectors";


class SubscriptionPage {
    verifyUrl() {
        cy.url().should('eq', 'https://www.abcmouse.com/abc/subscription/');
      }
  
    findText() {
        cy.contains('Become a Member!');
    }
  }
  
  export default new SubscriptionPage();
  