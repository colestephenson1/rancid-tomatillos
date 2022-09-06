describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
    })
  })

describe('Should take user to single movie page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });

    it('Should render single movie with all individual information', () => {
        cy.get('[class*=movie-card]').first().click()
        .get('[class*=movie-details]')
        .contains('Money Plane')
        .get('[class*=movie-details]')
        .contains('Average Rating: 6.88')
        .get('[class*=movie-details]')
        .contains('Release Date: 2020-09-29')
    })

    it('Should be able click link to go home', () => {
        cy.get('[class*=movie-card]').first().click()
        cy.get('[class*="home-link active"]').click()
        cy.get('[class*=movie-card]').should('have.length', 40)
        cy.get('[class*=movie-card]').first()
        .contains('Money Plane')
        cy.get('[class*=movie-card]').last()
        .contains('I Still Believe')
    })
})
