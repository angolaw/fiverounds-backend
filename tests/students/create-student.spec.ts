import {expect, test} from 'vitest'
import { Student, studentSchema } from '../../src/domain/entities/student'
import { getBeltFromValue } from '../../src/domain/entities/enums/belts'
import { Stripes } from '../../src/domain/entities/enums/stripes'
import { ZodError } from 'zod'

test("should create a user", ()=>{
    const studentData = {
        "name": "John Doe",
          "belt": "blue",
          "degree": "two stripes",
          "age": 28,
        "gender": "male"
        
      }
    const student = new Student(studentData.name,"", getBeltFromValue(studentData.belt), Stripes.oneStripe, studentData.age, "male")
    console.log(getBeltFromValue(studentData.belt));
    
    expect(student.name).toBe("John Doe")
    expect(student.belt).toBe("blue")
    expect(student.degree).toBe(Stripes.oneStripe)
    expect(student.age).toBe(28)
    expect(student.gender).toBe("male")

})

test("should not create a user with invalid data",()=>{
    const studentData = {
        "name": "John Doe",
          "belt": "blue",
          "degree": "two stripes",
          "age": "28",
        "gender": "male"
        
      }
      const student = new Student(studentData.name,"", getBeltFromValue(studentData.belt), Stripes.oneStripe, studentData.age, "male")
      expect(()=> studentSchema.parse(student)).toThrowError(ZodError)
})
