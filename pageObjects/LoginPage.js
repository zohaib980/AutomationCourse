export class LoginPage{

    login(email, password)
    {
        cy.get("#email").should("exist").type(email); //email
        cy.get("#password").should("exist").type(password); //Password
        cy.get("#loginBtn").should("exist").click(); //Login Button
        cy.get("#navlist").should("exist"); //Validate Navigation list
    }
}