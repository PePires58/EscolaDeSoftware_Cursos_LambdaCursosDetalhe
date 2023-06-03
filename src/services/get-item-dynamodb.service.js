const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.getCoursesFromDb = async function (filtros) {
    const params = {
        TableName: process.env.TableName,
        ConsistentRead: false,
        Key: {
            "categoria": {
                S: filtros.categoria
            },
            "nome": {
                S: filtros.nome
            }
        }
    };

    return await dynamodb.getItem(params)
        .promise()
        .then((data) => {
            return data;
        });
}