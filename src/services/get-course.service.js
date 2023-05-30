const scanDynamoDbService = require('./scan-dynamodb.service');
const createCourseObjectService = require('./create-course-object.service');

exports.getCourse = async function (filtros) {

    let objetoRetorno = {};

    const data = await scanDynamoDbService.getCoursesFromDb(filtros);
    const hasData = data.Item;

    if (hasData) {
        createCourseObjectService.createCourseObject(data.Item);
    }

    return objetoRetorno;
}