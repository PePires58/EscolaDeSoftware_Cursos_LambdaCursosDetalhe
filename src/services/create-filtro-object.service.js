exports.createFiltroObject = function (queryStringParameters) {
    let filtroRetorno = {
        "categoria": queryStringParameters.categoria,
        "nome": queryStringParameters.nome
    };

    return filtroRetorno;
}