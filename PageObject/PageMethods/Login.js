
export class loginMethods{
    loginFlow(email, password){
        cy.get("a[href='https://master.chargeautomation.com/login']").click()
        cy.get('.signup-upper > p').should('have.text', 'Welcome back to ChargeAutomation')
        cy.get("input[name='email']").type(email)
        cy.get("input[name='password']").type(password, { force: true })
        cy.get("#loginbtn").click({force: true })
    }

    loginWithValiCredientials(){
        this.loginFlow('waqasmanual@mailinator.com', 'Boring321')
        cy.get('.page-title').should('have.text', 'Welcome Waqas')
        cy.url().should('include', '/dashboard-new')
    }

    loginWithInvalidCredientials(){
        this.loginFlow('waqasmanual@mailinator.com', 'Boring32')
        cy.get('.invalid-feedback > span').should('contain', 'These credentials do not match our records.')
    }
   
    loginWithInvalidEmail(){
        this.loginFlow('waqasmanualmailinator.com', 'Boring32')
        cy.get('.invalid-feedback > span').should('contain', 'The email must be a valid email address.')
    }
}