const scanDynamoDbService = require('./scan-dynamodb.service');
const createCourseObjectService = require('./create-course-object.service');

exports.getCourse = async function (filtros) {

    let objetoRetorno = {};

    const data = await scanDynamoDbService.getCoursesFromDb(filtros);
    const hasData = data.Item;

    console.log(data.Item);
    console.log(hasData);
    if (hasData) {
        objetoRetorno = createCourseObjectService.createCourseObject(data.Item);
    }

    return objetoRetorno;
}