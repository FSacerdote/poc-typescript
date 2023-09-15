import Joi from "joi"
import { CreateDisciplina } from "@/protocols/disciplinas.protocols"

export const disciplinaSchema = Joi.object<CreateDisciplina>({
    codigo: Joi.string().required(),
    nome: Joi.string().required(),
    creditos: Joi.number().integer().required()
})