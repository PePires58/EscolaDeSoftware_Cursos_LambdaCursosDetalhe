const assert = require('assert').strict;
const validateQueryStringService = require('../services/validate-query-string.service');

describe('Unit test for valida-query-string.service', function () {
    it('Should not throw an error', function () {

        const corpoRequisao = undefined;

        assert.doesNotThrow(() => {
            validateQueryStringService.validateQueryString(corpoRequisao);
        });
    });

    it('Should have an error "Nenhum filtro específicado"', function () {

        const corpoRequisao = {};

        const errors = validateQueryStringService.validateQueryString(corpoRequisao);

        assert.equal(errors[0], 'Nenhum filtro específicado');
    });

    it('Should have an error "Categoria do curso é obrigatória"', function () {

        const corpoRequisao = { "teste": "teste" };
        const errors = validateQueryStringService.validateQueryString(corpoRequisao);

        assert.ok(errors.length > 0);
        assert.equal(errors[0], 'Categoria do curso é obrigatória');
    });

    it('Should have an error "Nome do curso é obrigatório"', function () {

        const corpoRequisao = { "categoria": "Computação em nuvem" };

        const errors = validateQueryStringService.validateQueryString(corpoRequisao);

        assert.ok(errors.length > 0);;
        assert.equal(errors[0], 'Nome do curso é obrigatório');
    });

    it('Should not have errors', function () {
        const corpoRequisao = { "categoria": "Computação em nuvem", "nome": "AWS Cloud Practitioner" };
        const errors = validateQueryStringService.validateQueryString(corpoRequisao);

        assert.equal(errors.length, 0);
    });
});