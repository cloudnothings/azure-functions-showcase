import { router, publicProcedure } from "../trpc";

export const catRouter = router({
  getFact: publicProcedure.query(async () => {
    const result = await fetch("https://catfact.ninja/fact");
    return result.json();
  }),
});
