
describe('Busca por voos', () => {
    context('nao logado', () => {
        const massaVoos = require('../fixtures/massaVoos')

        beforeEach(() => {
            cy.visit('/')// acessa  base url
        })
        it('buscar voos entre san paolo e cairo - simples', () => {
            // verificar se estamos na pagina correta
            cy.title().should('eq','BlazeDemo')
            cy.get('select.form-inline')
                .eq(0) // primeiro elemento com a class form-inline
                .select('São Paolo')
            cy.get('select.form-inline')
                .eq(1) // segundo elemento com a class form-inline
                .select('Cairo')
            cy.get('input.btn.btn-primary')
                .click() // clica no botao selecionar voo
            // validar titulo da guia

            // validar frase de cabecalho
            
        }) // fechar it
    }) // fechar context
}) // fechar describe
