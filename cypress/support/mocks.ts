Cypress.Commands.add("mockPodcastListService", () => {
  cy.intercept("GET", "**/toppodcasts/limit=100/genre=1310/json", {
    fixture: "podcastList.json",
  });
});
