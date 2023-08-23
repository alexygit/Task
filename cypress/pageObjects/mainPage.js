import * as Selectors from "../fixtures/selectors";


class MainPage {
    visit() {
      cy.visit("/");
    }
  
    clickSignUpButton() {
      cy.get(Selectors.SIGN_UP_BUTTON).click();
    }
  }
  
  export default new MainPage();
  