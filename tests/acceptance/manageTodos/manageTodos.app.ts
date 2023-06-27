
import { defineFeature, loadFeature } from 'jest-cucumber';
import { CompositionRoot, Maybe, Page, Todo } from '../../../src/index'
import path from 'path';

const feature = loadFeature(path.join(__dirname, './manageTodos.feature'));


defineFeature(feature, test => {

  test('Adding a description to a todo', ({ given, and, when, then }) => {
    
    let container = new CompositionRoot('test');
    let page = container.getTodosPage();
    
    let todo: Maybe<Todo>;
    let driver = container.getApplicationDriver();

    given('the user can access the app', () => {
      expect(driver.getCurrentRoute()).toEqual('/');
    });

    and(/^there is an existing todo with the title "(.*)"$/, (arg0) => {
      todo = page.getTodoInViewByName(arg0);
      expect(todo).toBeDefined();
      expect(todo?.getName()).toEqual(arg0);
    });
 
    when(/^the user selects the todo with the title "(.*)"$/, (arg0) => {
      // Select one
      page.selectTodoOnPage(arg0);
    });

    and(/^the user adds the description "(.*)"$/, (arg0) => {
      // Edit it
      page.editTodoDescription(arg0);
    });

    then(/^the user should see the updated description for the todo "(.*)"$/, (arg0) => {
      todo = page.getTodoInViewByName(arg0);
      expect(todo).toBeDefined();
      expect(todo?.getName()).toEqual(arg0);
    });
  });


  test('Deleting all todos', ({ given, when, then }) => {
    given('the user has existing todos', (table) => {

    });

    when('the user chooses to delete all todos', () => {

    });

    then('there should be no todos left', () => {

    });
  });

  test('Verifying the existence of existing todos and creating a new one', ({ given, when, then }) => {
    given('the user has existing todos', (table) => {

    });

    when(/^the user adds a new todo with the title "(.*)"$/, (arg0) => {

    });

    then('the user should be able to verify the updated todo list:', (table) => {

    });
  });
});

