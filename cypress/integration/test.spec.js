describe('Integration', function() {
    it('Should select active film', function() {
        cy.visit('http://localhost:8080')

        cy.get('.film-list__item').first().click()
        cy.get('.info__title').should('contain', 'NAME 0')
        cy.get('.info__description').first().should('contain', 'GENRE 0')
        cy.get('.info__date').should('contain', '1990')
        cy.get('.info__timeline').should('contain', '143')
    })
})