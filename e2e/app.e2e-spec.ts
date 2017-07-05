import { UdemyprojectPage } from './app.po';

describe('udemyproject App', () => {
  let page: UdemyprojectPage;

  beforeEach(() => {
    page = new UdemyprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
