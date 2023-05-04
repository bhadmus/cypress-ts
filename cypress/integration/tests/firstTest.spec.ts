describe('testing Typescript', ()=>{
    it('test visit', ()=>{
        cy.visit('/')
        cy.injectAxe()
        cy.checkA11y()
    })
})