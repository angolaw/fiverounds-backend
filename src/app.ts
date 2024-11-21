import fastify from "fastify";
import { studentsRoutes } from "./routes/students.routes";
import { classesRoutes } from "./routes/classes.routes";

export const app = fastify(
    {logger: true}	
)

app.register(
    studentsRoutes, {prefix: 
    'students'},
   
)
app.register(classesRoutes, {prefix: 'classes'})