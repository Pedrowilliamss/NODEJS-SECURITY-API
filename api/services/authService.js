const database = require('../models')
const { compare } = require('bcryptjs')

class AuthServices {
    async login(dto) {
        const usuario = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if (!usuario) {
            throw new Error('Usuario não cadastrado')
        }

        const senhasIguais = compare(dto.senha, usuario.senha)

        if(!senhasIguais)
    }
}

module.exports = AuthServices