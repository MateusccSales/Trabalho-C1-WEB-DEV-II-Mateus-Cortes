import { execQuery } from '../execQuery';

export async function inserirAluno(aluno: { nome: string }): Promise<void> {
  try {
    const result = await execQuery(
      `INSERT into alunos VALUES ('${aluno.nome}')`,
    );
  } catch (erro) {
    console.log(erro);
  }
}
