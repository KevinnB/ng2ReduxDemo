import { NgReduxApplicationPage } from './app.po';

describe('ng-redux-application App', () => {
  let page: NgReduxApplicationPage;

  beforeEach(() => {
    page = new NgReduxApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngr works!');
  });
});
