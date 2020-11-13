describe("Form App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/pizza");
  });

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const phoneInput = () => cy.get('input[name="phone"]');
  const specialInput = () => cy.get('input[name="special"]');

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
});
