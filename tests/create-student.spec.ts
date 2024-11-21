import {expect, test} from 'vitest'

import { Gender, Student } from '../src/domain/entities/student'
import { Belt } from '../src/domain/entities/enums/belts'
import {  Stripes } from '../src/domain/entities/enums/stripes'
import { ZodError } from 'zod'
import { studentSchema } from '../src/domain/entities/schemas/studentSchema'

test("should create a user", ()=>{
    const studentData = {
        "name": "John Doe",
          "belt": Belt.WHITE,
          "degree": Stripes.One,
          "age": 28,
        "gender": "male"
        
      }
    const student = new Student(studentData.name,"", studentData.belt, studentData.degree, studentData.age, Gender.MALE)
    
    expect(student.name).toBe("John Doe")
    expect(student.belt).toBe(1)
    expect(student.degree).toBe(1)
    expect(student.age).toBe(28)
    expect(student.gender).toBe("male")

})

test("should not create a user with invalid data",()=>{
    const studentData = {
        "name": "John Doe",
          "belt": Belt.WHITE,
          "degree": 2,
          "age": undefined,
        "gender": "male"
        
      }
      const student = new Student(studentData.name,"", studentData.belt, studentData.degree, studentData.age, Gender.MALE)
      
      expect(()=> studentSchema.parse(student)).toThrowError(ZodError)
})

test("should not allow that students below black belt having more than 4 stripes ", ()=>{
  const studentData = {
    "name": "Jonh Reese",
    "belt": 2,
    "degree": 5,
    "age": 35,
    "gender": "male"
  }

  const student = new Student(studentData.name,"",studentData.belt,studentData.degree,studentData.age, Gender.MALE)
  
  expect(()=>studentSchema.parse(student)).toThrowError(ZodError)
})
test("should  allow that black belts students have more than 4 stripes ", ()=>{
  const studentData = {
    "name": "Jonh Reese",
    "belt": 5,
    "degree": 5,
    "age": 35,
    "gender": "male"
  }

  const student = new Student(studentData.name,"",studentData.belt,studentData.degree,studentData.age, Gender.MALE)
  expect(()=>studentSchema.parse(student)).toBeTruthy
  
  
})



