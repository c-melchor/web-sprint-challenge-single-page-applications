describe("Form App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/pizza");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const phoneInput = () => cy.get('input[name="phone"]');
  const cheeseCheck = () => cy.get("[data-cy=extraCheese]");
  const pineappleCheck = () => cy.get("[data-cy=pineapple]");
  const mushroomsCheck = () => cy.get("[data-cy=mushrooms]");
  const sausageCheck = () => cy.get("[data-cy=sausage]");
  const allCheckboxes = () => cy.get("input[type=checkbox]");
  const specialInput = () => cy.get('input[name="special"]');
  const submitBtn = () => cy.get("[data-cy=submitBtn");
  const dropdown = () => cy.get("[name=sizes]");
  const sizeSmall = () => cy.get("[data-cy=small]");

  it("Dummy Test!", () => {
    expect(true).to.equal(true);
  });
  it("Name Test", () => {
    nameInput()
      .type("Christina")
      .should("have.value", "Christina");
  });
  it("Email Test", () => {
    emailInput()
      .type("email@email.com")
      .should("have.value", "email@email.com");
  });
  it("Phone Test", () => {
    phoneInput()
      .type("888-888-8888")
      .should("have.value", "888-888-8888");
  });
  it("Special Test", () => {
    specialInput()
      .type("Ranch on the side")
      .should("have.value", "Ranch on the side");
  });

  it("cheese box check", () => {
    cheeseCheck()
      .click()
      .should("be.checked");
  });
  it("mushroom box check", () => {
    mushroomsCheck()
      .click()
      .should("be.checked");
  });
  it("sausage box check", () => {
    sausageCheck()
      .click()
      .should("be.checked");
  });
  it("pineapple box check", () => {
    pineappleCheck()
      .click()
      .should("be.checked");
  });

  it("can check two+ boxes", () => {
    allCheckboxes()
      .click({ multiple: "true" })
      .should("be.checked");
  });

  it("can submit", () => {
    nameInput().type("name");
    emailInput().type("email");
    phoneInput().type("555-555-5555");
    submitBtn().click();
    nameInput().should("have.value", "");
    emailInput().should("have.value", "");
    phoneInput().should("have.value", "");
  });

  it.only("size required", () => {
    dropdown().select("small");
  });
});
