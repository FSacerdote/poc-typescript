import { discControllers } from "@/controllers/disciplinas.controllers";
import { Request, Response, Router } from "express";
import { validateSchema } from "@/middlewares/validateSchema";
import { disciplinaSchema } from "@/schemas/disciplinas.schemas";

const disciplinasRouter = Router()

disciplinasRouter.get("/health", (req: Request, res: Response)=>{
    res.send("Estou bem!")
})

disciplinasRouter.get("/disciplinas", discControllers.get)
disciplinasRouter.post("/disciplinas", validateSchema(disciplinaSchema), discControllers.post)
disciplinasRouter.put("/disciplinas/:id", validateSchema(disciplinaSchema), discControllers.put)
disciplinasRouter.delete("/disciplinas/:id", discControllers.deleteDisciplina)

export default disciplinasRouter