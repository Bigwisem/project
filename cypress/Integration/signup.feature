Feature: Signup Functionality on Demo Blaze Website

  Background: 
    Given I open the Demo Blaze website

  Scenario: Successfully sign up with a unique username
    When I click on the "Sign up" button
    And I enter a unique username
    And I enter a password
    And I confirm the signup
    Then I should see an alert with the message "Sign up successful."

  Scenario: Signup with an already existing username
    When I click on the "Sign up" button
    And I enter an existing username
    And I enter a password
    And I confirm the signup
    Then I should see an alert with the message "This user already exists."

  Scenario: Signup with missing username
    When I click on the "Sign up" button
    And I do not enter a username
    And I enter a password
    And I confirm the signup
    Then I should see an alert with the message "Please fill out Username and Password."

  Scenario: Signup with missing password
    When I click on the "Sign up" button
    And I enter a username
    And I do not enter a password
    And I confirm the signup
    Then I should see an alert with the message "Please fill out Username and Password."
