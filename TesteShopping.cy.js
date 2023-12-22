Cypress.Commands.add('login', (user) =>{
    
        
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(user.name); 
     cy.get('[data-test="password"]').type(user.password);
     cy.get('[data-test="login-button"]').click();
    

})
describe("Teste shopping",()=>{

    it("testare adaugare produs", ()=>{

        cy.login({name : 'standard_user', password : 'secret_sauce'});
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get(".shopping_cart_link").click();
        cy.get(".inventory_item_name").contains('Sauce Labs Bike Light');

    })

    it("testare stergere produs", ()=>{

        cy.login({name : 'standard_user', password : 'secret_sauce'});
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get(".shopping_cart_link").click();
        cy.get(".inventory_item_name").contains('Sauce Labs Bike Light');
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get(".cart_quantity_label").should('have.value' ,'');


    })

    it("testare finalizare cumparare", ()=>{

        cy.login({name : 'standard_user', password : 'secret_sauce'});
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get(".shopping_cart_link").click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type("Attila");
        cy.get('[data-test="lastName"]').type("Guti");
        cy.get('[data-test="postalCode"]').type("023746");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();

    })

})