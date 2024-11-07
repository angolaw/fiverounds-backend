import Fastify, { FastifyRequest } from "fastify"
import { Student, studentSchema } from "./domain/entities/student"
import { randomUUID } from "crypto"

var students = []

const app = Fastify({
  logger: true
})

app.get("/", async ()=>{
  return {"msg": "Hello world"}
})

//! student routes
app.get("/students", async ()=>{
  // fetch students from DB
})

app.get("/students/:id", async (request, response)=>{
  //fetch student by id
  console.log(students.length);
  
  const {id} = request.query as {id: string}
  console.info(id)
  const found = students.filter((student)=>student.id == id)
  console.log(found)
})

app.post("/students/create", async (request, reply)=>{
  //create student
  const data = request.body
  console.log(data);
  
  const student = studentSchema.parse(data)  
  console.log(JSON.stringify(student));
  
})



app.listen({
  port: 3000
})


