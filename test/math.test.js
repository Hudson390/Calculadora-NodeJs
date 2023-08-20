const math = require('../math')

describe('Testando Soma', ()=>{
    it('Testando a soma de dois numeros', ()=>{
        const esperado = 25
        const retorno = math(15, 10)

        expect(retorno).toBe(esperado)
    })
})