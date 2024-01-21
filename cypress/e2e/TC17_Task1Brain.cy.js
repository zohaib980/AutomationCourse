///<reference types="Cypress"/>
///<reference types="Cypress-iframe"/>

import {ReuseableCode} from '../support/ReuseableCode'
const reuseableCode = new ReuseableCode()

describe("Create, Edit, Delete and Restore Tasks", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  it("Add new, View All Tasks and Completed", () => {
    //Login
    cy.visit(
      ""
    );
    cy.get("#email").should("exist").type(""); //email
    cy.get("#password").should("exist").type(""); //Password
    cy.get("#loginBtn").should("exist").click(); //Login Button
    cy.get("#navlist").should("exist"); //Validate Navigation list

    //Task Creation page
    cy.get(".button-close").click(); //Close the toast

    //Visit the iframe link
    cy.get('#mainarea_frame').invoke('attr', 'src').then((iframeSrc) => {
    // Visit the URL specified in the iframe's src attribute
    cy.visit(iframeSrc);
    cy.wait(3000)
    });

    //Set Company to "Automation C.."
    cy.get('.css-ltljvl > .chakra-avatar') //Icon under logo
    .if().should('exist').click() 
    .else().reload().then(()=>{
      cy.get('[testid="wm_button_login"]').should('exist').click() //Signin With wurth button
      cy.get("#email").should("exist").type(""); //email
      cy.get("#password").should("exist").type(""); //Password
      cy.get("#loginBtn").should("exist").click(); //Login Button
      cy.get('.css-ltljvl > .chakra-avatar').should('exist').click()  //Icon under logo
    })
    cy.get('[class="chakra-button css-m5zox2"]:nth-child(2)').should('contain.text','Automation C..').click() //Select Automation C.. option

    //Add New Task
    cy.get('[class="chakra-button css-lphc3s"]').click().wait(2000); //Click on + icon
    const randomString  = reuseableCode.generateRandomString(3)
    const taskName = 'Task_'+ randomString
    const description = reuseableCode.generateRandomString(20)
    cy.get('input[placeholder="New Task"]').should('exist').clear().wait(1000).type(taskName).should('contain.value',taskName) //Add a random Task Name
    cy.get('[class="chakra-textarea css-apvs80"]').clear().wait(1000).type(description, { force: true }).should('contain.value',description) //Add a random description
    cy.get('[class="css-7db28x"]').eq(0).should('contain.text','Owner') //Validate that Owner is not preselected
    cy.get('[class="css-7db28x"]').eq(0).should('exist').click().wait(1000) //Click Add owner option
    cy.get('.css-16ef25x > .css-idjgco > .css-3xsa7r > :nth-child(2)').should('contain.text','Plan User 1').click({ force: true }) //Select Owner
    cy.get('[style*="display: block;"] [class="chakra-text css-telw8g"]').eq(1).should('contain.text','Apply').click({ force: true }) //Apply
    cy.get('[class="css-7db28x"]').eq(1).should('contain.text', 'Plan User 1') //Validate that Requester is already selected
    cy.get('[class="css-7db28x"]').eq(0).should('contain.text', 'Plan User 1') //Validate that Follower is already selected
    cy.get('[class="css-7db28x"]').eq(3).should('exist').click({ force: true }) //Click Set Due date option
    cy.get('button[class="chakra-button css-jd5oqr"]').click().invoke('text').then((text) => { //Select due date
      console.log('Due date: '+text);
    });
    cy.get('[class="chakra-button css-1vseayy"]').eq(3).click({ force: true }).wait(1000) //OK button
    cy.get('[class="chakra-button css-1vseayy"]').eq(2).click({ force: true }) //Click Project button
    cy.get('.css-16ef25x > .css-idjgco > .css-3xsa7r > :nth-child(1)').should('contain.text','project 1').click() //Select Project 1
    cy.get('[style*="display: block;"] [class="chakra-text css-telw8g"]').eq(1).should('contain.text','Apply').click({ force: true }) //Apply
    cy.get('[class="chakra-button css-1vseayy"]').eq(1).click({ force: true }) //Click Save button
    cy.get('h4[class="css-7y8of4"]').should('contain.text','Task created') //Success Toast
    //Validate Created Task
    cy.get('[class="chakra-text css-1vcfe4j"]').eq(0).should('contain.text',taskName)  
    cy.get('[class="chakra-text css-m1htys"]').eq(0).should('contain.text',description)

  });
});
