const getCourseService = require('./services/get-course.service');
const createFiltroObjectService = require('./services/create-filtro-object.service');

exports.lambdaHandler = async (event, context) => {

    try {
        const filtroCurso = createFiltroObjectService.createFiltroObject(event.body);
        const curso = await getCourseService.getCourse(filtroCurso);

        console.log(curso);
        if (curso)
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