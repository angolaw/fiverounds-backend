import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { studentSchema } from "../domain/entities/schemas/studentSchema";


export async function studentsRoutes(app: FastifyInstance){
 var students = []
//! student routes
app.get("/students", async (request, response)=>{
    // fetch students from DB
    response.send(JSON.stringify({'msg': "Endpoint reached"}))
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