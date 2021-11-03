const MainPage = require("./main.page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FocusPage extends MainPage {
  /**
   * define selectors using getter methods
   */

  //Hiring Btn
  get btnHiring() {
    return $("//*[contains(text(),'Now Hiring!')]");
  }

  //Locations tab
  get focusLocationTab() {
    return $("//span[contains(text(),'Locations')]");
  }

  //NorthAmerica Link
  get focusNorthAmericaLink() {
    return $("//a[@href='#north-america']");
  }

  //CentralAmerica Link
  get focusCentralAmericaLink() {
    return $("//a[@href='#central-america']");
  }

  //CentralAmerica Link selector
  get focusCentralAmericaSelector() {
    return $(
      "//span[@class='av-inner-tab-title'][contains(.,'Central America')]"
    );
  }

  //Asia Link
  get focusAsiaLink() {
    return $("//a[@href='#asia']");
  }
  //Asia Link selector
  get focusAsiaSelector() {
    return $("//span[@class='av-inner-tab-title'][contains(.,'Asia')]");
  }

  //page actions:
  //verify that the btn hiring exist
  async checkBtnHiring() {
    await expect(this.btnHiring).toExist();
    await expect(this.btnHiring).toBeExisting();
    await this.btnHiring.scrollIntoView();
    browser.pause(5000);
  }

  //check the locations tab exist and click it
  async clickLocationsTab() {
    await expect(this.focusLocationTab).toBeExisting();
    await this.focusLocationTab.scrollIntoView();
    await this.focusLocationTab.click();
  }

  //check the north america link
  async checkNortAmerica() {
    await expect(this.focusNorthAmericaLink).toBeExisting();
    await this.focusNorthAmericaLink.scrollIntoView();
    await expect(this.focusNorthAmericaLink).toBeDisplayed();
  }

  //check the central america link click it and check label
  async checkCentralAmerica(headerH2) {
    await expect(this.focusCentralAmericaLink).toExist();
    await expect(this.focusCentralAmericaSelector).toBeExisting();
    await this.focusCentralAmericaSelector.click();
    const centralAmericaHeader = $(`//h2[contains(text(),'${headerH2}')]`);
    await expect(centralAmericaHeader).toBeDisplayed();
  }

  //check the asia block
  async checkAsia(text) {
    await expect(this.focusAsiaLink).toExist();
    await expect(this.focusAsiaSelector).toBeExisting();
    await this.focusAsiaSelector.click();
    const asiaBlock = $(`//b[contains(text(),'${text}')]`);
    await expect(asiaBlock).toBeExisting();
    await expect(asiaBlock).toBeDisplayed();
  }
}

module.exports = new FocusPage();
