import { TestAngular2SliderPage } from './app.po';

describe('test-angular2-slider App', function() {
  let page: TestAngular2SliderPage;

  beforeEach(() => {
    page = new TestAngular2SliderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
