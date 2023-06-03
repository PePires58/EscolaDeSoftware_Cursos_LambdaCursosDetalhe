exports.validateQueryString = function (queryString) {
    let errors = [];

    if (!queryString || Object.entries(queryString).length == 0) {
        errors.push('Nenhum filtro específicado');
    }
    else {
        if (!queryString.categoria)
            errors.push('Categoria do curso é obrigatória');
        if (!queryString.nome)
            errors.push('Nome do curso é obrigatório');
    }

    return errors;
}