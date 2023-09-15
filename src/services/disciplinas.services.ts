import { CreateDisciplina } from "@/protocols/disciplinas.protocols"
import { discRepository } from "@/repositories/disciplinas.repository"

async function get(){
    const disciplinas = await discRepository.get()
    return disciplinas
}

async function post(disciplina: CreateDisciplina){
    await discRepository.post(disciplina)
}

async function put(disciplina: CreateDisciplina, id: number){
    await discRepository.put(disciplina, id)
}

async function deleteDisciplina(id: number){
    await discRepository.deleteDisciplina(id)
}

export const discServices = {
    get, post, put, deleteDisciplina
}