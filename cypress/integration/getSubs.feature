Feature: Get Subscription detail of the provided user 
  Scenario: Fetch subscription information
    Given I am on Site Homepage
    When I enter partnerid, partner transaction id, customer id and subscription id
    And I click on execute button
    Then I should get subscription status
   
   
   

   
    