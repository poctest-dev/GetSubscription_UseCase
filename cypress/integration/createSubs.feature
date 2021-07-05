Feature: Enroll a new user subscription through NexS

  Scenario: Create a new subscription for the user
    Given I am on Site Homepage
    When  I enter partnerid and customer_information in request body
    And   I click on execute button
    Then  a new subscription should be created
   
   
   

   
    