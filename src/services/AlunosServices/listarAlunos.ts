import { getAll } from '../execQuery';

export async function listarAlunos() {
  try {
    const result: { nome: string }[] = await getAll('SELECT nome FROM alunos');
    return result;
  } catch (error) {
    console.log(error);
  }
}
