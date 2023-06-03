const getItemDynamoDbService = require('./get-item-dynamodb.service');
const createCourseObjectService = require('./create-course-object.service');

exports.getCourse = async function (filtros) {

    let objetoRetorno = {};

    const data = await getItemDynamoDbService.getCoursesFromDb(filtros);
    const hasData = data.Item;

    if (hasData) {
        objetoRetorno = createCourseObjectService.createCourseObject(data.Item);
    }

    return objetoRetorno;
}