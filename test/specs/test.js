const { googlePage, focus, focusLink } = require("../shared/data");
const GooglePage = require("../pageObjects/google.page");

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
});
