class SignUpPage {
    go() {
        cy.visit('/')
        cy.get('a[href^="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(delivery) {
        cy.get('input[name="fullName"]').type(delivery.name)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)
        cy.get('input[name="postalcode"]').type(delivery.address.zipCode)
        cy.get('input[value="Buscar CEP"]').click(),
        cy.get('input[name="address-number"]').type(delivery.address.addressNumber),
        cy.get('input[name="address-details"]').type(delivery.address.addressDetails)

        cy.contains('.delivery-method li', delivery.deliveryMethod).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + delivery.cnh)
    }

    submit() {
        cy.get('form button[type="submit"]').click()
    }

    shouldContainsSuccessfullRegisterMessage(expectedMessage) {
        cy.get('.swal2-modal .swal2-html-container').should('have.text', expectedMessage)
    }

    shouldContainsValidateFieldMessage(expectedMessage) {
        // cy.get('.alert-error').should('have.text',  expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

}

export default new SignUpPage;