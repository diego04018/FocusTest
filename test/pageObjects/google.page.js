const MainPage = require("./main.page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GooglePage extends MainPage {
  /**
   * define selectors using getter methods
   */

  //google inputfiled search
  get inputGoogleSearch() {
    return $("input[class='gLFyf gsfi']");
  }

  //google submit button
  get googleSearchBtn() {
    return $("//input[@type='submit']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  //will perform a google search using the searchValue
  async search(searchValue) {
    await this.inputGoogleSearch.setValue(searchValue);
    await this.googleSearchBtn.waitForDisplayed(5000);
    await this.googleSearchBtn.click();
  }

  //verify that the site is on the search
  async checkSite(focusLink) {
    const focusSite = $(`//*[contains(text(),'${focusLink}')]`);
    await expect(focusSite).toBeExisting();
    await focusSite.click();
  }

  //open the url
  open(path) {
    return super.open(path);
  }
}

module.exports = new GooglePage();
