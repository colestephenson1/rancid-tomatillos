describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/')
    })
  })



  describe('Should take user to single movie page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });


    it('Should be able to render trailer for movie', () => {
        cy.get('[class*=movie-card]').first().click()
        .get('[class*=trailer-link]').click()
        .get('[class*=trailer]').should('have.length', 1)
    })

    it('Should be able to navigate home', () => {
        cy.get('[class*=movie-card]').first().click()
        cy.get('[class*=trailer-link]').click()
        cy.get('[class*="home-link active"]').click()
        cy.get('[class*=movie-card]').should('have.length', 40)
        cy.get('[class*=movie-card]').first()
        .contains('Money Plane')
        cy.get('[class*=movie-card]').last()
        .contains('I Still Believe')
    })

    it('Should be able to get a movie trailer', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
            videos:
                [{
                id: 330,
                movie_id: 694919,
                key: "aETz_dRDEys",
                site: "YouTube",
                type: "Trailer"
                }]
        })
    })

    it('Should be able to return an error on a bad network request', () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/example/videos', {
            error: {
                length: 108,
                name: "error",
                severity: "ERROR",
                code: "22P02",
                file: "numutils.c",
                line: "256",
                routine: "pg_strtoint32"
                }
        })
    })

    })
