import { router } from "../trpc";
import { catRouter } from "./cat";
import { exampleRouter } from "./example";
import { twilioRouter } from "./twilio";

export const appRouter = router({
  example: exampleRouter,
  cat: catRouter,
  twilio: twilioRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
