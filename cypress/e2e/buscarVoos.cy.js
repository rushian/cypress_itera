describe('Busca por voos', () => {
    context('nao logado', () => {
        const massaVoos = require('../fixtures/massaVoos')

        beforeEach(() => {
            cy.visit('/') // acessa  base url
        })
        it('buscar voos entre san paolo e cairo - simples', () => {
            // verificar se estamos na pagina correta
            cy.title().should('eq', 'BlazeDemo')
            cy.get('select.form-inline')
                .eq(0) // primeiro elemento com a class form-inline
                .select('São Paolo')
            cy.get('select.form-inline')
                .eq(1) // segundo elemento com a class form-inline
                .select('Cairo')
            cy.get('input.btn.btn-primary').click() // clica no botao selecionar voo
            // validar titulo da guia
            cy.title().should('eq', 'BlazeDemo - reserve')

            // validar frase de cabecalho
            cy.get('.container h3').should('have.text', 'Flights from São Paolo to Cairo: ')
        }) // fechar it

        massaVoos.array.forEach(({ origem, destino }) => {
            it(`buscar voos entre ${origem} e ${destino} a partir da massa`, () => {
                // verificar se estamos na pagina correta
                cy.title().should('eq', 'BlazeDemo')
                cy.get('select.form-inline')
                    .eq(0) // primeiro elemento com a class form-inline
                    .select(origem)
                cy.get('select.form-inline')
                    .eq(1) // segundo elemento com a class form-inline
                    .select(destino)
                cy.get('input.btn.btn-primary').click() // clica no botao selecionar voo
                // validar titulo da guia
                cy.title().should('eq', 'BlazeDemo - reserve')

                // validar frase de cabecalho
                cy.get('.container h3').should('have.text', `Flights from ${origem} to ${destino}: `)
            }) // fechar it
        })
    }) // fechar context
}) // fechar describe
