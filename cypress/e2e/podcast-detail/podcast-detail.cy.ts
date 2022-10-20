/// <reference types="Cypress" />

describe("Podcast detail", () => {
  it("should display cards", () => {
    cy.visit(`http://localhost:3001/podcast/1001659715`);
    cy.get('[data-testid="episode-list"] li').should("have.length", 50);
  });
});
