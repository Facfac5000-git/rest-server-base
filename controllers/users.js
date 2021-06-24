const { response } = require('express');

const usersGet = (request, response) => {
    const query = request.query;
    
    response.json({
        msg: 'get API',
        query
    });
}

const usersPost = (request, response) => {
    const body = request.body;

    response.json({
        msg: 'post API',
        body
    });
}

const usersPut = (request, response) => {
    const { id } = request.params;

    response.json({
        msg: 'put API',
        id
    });
}

const usersPatch = (request, response) => {
    const { id } = request.params;

    response.json({
        msg: 'patch API',
        id
    });
}

const usersDelete = (request, response) => {
    const { id } = request.params;

    response.json({
        msg: 'delete API',
        id
    });
}


module.exports = {
    usersGet, usersPost, usersPut, usersPatch, usersDelete
}