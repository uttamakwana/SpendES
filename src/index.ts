import { InversifyExpressServer } from 'inversify-express-utils';
import express from "express";
import helmet from 'helmet';
import cors from "cors";
import { container } from '@infrastructure/configs/container';

class App {
 private server!: InversifyExpressServer;
 constructor() {
  this.initializeServer();
 }

 private initializeServer() {
  this.server = new InversifyExpressServer(container);

  this.server.setConfig((app) => {
   app.use(helmet());
   app.use(cors());
   app.use(express.json());
  })
 }
 public listen() {
  const app = this.server.build();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
   console.log(`Server started on http://localhost:${port}`);
  })
 }
}

const app = new App();
app.listen();
