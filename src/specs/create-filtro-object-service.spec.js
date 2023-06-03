const assert = require('assert').strict;
const createFiltroObjectService = require('../services/create-filtro-object.service');

describe('Unit test for create-filtro-object.service', function () {

    it('Should create the object', function () {

        const corpoRequisao = { "categoria": "Computação em nuvem", "nome": "AWS Cloud Practitioner" };
        const objetoFiltro = createFiltroObjectService.createFiltroObject(corpoRequisao);

        assert.equal('AWS Cloud Practitioner', objetoFiltro.nome);
        assert.equal('Computação em nuvem', objetoFiltro.categoria);
    });
});