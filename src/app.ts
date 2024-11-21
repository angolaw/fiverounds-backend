import fastify from "fastify";
import { studentsRoutes } from "./routes/students.routes";

export const app = fastify()

app.register(studentsRoutes, {prefix: 
    'students'
})