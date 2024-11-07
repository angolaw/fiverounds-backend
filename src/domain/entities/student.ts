import { Belt } from "./enums/belts"
import { Stripes } from "./enums/stripes"
import {z} from 'zod'
export class Student {
    name:string
    id:string
    belt: Belt
    degree: Stripes
    age: number
    gender: "male"|"female"|"not specified"
    constructor( name:string, id:string,  belt: Belt, degree: Stripes, age: number, gender: "male"|"female"|"not specified"){
        this.name = name,
        this.id = id,
        this.belt = belt,
        this.degree = degree,
        this.age = age,
        this.gender = gender
    }
}
export const studentSchema = z.object({
    name: z.string().min(1),
    id: z.string().nullable().default(null),
    belt: z.nativeEnum(Belt),
    degree: z.nativeEnum(Stripes),
    age: z.number().min(18),
    gender: z.enum(["male", "female", "not specified"])
})


