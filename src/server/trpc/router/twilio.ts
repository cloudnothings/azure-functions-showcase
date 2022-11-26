import { env } from "../../../env/server.mjs";
import { router, publicProcedure } from "../trpc";
import { Twilio } from "twilio";
import { z } from "zod";

export const twilioRouter = router({
  schedule: publicProcedure
  .input(z.object({ to: z.string() }))
  .mutation(async ({input}) => {
    const catFact = await fetch("https://catfact.ninja/fact").then((res) => res.json());
    const accountSid = env.TWILIO_ACCOUNT_SID; 
    const authToken = env.TWILIO_AUTH_TOKEN; 
    const twilioNumber = env.TWILIO_NUMBER;
    const client = new Twilio(accountSid, authToken);
    return client.messages.create({
      body: catFact.fact,
      to: input.to,
      from: twilioNumber,
    });
  }),
});

