///<reference types="Cypress"/>

import { loginMethods } from "../../PageObject/PageMethods/Login"

const Login_Methods = new loginMethods

describe("Create, Edit, Delete and Restore Tasks", () => {
    beforeEach( () => {
        cy.visit('https://master.chargeautomation.com/')
    })

    it("Validate user is able to login with valid Credientials", () => {
        Login_Methods.loginWithValiCredientials()
    })
    it('Validate user is able to login with invalid Credientials', () => {
        Login_Methods.loginWithInvalidCredientials()
    })
    it('Valide user is able to login with invalid Email', () => {
        Login_Methods.loginWithInvalidEmail()
    })
})