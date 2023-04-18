import { Router } from 'express';
import { BuildPath } from '../utils/buildPath';

const roteadorStatic = Router();

roteadorStatic.get('/', async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});

roteadorStatic.get('*', async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/404.html`);
});

export default roteadorStatic;
