import { Router } from "express"
import disciplinasRouter from "./disciplinas.routes"

const router = Router()

router.use(disciplinasRouter)

export default router