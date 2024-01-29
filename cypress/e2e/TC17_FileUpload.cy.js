/// <reference types="Cypress" />

describe('UPloading Functionality',function(){

    it('Upload image in Cypress', () => {
        cy.visit('https://fineuploader.com/demos.html')
        const image = 'Images/Image.png'
        cy.get("div[id='fine-uploader-gallery'] input[title='file input']").attachFile('Images/Image.png')
    })
})
