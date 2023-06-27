

// // We use puppeteer to do this.
// import { defineFeature, loadFeature } from 'jest-cucumber';
// import { CompositionRoot, TodosView } from '../../../src/index'
// import path from 'path';

// const feature = loadFeature(path.join(__dirname, './manageTodos.feature'));

// defineFeature(feature, test => {

//   beforeAll(() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://google.com');
//     await page.pdf({path: 'google.pdf'});

//     await browser.close();
//   })

//   test('Adding a description to a todo', ({ given, and, when, then }) => {
    

//     given('the user can access the app', () => {
//       let driver = container.getApplicationDriver();
//       expect(driver.getCurrentRoute()).toEqual('/');
//     });

//     and(/^there is an existing todo with the title "(.*)"$/, (arg0) => {
//       let todo = todosView.getTodoInViewByName(arg0);
//       expect(todo).toBeDefined();
//       expect(todo?.getName()).toEqual(arg0);
//     });

//     when(/^the user selects the todo with the title "(.*)"$/, (arg0) => {
//       // Select one
//       todosView.selectTodoOnPage(arg0);
//     });

//     and(/^the user adds the description "(.*)"$/, (arg0) => {
//       // Edit it
//       let todoPage = driver.getCurrentPage();
//       todoPage.editTodo();
//     });

//     then(/^the user should see the updated description for the todo "(.*)"$/, (arg0) => {
//       todoPage.goBack(); // this should be a common thing
//       // All todos are there with new one
//       expect(dashboard.getTodoInViewByName()).toE
//     });
//   });


//   test('Deleting all todos', ({ given, when, then }) => {
//     given('the user has existing todos', (table) => {

//     });

//     when('the user chooses to delete all todos', () => {

//     });

//     then('there should be no todos left', () => {

//     });
//   });

//   test('Verifying the existence of existing todos and creating a new one', ({ given, when, then }) => {
//     given('the user has existing todos', (table) => {

//     });

//     when(/^the user adds a new todo with the title "(.*)"$/, (arg0) => {

//     });

//     then('the user should be able to verify the updated todo list:', (table) => {

//     });
//   });
// });

