const express = require('express');
const {celebrate,Segments,Joi} = require('celebrate');
const OngsController = require('./controller/OngsController');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionControler');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// usando a biblioteca celebrate para validacao de campos
routes.get('/ongs', OngsController.index);
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.string().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().required().min(2),
    })
}), OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);



module.exports = routes;