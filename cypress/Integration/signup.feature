Feature: User Signup on Demo Blaze
  As a user, I want to sign up on the Demo Blaze website
  so that I can access its features.

  Background:
    Given I open the Demo Blaze website

  Scenario: Successful signup with a unique username
    When I click on the "Sign up" button
    And I enter a unique username
    And I enter a password
    And I confirm the signup
    Then I should see an alert with the message "Sign up successful."

  Scenario: Attempt to sign up with an existing username
    When I click on the "Sign up" button
    And I enter an existing username
    And I enter a password
    And I confirm the signup
    Then I should see an alert with the message "This user already exists."

  Scenario: Attempt to sign up without a username
    When I click on the "Sign up" button
    And I do not enter a username
    And I enter a password
    And I confirm the signup
    Then I should see an alert with the message "Please fill out Username and Password."

  Scenario: Attempt to sign up without a password
    When I click on the "Sign up" button
    And I enter a unique username
    And I do not enter a password
    And I confirm the signup
    Then I should see an alert with the message "Please fill out Username and Password."
    