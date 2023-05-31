exports.createFiltroObject = function (body) {
    let filtroRetorno = {
        "categoria": '',
        "nome": ''
    };

    if (body) {
        if (!body.categoria)
            throw 'Corpo da requsição não contém categoria';
        if (!body.nome)
            throw 'Corpo da requisição não contém nome';

        filtroRetorno.categoria = body.categoria;
        filtroRetorno.nome = body.nome;
    }
    else {
        throw 'Nenhum corpo na requisição';
    }

    return filtroRetorno;
}