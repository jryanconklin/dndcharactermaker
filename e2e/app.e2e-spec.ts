import { DndcharactermakerPage } from './app.po';

describe('dndcharactermaker App', function() {
  let page: DndcharactermakerPage;

  beforeEach(() => {
    page = new DndcharactermakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
