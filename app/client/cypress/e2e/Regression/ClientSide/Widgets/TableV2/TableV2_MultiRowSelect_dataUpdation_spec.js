const widgetsPage = require("../../../../../locators/Widgets.json");
import * as _ from "../../../../../support/Objects/ObjectsCore";

/*
Selected row stays selected after data updation
if the primary column value isn't updated.
*/
describe("Table Widget V2 row multi select validation", function () {
  before(() => {
    cy.fixture("multiSelectedRowUpdationTableV2Dsl").then((val) => {
      _.agHelper.AddDsl(val);
    });
  });

  it("1. Test multi select column shows when enableMultirowselection is true", function () {
    cy.get(widgetsPage.buttonWidget).first().click();
    cy.wait(1000);
    cy.get(".t--table-multiselect").first().click();
    cy.get(widgetsPage.buttonWidget).last().click();
    cy.get(".tbody .tr").first().should("have.class", "selected-row");
  });
});
