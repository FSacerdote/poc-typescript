export type Disciplina = {
    id: number,
    codigo: string,
    nome: string,
    creditos: number
}

export type CreateDisciplina = Omit<Disciplina, "id">