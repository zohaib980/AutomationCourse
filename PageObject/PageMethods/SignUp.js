const signUpPageLocators = require('../PageElements/SignUp.json')

export class registerMethods{

    SignUPFlow(){
        cy.get(signUpPageLocators.HomePageLocators.signUP_Tab).click()
        cy.get(signUpPageLocators.SignUpPageLocators.gender_radioButton).check().should('be.checked')
        cy.get(signUpPageLocators.SignUpPageLocators.first_name).type("Iqra").should('have.value','Iqra')
        cy.get("#LastName").type("Rafiq").should('have.value','Rafiq')
    }
    EnterPassword(){
        cy.get("#Password").type("Kuchtologkehygy@786")//.should('have.value','Kuchtologkehygy@786"')
        cy.get("#ConfirmPassword").type("Kuchtologkehygy@786")//.should('have.value','Kuchtologkehygy@786"')
        cy.get("#register-button").click()
    }

    RegisterwithValidCredentials(){
        this.SignUPFlow()
        ///cy.get("select[name='DateOfBirthDay']").contain("20").select()
        // Enter email
        function generateUserName() {
            let text = "";
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
            for (let i = 0; i < 10; i++)
            text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
            return text;
        }
        const generatedUserName = generateUserName()
        cy.get('#Email')
            .type(generatedUserName + '@mailinator.com') 
        this.EnterPassword()
        cy.get('.result').should('contain', 'Your registration completed')
        cy.get('.buttons > .button-1').click()
    }
    RegisterwithInValidEmail(){
        this.SignUPFlow()
        cy.get('#Email')
        .type('tester1mailinator.com') 
        this.EnterPassword()
        cy.get('#Email-error').should('contain', 'Wrong email')
    }
}