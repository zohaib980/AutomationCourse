/// <reference types="Cypress" />
 
describe('Checkbox Functionality',function(){
 
    it('Handling different Check boxes',function(){
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force: true}).should('be.checked')
        cy.get('#checkbox-v-2c').should('not.be.checked').check({force: true}).should('be.checked')
    })
   it('Handling Check Boxes Conditionally', () => {
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')
        // //It will uncheck the checkbox if it is already Checked
        // cy.get("input[name='checkbox-0 ']").then(checkbox => {
        //     if(checkbox.is(':checked')){
        //         cy.get("input[name='checkbox-0 ']").uncheck({force: true})
        //         cy.log('Checkbox is not checked')
        //     }
        // })
        // //  cy.log('Duplicate')
        // cy.log('Working on Else')
        // cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(7) > a:nth-child(1)').should('contain', 'View Source').click({force: true})
   })
})
