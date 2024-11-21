import z from "zod";

export const BJJClassSchema =  z.object({
    name: z.string(),
    time: z.date(),
    level: z.string()
})