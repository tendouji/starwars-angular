import { StarwarsAngularPage } from './app.po';

describe('starwars-angular App', function() {
  let page: StarwarsAngularPage;

  beforeEach(() => {
    page = new StarwarsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
