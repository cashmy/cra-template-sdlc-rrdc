/// <reference types="cypress" />

describe("redux-hook.spec.ts", () => {
  before(() => {
    cy.visit("/");
  });

  it("should have counter component", () => {
    cy.get("#counter").should("have.length", 1);
  });

  it("should have normal actions work correctly", () => {
    cy.get("#redux-value").should("have.text", "0");

    cy.get("button").contains("-").click();
    cy.get("#redux-value").should("have.text", "-1");

    cy.get("button").contains("+").click();
    cy.get("#redux-value").should("have.text", "0");

    cy.get("#app-textbox").clear().type("1");
    cy.get("#app-textbox").should("have.value", "1");

    cy.get("button").contains("Add Amount").click();
    cy.get("#redux-value").should("have.text", "1");

    cy.get("button").contains("Add If Odd").click();
    cy.get("#redux-value").should("have.text", "2");
  });

  it("should have async actions work correctly", () => {
    cy.get("#redux-value").should("have.text", "2");

    cy.get("#app-textbox").clear().type("2");
    cy.get("#app-textbox").should("have.value", "2");

    cy.get("button").contains("Add Async").click();
    cy.wait(1250);
    cy.get("#redux-value").should("have.text", "4");
  });
});
