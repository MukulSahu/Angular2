import { Angular2GetStartedPage } from './app.po';

describe('angular2-get-started App', () => {
  let page: Angular2GetStartedPage;

  beforeEach(() => {
    page = new Angular2GetStartedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
