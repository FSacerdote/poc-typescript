import { Request, Response } from "express"
import { CreateDisciplina } from "@/protocols/disciplinas.protocols"
import { discServices } from "@/services/disciplinas.services"

async function get(req: Request, res: Response){
    try {
        const disciplinas = await discServices.get()
        res.send(disciplinas)
    } catch (error) {
        res.sendStatus(500).send(error.message)
    }
}

async function post(req: Request, res: Response){
    const disciplina = req.body as CreateDisciplina
    try {
        await discServices.post(disciplina)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500).send(error.message)
    }
}

async function put(req: Request, res: Response){
    const disciplina = req.body as CreateDisciplina
    const id = Number(req.params.id)
    try {
        await discServices.put(disciplina, id)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500).send(error.message)
    }
}

async function deleteDisciplina(req: Request, res: Response){
    const id = Number(req.params.id)
    try {
        await discServices.deleteDisciplina(id)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500).send(error.message)
    }
}

export const discControllers = {
    get, post, put, deleteDisciplina
}