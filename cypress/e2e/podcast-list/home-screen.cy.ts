/// <reference types="Cypress" />

describe("Podcast list", () => {
  it("should display cards", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="card"]').should("have.length.above", 1);
  });
});
