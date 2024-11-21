import { describe, test, expect, it, beforeAll,vi } from "vitest";
import z, { ZodError } from "zod";
import { BJJClassSchema } from "../../src/domain/entities/schemas/bjjClassSchema";
import { BJJClass } from "../../src/domain/entities/classes";
import request from 'supertest'
import { app } from "../../src/app";
import { App } from "supertest/types";
import { FastifyInstance } from "fastify";

 
const database = {
    getAllClasses: () =>  [
        {
          name: "Foundations of BJJ: Mastering the Basics",
          time: new Date("2024-11-22T09:00:00"),
          level: "Beginner",
        },
        {
          name: "Advanced Guard Passing Strategies",
          time: new Date("2024-11-23T14:30:00"),
          level: "Advanced",
        },
        {
          name: "Introduction to No-Gi Grappling",
          time: new Date("2024-11-24T10:00:00"),
          level: "Beginner",
        },
        {
          name: "Escapes and Counters: Getting Out of Trouble",
          time: new Date("2024-11-25T13:00:00"),
          level: "Intermediate",
        },
        {
          name: "Leg Locks: Fundamentals and Defense",
          time: new Date("2024-11-26T15:00:00"),
          level: "Intermediate",
        },
        {
          name: "Submission Chains and Flow Drills",
          time: new Date("2024-11-27T11:00:00"),
          level: "Intermediate",
        },
        {
          name: "Defensive Techniques: Surviving Bad Positions",
          time: new Date("2024-11-28T16:00:00"),
          level: "Beginner",
        },
        {
          name: "Competition Prep: Strategies and Tactics",
          time: new Date("2024-11-29T09:30:00"),
          level: "Advanced",
        },
        {
          name: "Takedowns for BJJ: Judo and Wrestling Crossovers",
          time: new Date("2024-11-30T14:00:00"),
          level: "Intermediate",
        },
        {
          name: "Exploring Advanced Guard Systems",
          time: new Date("2024-12-01T10:30:00"),
          level: "Advanced",
        },
      ]
}


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
        it("should return all classes when the endpoint is actioned", async ()  =>{
            const getClassesSpy = vi.spyOn(database,'getAllClasses')
            const expectedClasses = [
                {
                  name: "Foundations of BJJ: Mastering the Basics",
                  time: new Date("2024-11-22T09:00:00"),
                  level: "Beginner",
                },
                {
                  name: "Advanced Guard Passing Strategies",
                  time: new Date("2024-11-23T14:30:00"),
                  level: "Advanced",
                },
                {
                  name: "Introduction to No-Gi Grappling",
                  time: new Date("2024-11-24T10:00:00"),
                  level: "Beginner",
                },
                {
                  name: "Escapes and Counters: Getting Out of Trouble",
                  time: new Date("2024-11-25T13:00:00"),
                  level: "Intermediate",
                },
                {
                  name: "Leg Locks: Fundamentals and Defense",
                  time: new Date("2024-11-26T15:00:00"),
                  level: "Intermediate",
                },
                {
                  name: "Submission Chains and Flow Drills",
                  time: new Date("2024-11-27T11:00:00"),
                  level: "Intermediate",
                },
                {
                  name: "Defensive Techniques: Surviving Bad Positions",
                  time: new Date("2024-11-28T16:00:00"),
                  level: "Beginner",
                },
                {
                  name: "Competition Prep: Strategies and Tactics",
                  time: new Date("2024-11-29T09:30:00"),
                  level: "Advanced",
                },
                {
                  name: "Takedowns for BJJ: Judo and Wrestling Crossovers",
                  time: new Date("2024-11-30T14:00:00"),
                  level: "Intermediate",
                },
                {
                  name: "Exploring Advanced Guard Systems",
                  time: new Date("2024-12-01T10:30:00"),
                  level: "Advanced",
                },
              ]
            getClassesSpy.mockResolvedValue(expectedClasses)
            const response = await request(app.server).get('/classes');
            expect(response.status).toBe(200)
            
        } )

        
    }
)


