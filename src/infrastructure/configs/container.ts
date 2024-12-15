import { Container } from 'inversify';
import { TYPES } from './type';
import { UserController } from '@interface-adapters/controllers/user';

export const container = new Container();

container.bind(TYPES.UserController).to(UserController);
