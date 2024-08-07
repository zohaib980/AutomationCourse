import { registerMethods } from "../../PageObject/PageMethods/SignUp"

const Register_Methods = new registerMethods


describe("Registeration",()=>{
    beforeEach(()=>{

        cy.visit("https://demo.nopcommerce.com/")
    })

    xit("Register with valid way", ()=>{
        Register_Methods.RegisterwithValidCredentials()

    })

    it("Register with invalid Email", () =>{

        Register_Methods.RegisterwithInValidEmail()
    })
})