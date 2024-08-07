import {ReuseableCode} from '../support/ReuseableCode'

const reuseableCode = new ReuseableCode()

export class TaskCreation
{
    loadTaskCreationPage()
    {
        cy.get(".button-close").click(); //Close the toast
        cy.wait(3000)
        cy.reload().wait(3000) //Reload to load the content correctly
        cy.get(".button-close").click(); //Close the toast
    }
    addNewTask()
    {
        cy.wait(3000)
    const getIframeBody = () => { //This function returns iframe body section
      // get the document
      return cy.get('#mainarea_frame').its("0.contentDocument").should("exist")
      // automatically retries until body is loaded
      .its('body').should('not.be.undefined')
      // wraps "body" DOM element to allow chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap)
    }
    getIframeBody().find('[aria-label="add"]').click(); //Click on + icon
    const randomString  = reuseableCode.generateRandomString(3)
    const taskName = 'Task_'+ randomString
    const description = reuseableCode.generateRandomString(20)
    getIframeBody().find('input[placeholder="New Task"]').should('exist').clear().wait(1000).type(taskName).should('contain.value',taskName) //Add a random Task Name
    getIframeBody().find('[class="chakra-textarea css-apvs80"]').clear().wait(1000).type(description, { force: true }).should('contain.value',description) //Add a random description
    getIframeBody().find('[class="css-7db28x"]').eq(0).should('contain.text','Owner') //Validate that Owner is not preselected
    getIframeBody().find('[class="css-7db28x"]').eq(0).should('exist').click().wait(1000) //Click Add owner option
    getIframeBody().find('[class="css-16ef25x"] [class="css-mnxx7z"]').eq(1).should('contain.text','Plan User 1').click({ force: true }) //Select Owner
    getIframeBody().find('[style*="display: block;"] [class="chakra-text css-telw8g"]').eq(1).should('contain.text','Apply').click({ force: true }) //Apply
    getIframeBody().find('[class="css-7db28x"]').eq(1).should('contain.text', 'Plan User 1') //Validate that Requester is already selected
    getIframeBody().find('[class="css-7db28x"]').eq(0).should('contain.text', 'Plan User 1') //Validate that Follower is already selected
    getIframeBody().find('[class="css-7db28x"]').eq(3).should('exist').click({ force: true }) //Click Set Due date option
    getIframeBody().find('button[class="chakra-button css-jd5oqr"]').click().invoke('text').then((text) => { //Select due date
      console.log('Due date: '+text);
    });
    getIframeBody().find('[class="chakra-button css-1vseayy"]').eq(3).click({ force: true }).wait(1000) //OK button
    getIframeBody().find('[class="chakra-button css-1vseayy"]').eq(2).click({ force: true }) //Click Project button
    getIframeBody().find('.css-16ef25x > .css-idjgco > .css-3xsa7r > :nth-child(1)').should('contain.text','project 1').click() //Select Project 1
    getIframeBody().find('[style*="display: block;"] [class="chakra-text css-telw8g"]').eq(1).should('contain.text','Apply').click({ force: true }) //Apply
    getIframeBody().find('[class="chakra-button css-1vseayy"]').eq(1).click({ force: true }) //Click Save button
    getIframeBody().find('h4[class="css-7y8of4"]').should('contain.text','Task created') //Success Toast
    //Validate Created Task
    getIframeBody().find('[class="chakra-text css-1vcfe4j"]').eq(0).should('contain.text',taskName)  
    getIframeBody().find('[class="chakra-text css-m1htys"]').eq(0).should('contain.text',description)
    }
}