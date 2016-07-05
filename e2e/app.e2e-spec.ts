import { MyTodoAppPage } from './app.po';

describe('my-todo-app App', function() {
  let page: MyTodoAppPage;

  beforeEach(() => {
    page = new MyTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
