import z from "zod";
import { Belt } from "../enums/belts";
import { Stripes } from "../enums/stripes";
import { Gender } from "../student";

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
})