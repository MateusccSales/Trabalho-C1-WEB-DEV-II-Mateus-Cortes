import { execQuery } from '../execQuery';

export async function deletarAluno(aluno: { nome: string }): Promise<void> {
  try {
    const result = await execQuery(
      `DELETE FROM alunos WHERE alunos.nome = '${aluno.nome}'`,
    );
  } catch (error) {
    console.log(error);
  }
}
