import { FastifyInstance, FastifyRequest } from "fastify";

export async function classesRoutes(app: FastifyInstance){
    app.get("/classes", async (request, response)=>{
        response.send({"classes":[
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
          ]})
      })
}