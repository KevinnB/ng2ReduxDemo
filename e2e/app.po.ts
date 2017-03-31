import { browser, element, by } from 'protractor';

export class NgReduxApplicationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngr-root h1')).getText();
  }
}
