import Fastify, { FastifyRequest } from "fastify"
import { Student, studentSchema } from "./domain/entities/student"
import { randomUUID } from "crypto"
import { app } from "./app"
import { url } from "inspector"


app.listen({
  port: 3333,
}).then((url)=>{
  console.log(`Server listening on ${url}`);
})

