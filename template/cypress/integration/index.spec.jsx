/// <reference types="cypress" />

describe("index.spec.ts", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have app component", () => {
    cy.get("#app").should("have.length", 1);
  });

  it("should have 'Learn React' anchor", () => {
    cy.get("a#learn-react-anchor")
      .should("have.length", 1)
      .should("have.text", "Learn React");
  });
});
