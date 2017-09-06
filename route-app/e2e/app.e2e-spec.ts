import { RouteAppPage } from './app.po';

describe('route-app App', () => {
  let page: RouteAppPage;

  beforeEach(() => {
    page = new RouteAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
