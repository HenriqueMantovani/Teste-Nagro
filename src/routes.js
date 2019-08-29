import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProposeController from './app/controllers/ProposeController';
import ImovelController from './app/controllers/ImovelController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Rotas para USERS
// Rota para criação de usuário
routes.post('/users', UserController.store);
// Rota para Logar
routes.post('/sessions', SessionController.store);
// Rota que verifica se o usuário ja está logado
routes.use(authMiddleware);
// Rota para alteração de dados
routes.put('/users', UserController.update);

// Rotas para IMOVEIS
// Rota para Listagem dos imóveis
routes.get('/imovels', ImovelController.index);
routes.post('/imovels', ImovelController.store);

// Rotas para Propostas
routes.post('/proposes', ProposeController.store);

export default routes;
