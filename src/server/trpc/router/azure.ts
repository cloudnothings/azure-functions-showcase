import { router, publicProcedure } from "../trpc";

export const azureRouter = router({
  getFactAfter5Seconds: publicProcedure.query(async () => {
    const result = await fetch("https://catfact.ninja/fact");
    return result.json();
  }),
});
