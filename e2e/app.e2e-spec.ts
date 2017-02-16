import { DemoReduxPage } from './app.po';

describe('demo-redux App', () => {
  let page: DemoReduxPage;

  beforeEach(() => {
    page = new DemoReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
