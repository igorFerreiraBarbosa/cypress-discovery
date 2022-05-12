import signUpPage from '../pages/SignUpPage'
import signUpFactory from '../factories/SignUpFactory'

describe('Register', () => {

    // beforeEach( function() {
    //     cy.fixture('delivery').then( function(d) {
    //         this.delivery = d
    //     })
    // })

    it('User must be a delivery officer', function() {

        var delivery = signUpFactory.delivery()

        signUpPage.go()

        signUpPage.fillForm(delivery)

        signUpPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signUpPage.shouldContainsSuccessfullRegisterMessage(expectedMessage)

    })

    it('Must validate invalid cpf', function() {

        var delivery = signUpFactory.delivery()

        delivery.cpf = '0001114aA@!'

        signUpPage.go()

        signUpPage.fillForm(delivery)

        signUpPage.submit()

        signUpPage.shouldContainsValidateFieldMessage('Oops! CPF inválido')

    })

    it('Must validate invalid email', function() {

        var delivery = signUpFactory.delivery()

        delivery.email = 'entregador.com'

        signUpPage.go()
        
        signUpPage.fillForm(delivery)

        signUpPage.submit()

        signUpPage.shouldContainsValidateFieldMessage('Oops! Email com formato inválido.')

    })

    context('Must validate empty fields', function() {
        const messages = [

            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'whatsapp', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]

        before(function() {

            signUpPage.go()
            signUpPage.submit()

        })

        messages.forEach(function(msg) {
            it(`${msg.field} is required`, function() {
                signUpPage.shouldContainsValidateFieldMessage(msg.output)
            })
        })

    })

})
