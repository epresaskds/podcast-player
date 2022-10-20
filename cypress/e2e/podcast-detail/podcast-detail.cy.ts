/// <reference types="Cypress" />

describe("Podcast detail", () => {
  it("should display cards", () => {
    cy.visit(`http://localhost:3000/`);
    cy.get('[data-testid="card"]').first().click();
    cy.wait(3000);
    cy.get('[data-testid="episode-list"] li').should("have.length", 50);
  });
  it("should go to episode", () => {
    cy.visit(`http://localhost:3000/`);
    cy.get('[data-testid="card"]').first().click();
    cy.wait(3000);
    cy.get('[data-testid="episode-list"] li > span > a').first().click();
    cy.wait(3000);
    cy.get('[data-testid="episode-card"]').should("exist");
  });
});
