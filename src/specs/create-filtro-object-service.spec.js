const assert = require('assert').strict;
const createFiltroObjectService = require('../services/create-filtro-object.service');

describe('Unit test for create-filtro-object.service', function () {
    it('Should throw an error "Nenhum corpo na requisição"', function () {

        const corpoRequisao = "";

        assert.throws(() => {
            createFiltroObjectService.createFiltroObject(corpoRequisao)
        });
    });

    it('Should throw an error "Corpo da requsição não contém categoria"', function () {

        const corpoRequisao = {};

        assert.throws(() => {
            createFiltroObjectService.createFiltroObject(corpoRequisao)
        });
    });

    it('Should throw an error "Corpo da requisição não contém nome"', function () {

        const corpoRequisao = { "categoria": "Computação em nuvem" };

        assert.throws(() => {
            createFiltroObjectService.createFiltroObject(corpoRequisao)
        });
    });

    it('Should create the object', function () {

        const corpoRequisao = { "categoria": "Computação em nuvem", "nome": "AWS Cloud Practitioner" };
        const objetoFiltro = createFiltroObjectService.createFiltroObject(corpoRequisao);

        assert.equal('AWS Cloud Practitioner', objetoFiltro.nome);
        assert.equal('Computação em nuvem', objetoFiltro.categoria);
    });
});