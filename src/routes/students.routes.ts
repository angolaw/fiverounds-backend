import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { studentSchema } from "../domain/entities/student";

export async function studentsRoutes(app: FastifyInstance){
 var students = []
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
    if(student){
      student.id = randomUUID()
    }
    reply.send(JSON.stringify(student))
  
    
  })

}