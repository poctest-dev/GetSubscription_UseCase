import {Given,And, Then,When} from "cypress-cucumber-preprocessor/steps"
Given('I am on Site Homepage',  ()=> {
  cy.visit('http://localhost:53457/swagger/index.html?urls.primaryName=V2')
});

When('I enter partnerid, partner transaction id, customer id and subscription id', async function () {
     cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div').click()
     cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section-header > div.try-out > button').click()

     cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div:nth-child(2) > div > div.opblock-section > div.parameters-container > div > table > tbody > tr:nth-child(1) > td.parameters-col_description > input[type=text]').type("752")
     cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div:nth-child(2) > div > div.opblock-section > div.parameters-container > div > table > tbody > tr:nth-child(2) > td.parameters-col_description > input[type=text]').type("qqqqqw")
     cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div:nth-child(2) > div > div.opblock-section > div.parameters-container > div > table > tbody > tr:nth-child(3) > td.parameters-col_description > input[type=text]').type("CUST1500-11082020NIK84")
     cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div:nth-child(2) > div > div.opblock-section > div.parameters-container > div > table > tbody > tr:nth-child(4) > td.parameters-col_description > input[type=text]').type("516fd0fc-ab5e-4a1a-9989-d13ea9bcd0c7")
     
});
When('I click on execute button',async function(){
    cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div:nth-child(2) > div > div.execute-wrapper > button').click()
})

Then('I should get subscription status',{timeout: 60*2000},async function(){
    cy.wait(30000)
    cy.get('#operations-GET-get_Subscription_V2__partnerId___partnerTransactionId___customerId___subscriptionId_ > div:nth-child(2) > div > div.responses-wrapper > div.responses-inner > div > div > table > tbody > tr > td.response-col_status').eq(0).should('contain',"200")
})