
describe("Teste de logare",()=>{


    it("test de log in gresit",()=>{

        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce'");
        cy.get('[data-test="login-button"]').click();
    })
    it("test de log in corect",()=>{

        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user");// 
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get(".app_logo");
    })

    it("test de log out", ()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user");// 
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();

    })

    it("test de deschidere inchidere meniu", ()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user");// 
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get("#react-burger-menu-btn").click();
        cy.get("#react-burger-cross-btn").click();

    })
    
})