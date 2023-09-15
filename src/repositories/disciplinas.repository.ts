import { db } from "@/database/databaseconnection"
import { CreateDisciplina, Disciplina } from "@/protocols/disciplinas.protocols"

async function get(){
    const disciplinas = await db.query<Disciplina>("SELECT * FROM disciplinas;")
    return disciplinas.rows
}

async function post(disciplina: CreateDisciplina){
    const { codigo, creditos, nome } = disciplina
    return db.query<CreateDisciplina>("INSERT INTO disciplinas (codigo, nome, creditos) VALUES ($1, $2, $3);", [codigo, nome, creditos])
}

async function put(disciplina: CreateDisciplina, id: number){
    const { codigo, creditos, nome } = disciplina
    return db.query<CreateDisciplina>("UPDATE disciplinas SET codigo=$1, nome=$2, creditos=$3 WHERE id=$4;", [codigo, nome, creditos, id])
}

async function deleteDisciplina(id: number){
    return db.query("DELETE FROM disciplinas WHERE id=$1;", [id])
}

export const discRepository = {
    get, post, put, deleteDisciplina
}