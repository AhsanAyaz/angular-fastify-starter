import { AngularFastifyStarterPage } from './app.po';

describe('angular-fastify-starter App', () => {
  let page: AngularFastifyStarterPage;

  beforeEach(() => {
    page = new AngularFastifyStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
