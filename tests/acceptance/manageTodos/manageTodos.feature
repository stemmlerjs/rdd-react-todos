Feature: Manage Todos
  As a user
  I want to manage my todos effectively
  So that I can stay organized and track my tasks

  Scenario: Adding a description to a todo
    Given the user can access the app
    And there is an existing todo with the title "Buy groceries"
    When the user selects the todo with the title "Buy groceries"
    And the user adds the description "Remember to buy milk and eggs"
    Then the user should see the updated description for the todo "Buy groceries"

  Scenario: Deleting all todos
    Given the user has existing todos
      | Title       |
      | First Todo  |
      | Second Todo |
      | Third Todo  |
    When the user chooses to delete all todos
    Then there should be no todos left 

  Scenario: Verifying the existence of existing todos and creating a new one
    Given the user has existing todos
      | Title          |
      | Existing Todo1 |
      | Existing Todo2 |
    When the user adds a new todo with the title "New Todo"
    Then the user should be able to verify the updated todo list:
      | Title          |
      | Existing Todo1 |
      | Existing Todo2 |
      | New Todo       |