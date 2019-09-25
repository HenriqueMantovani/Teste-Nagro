import { Router } from 'express';

import swaggerUi from 'swagger-ui-express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProposeController from './app/controllers/ProposeController';
import ImovelController from './app/controllers/ImovelController';

import authMiddleware from './app/middlewares/auth';

import * as swaggerDocument from './swagger.json';

const routes = new Router();

routes.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas para USERS
// Passa o metodo Store da class UserController
routes.post('/users', UserController.store);
// Rota para Logar
routes.post('/sessions', SessionController.store);
// Rota que verifica se o usuário ja está logado

routes.get('/imovels', ImovelController.index);
//routes.use(authMiddleware);
// Rota para alteração de dados
routes.put('/users', UserController.update);

// Rotas para IMOVEIS
// Rota para Listagem dos imóveis

// Rota para criação de imóvel
routes.post('/imovels', ImovelController.store);

//
routes.post('/proposes', ProposeController.store);

export default routes;
