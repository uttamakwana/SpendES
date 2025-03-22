import "module-alias/register";
import 'reflect-metadata';
import { App } from './app';

function bootStrap() {
    const app = new App();
    app.init();
}

bootStrap();