
Cypress.Commands.add('login', (user) =>{
    
        
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type(user.name); 
     cy.get('[data-test="password"]').type(user.password);
     cy.get('[data-test="login-button"]').click();
    

})
describe("Teste de logare",()=>{
    

    it("test de log in gresit",()=>{

        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user1");
        cy.get('[data-test="password"]').type("secret_sauce'");
        cy.get('[data-test="login-button"]').click();
    })
    it("test de log in corect",()=>{

        cy.login({name : 'standard_user', password : 'secret_sauce'});
        cy.get(".app_logo");
    })

    it("test de log out", ()=>{
        cy.login({name : 'standard_user', password : 'secret_sauce'});
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();

    })

    it("test de deschidere inchidere meniu", ()=>{
        cy.login({name : 'standard_user', password : 'secret_sauce'});
        cy.get("#react-burger-menu-btn").click();
        cy.get("#react-burger-cross-btn").click();

    })
    
})