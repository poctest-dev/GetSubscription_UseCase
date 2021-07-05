import {Given,And, Then,When} from "cypress-cucumber-preprocessor/steps"

Given('I am on Site Homepage',  ()=> {
  cy.visit('http://localhost:53457/swagger/index.html?urls.primaryName=V2')
});


When('I enter partnerid and customer_information in request body',async function(){
  
  var request = JSON.stringify({
    "partnerTransactionId": "qqqww",
    "subscriptions": [
      {
        "customerId": "CUST1500-11082020NIK88",
        "emailId": "fakeemail20001EFG39@dispostable.com",
        "firstName": "EFG39",
        "lastName": "LNEFG39",
        "isFakeEmail": "true",
        "products": [
          {
            "productId": "752-11-51614",
            "ExtendedInfo": {
                "clientuniqueId": "DUI349-11082020NIK88"
            }
          }
        ]
      }
    ]
  })

  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div').click()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section-header > div.try-out > button').click()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.parameters-container > div > table > tbody > tr:nth-child(1) > td.parameters-col_description > input[type=text]').type("752")
  //cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-section-header > label > div > select').select()
  //cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-section-header > label > div > select').select()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-description-wrapper > div > div > div > textarea').clear()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-description-wrapper > div > div > div > textarea').type(request ,{ parseSpecialCharSequences: false })

})

And('I click on execute button', async function(){
   cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.execute-wrapper > button').click()
})

Then('a new subscription should be created', async function(){
  cy.wait(30000)
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.responses-wrapper > div.responses-inner > div > div > table > tbody > tr > td.response-col_status').eq(0).should('contain',"400")
})