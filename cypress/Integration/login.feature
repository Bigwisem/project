# login.feature

Feature: User login functionality

  Background:
    Given I open the Demo Blaze website

  Scenario: Successfully login with valid credentials
    When I click on the "Login" button
    And I enter a valid username
    And I enter a valid password
    And I confirm the login
    Then I should see a welcome message

  Scenario: Unsuccessful login with invalid credentials
    When I click on the "Login" button
    And I enter an invalid username
    And I enter an invalid password
    And I confirm the login
    Then I should see an alert with the message "Incorrect username or password"

  Scenario: Unsuccessful login with missing username
    When I click on the "Login" button
    And I do not enter a username
    And I enter a valid password
    And I confirm the login
    Then I should see an alert with the message "Please fill out this field"

  Scenario: Unsuccessful login with missing password
    When I click on the "Login" button
    And I enter a valid username
    And I do not enter a password
    And I confirm the login
    Then I should see an alert with the message "Please fill out this field"
