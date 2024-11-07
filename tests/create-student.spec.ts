import {expect, test} from 'vitest'

import { Student, studentSchema } from '../src/domain/entities/student'
import { getBeltFromValue } from '../src/domain/entities/enums/belts'
import { getStripesFromValue, Stripes } from '../src/domain/entities/enums/stripes'
import { ZodError } from 'zod'
import { log } from 'console'

test("should create a user", ()=>{
    const studentData = {
        "name": "John Doe",
          "belt": "blue",
          "degree": 1,
          "age": 28,
        "gender": "male"
        
      }
    const student = new Student(studentData.name,"", getBeltFromValue(studentData.belt), getStripesFromValue(studentData.degree), studentData.age, "male")
    console.log(getBeltFromValue(studentData.belt));
    
    expect(student.name).toBe("John Doe")
    expect(student.belt).toBe("blue")
    expect(student.degree).toBe(getStripesFromValue(1))
    expect(student.age).toBe(28)
    expect(student.gender).toBe("male")

})

test("should not create a user with invalid data",()=>{
    const studentData = {
        "name": "John Doe",
          "belt": "blue",
          "degree": 2,
          "age": "28",
        "gender": "male"
        
      }
      const student = new Student(studentData.name,"", getBeltFromValue(studentData.belt), studentData.degree, studentData.age, "male")
      
      expect(()=> studentSchema.parse(student)).toThrowError(ZodError)
})

test("should not allow that students below black belt having more than 4 stripes ", ()=>{
  const studentData = {
    "name": "Jonh Reese",
    "belt": "white",
    "degree": 5,
    "age": 35,
    "gender": "male"
  }

  const student = new Student(studentData.name,"",getBeltFromValue(studentData.belt),studentData.degree,studentData.age, "male")
  
  expect(()=>studentSchema.parse(student)).toThrowError(ZodError)
})
test("should  allow that black belts students have more than 4 stripes ", ()=>{
  const studentData = {
    "name": "Jonh Reese",
    "belt": "black",
    "degree": 5,
    "age": 35,
    "gender": "male"
  }

  const student = new Student(studentData.name,"",getBeltFromValue(studentData.belt),studentData.degree,studentData.age, "male")
  expect(()=>studentSchema.parse(student)).toBeTruthy
  
  
})



