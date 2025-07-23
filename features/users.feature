Feature: Users
   
  Scenario: GET all users
    Given I want to GET all users
    When I send a GET request
    Then I should receive a 200 response
    And the response body should contain a list of all users


  Scenario: CREATE a new user
    Given I want to create a new user
    When I send a POST request
    Then I should receive a 201 response
    And the response body should contain the user data


  Scenario Outline: UPDATE a user
    Given I want to update a user <userId>
    When I send a PUT request
    Then I should receive a 200 response
    And the response body should contain the updated user data

    Examples:
      | userId |
      | 1      |
      | 2      |
      | 3      |
  

  Scenario Outline: DELETE a user
    Given I want to DELETE a user <userId>
    When I send a DELETE request
    Then I should receive a 200 response
  
    Examples:
      | userId |
      | 1      |
      | 2      |
      | 3      |
    

  Scenario Outline: GET a user that does not exist
    Given I want to GET a user by id <userId>
    When I send a GET request
    Then I should receive a 404 response
    And the response body should be empty or not contain user data

    Examples:
      | userId |
      | 0      |
      | -1     |
      | 9999   |
      | 12345  |


 








    




    

  
  


  
