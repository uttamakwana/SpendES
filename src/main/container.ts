import { IUserRepository } from "@domain/repositories/user/user.repository";
import { UserMongodbRepository } from "@infrastructure/repositories/user/user.mongodb.repository";
import { Types } from "@shared/types";
import { Container } from "inversify";

const container = new Container();

container.bind<IUserRepository>(Types.UserRepository).to(UserMongodbRepository);