import { router } from "../trpc";
import { catRouter } from "./cat";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  cat: catRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
