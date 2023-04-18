import { Router } from 'express';
import AlunosController from '../controllers/AlunosController';
import {
  AuthMiddleware,
  ManagerMiddleware,
} from '../middlewares/AuthMiddleware';

const roteadorAlunos = Router();

roteadorAlunos.get(
  '/alunos',
  AuthMiddleware,
  ManagerMiddleware,
  AlunosController.getAlunos,
);

roteadorAlunos.post('/aluno', AlunosController.inserirAluno);

roteadorAlunos.delete('/aluno', AlunosController.excluirAluno);

export default roteadorAlunos;
