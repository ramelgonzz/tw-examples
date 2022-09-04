/// from https://reflect.run/articles/fixing-cypress-cross-origin-errors/
describe("Two different URLs", function () {
    it("Opens URLs", () => {
      cy.visit("First URL");
      cy.contains("Home");
      cy.visit("First URL Subpage"); //Do something on the first domain
      cy.origin("Second URL", () => {
        cy.visit("/login"); //Do something on the second domain; log in as an example
        cy.get("#login_field").type("USERNAME HERE"); //Insert credentials
        cy.get("#password").type("PASSWORD HERE");
        cy.get("input").contains("Log In").click();
      });
    });
  });