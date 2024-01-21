///<reference types="Cypress"/>
///<reference types="Cypress-iframe"/>

import {ReuseableCode} from '../support/ReuseableCode'
import { LoginPage } from '../pageObjects/LoginPage';
import { TaskCreation } from '../pageObjects/TaskCreation';

const reuseableCode = new ReuseableCode()
const loginPage = new LoginPage()
const taskCreation = new TaskCreation()

describe("Create, Edit, Delete and Restore Tasks", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
  it("Add new, View All Tasks and Completed", () => {
    
    cy.visit("https://my.towio.com/?company=21294#addon-com.towio.plan-64a546f0888ce");
    loginPage.login('towioplan@gmail.com','123456') 
    taskCreation.loadTaskCreationPage() //Load Task Creation page
    taskCreation.addNewTask() //Add and Validate a New Task
    
  })
  

})
