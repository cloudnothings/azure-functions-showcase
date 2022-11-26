import { env } from "../../../env/server.mjs";
import { router, publicProcedure } from "../trpc";
import { Twilio } from "twilio";

export const twilioRouter = router({
  schedule: publicProcedure.mutation(async () => {
    const accountSid = env.TWILIO_ACCOUNT_SID; 
    const authToken = env.TWILIO_AUTH_TOKEN; 
    const twilioNumber = env.TWILIO_NUMBER;
    const client = new Twilio(accountSid, authToken);
    return client.messages.create({
      body: 'value 1',
      to: '+19499223891',
      from: twilioNumber,
    });
  }),
});


   
      // status_callback: 'https://eoirm8q4zdy0ixa.m.pipedream.net',
