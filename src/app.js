const getCourseService = require('./services/get-course.service');
const createFiltroObjectService = require('./services/create-filtro-object.service');
const validateQueryStringService = require('./services/validate-query-string.service');

exports.lambdaHandler = async (event, context) => {

    try {
        const errors = validateQueryStringService.validateQueryString(event.queryStringParameters);
        if (errors.length > 0)
            return errorResult(400, errors);

        const filtroCurso = createFiltroObjectService.createFiltroObject(event.queryStringParameters);
        const curso = await getCourseService.getCourse(filtroCurso);

        if (curso == {})
            return defaultResult(200, curso);
        else
            return errorResult(204, 'Não foram encontrados detalhe para o curso ' + filtroCurso.nome + ' da categoria ' + filtroCurso.categoria);
    } catch (error) {
        return errorResult(500, error);
    }
}

function errorResult(statusCode, errors) {
    return defaultResult(statusCode, {
        errors: errors
    });
}

function defaultResult(statusCode, object) {
    return {
        'statusCode': statusCode,
        'body': object,
        'isBase64Encoded': false,
        'headers': {
            'Content-Type': 'application/json'
        }
    }
}