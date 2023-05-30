exports.createFiltroObject = function (body) {
    let filtroRetorno = {
        "categoria": '',
        "nome": ''
    };

    if (body) {
        const bodyJson = JSON.parse(body);

        if (!bodyJson.categoria)
            throw 'Corpo da requsição não contém categoria';
        if (!bodyJson.nome)
            throw 'Corpo da requisição não contém nome';

        filtroRetorno.categoria = bodyJson.categoria;
        filtroRetorno.nome = bodyJson.nome;
    }
    else {
        throw 'Nenhum corpo na requisição';
    }

    return filtroRetorno;
}