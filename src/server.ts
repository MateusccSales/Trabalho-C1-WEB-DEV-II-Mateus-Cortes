import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import roteadorAlunos from './routes/AlunosRoutes';
import roteadorStatic from './routes/StaticRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/public', express.static(`${__dirname}/public`));

app.use(roteadorAlunos);
app.use(roteadorStatic);

app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port} http://localhost:${port}`);
});
