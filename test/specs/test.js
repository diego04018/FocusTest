const { googlePage, focus, focusLink } = require("../shared/data");
const GooglePage = require("../pageObjects/google.page");
const FocusPage = require("../pageObjects/focus.page");

describe("Focus Automation Test", () => {
  it("Go to google.com and search for focus site", async () => {
    //open google page
    await GooglePage.open(googlePage);
    //get the input field for the search and type focus services on the search
    await GooglePage.search(focus);
    //find the focus site on the search
    await GooglePage.checkSite(focusLink);

    browser.pause(5000);
  });

  it("on the focus page check that the now hiring button exisits", async () => {
    //select the button
    await FocusPage.checkBtnHiring();
    browser.pause(5000);
  });

  it("location tab validations", async () => {
    //select the button for tab locations and click it
    await FocusPage.clickLocationsTab();
    browser.pause(5000);
    //select the link for North America an assert
    await FocusPage.checkNortAmerica();
    browser.pause(5000);
    //click on the central american link and validate that El Salvador & Nicaragua is displayed
    await FocusPage.checkCentralAmerica("El Salvador & Nicaragua");
    browser.pause(5000);
    //click on the asia location and validate the block
    await FocusPage.checkAsia("Bacolod City, Philippines");
    browser.pause(5000);
  });
});
