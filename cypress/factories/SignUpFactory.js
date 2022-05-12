import faker from '@faker-js/faker'
var cpf = require('gerador-validador-cpf')

export default {

    delivery: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            email: faker.internet.email(firstName),
            cpf: cpf.generate(),
            whatsapp: '85999999999',
            address: {
                street: 'Rua Costa Barros',
                neighborhood: 'Centro',
                zipCode: '60160280',
                addressNumber: '915',
                addressDetails: 'Nono andar',
                cityAndState: 'Fortaleza/CE'
            },
                
            deliveryMethod: 'Moto',
            cnh: 'cnh-digital.jpg'
        
        }

        return data
    }
}