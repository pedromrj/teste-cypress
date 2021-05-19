/// <reference types="cypress" />

context("Exemplo 1", () => {

    it("Realizando teste 1 na api", () => {

        cy.request('http://localhost:8080/exemplo').should((response) => {
            expect(response.status).to.eq(200)
            console.log("Teste realizado 1")
      })
    })

    
    it("Realizando teste 2 na api", () => {

        cy.request('http://localhost:8080/exemplo').should((response) => {
            expect(response.status).to.eq(200);
            
            const { name , email} = response.body;
            console.log("Teste 2 iniciado");

            
            expect(name).to.eq("Lucas");
            expect(email).to.eq("lucas@gmail.com");

            console.log("Teste 2 finalizando")

      })
    })


});