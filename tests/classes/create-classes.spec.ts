import { describe, test, expect, it } from "vitest";
import z, { ZodError } from "zod";

describe("Manages the creation of the classes", 
    ()=>{

        it("should create a class with name, time and level", ()=>{
            const bjjClass: BJJClass =  new BJJClass(
                "Fundamentals",
                new Date(),
                "Beginner"
            )

            expect(bjjClass.name).toBe("Fundamentals")
            expect(bjjClass.time).toBeInstanceOf(Date)
            expect(bjjClass.level).toBe("Beginner")
        })
        it("should not allow classes to be created with invalid details", ()=>{
            const anyClass = new BJJClass("",undefined,"")
            expect(() => BJJClassSchema.parse(anyClass)).toThrowError(ZodError)
        })
        
    }
)

export class BJJClass {
    name: string
    time: Date
    level: string
    constructor(name: string, time: Date, level: string){
        this.name = name
        this.time = time
        this.level = level
    }


}

const BJJClassSchema =  z.object({
    name: z.string(),
    time: z.date(),
    level: z.string()
}).refine((schema) => {

})

