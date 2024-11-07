import { Belt } from "./enums/belts"
import { Stripes } from "./enums/stripes"
import {z, ZodError} from 'zod'



export enum Gender {
    MALE="male",
    FEMALE="female",
    NOT_SPECIFIED="not specified"
}

export class Student {
    name:string
    id:string
    belt: Belt
    degree: Stripes
    age: number
    gender: Gender
    constructor( name:string, id:string,  belt: Belt, degree: Stripes, age: number, gender: Gender){
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
    age: z.number(),
    gender: z.nativeEnum(Gender)
}).refine(
    (student) => student.belt === Belt.BLACK || student.degree <=4,
{
    message: "Non black students can have a maximum of four stripes",
    path: ["stripes"]
}


)



