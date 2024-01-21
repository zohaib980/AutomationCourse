/// <reference types="Cypress" />
 
describe('Table Functionality',function(){
    
    it('Web Table Handling',function(){
        cy.visit('https://the-internet.herokuapp.com/tables')
        // 1. Check value present anywhere in the table.
        cy.get('#table1').contains('td', 'http://www.frank.com').should('be.visible')
 
        // 2. Check value based on specific row and column
        cy.get('#table1>tbody>tr:nth-child(1)>td:nth-child(3)').contains('td', 'jsmith@gmail.com').should('be.visible')
 
        // 3. Check value based on Conditions
        cy.get('#table1>tbody>tr:nth-child(2)').each(($ele, index, $list) => {
            const fName = $ele.text()
            if(fName.includes('Frank')){
                cy.get('#table1>tbody>tr>td:nth-child(2)').then(function($name){
                    const firstName = $name.text()
                    expect(firstName).to.contain('Frank')
                })
            }
        })
    })
})