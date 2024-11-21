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




