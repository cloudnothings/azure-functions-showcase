import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const mutator = trpc.twilio.schedule.useMutation();
  const [to, setTo] = useState("");

  const handleClick = async () => {
    await mutator.mutateAsync(
      {
        to: to,
      },
      {
        onSuccess: (data) => {
          console.log("data", data);
          setTo("");
        },
      }
    );
  };
  return (
    <>
      <Head>
        <title>catfactsnow</title>
        <meta name="description" content="cat facts text app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Cat Facts <span className="text-[hsl(280,100%,70%)]">NOW</span>
          </h1>

          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
            <h3 className="text-center text-2xl font-bold">
              Enter a phone number with country code:
            </h3>
            <div className="text-center text-lg">
              <input
                className="border-b border-white/50 bg-transparent focus:border-white/100 focus:outline-none"
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. +1 555-555-5555"
              />
            </div>
          </div>
          <button
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            onClick={handleClick}
          >
            {"🐱"}
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
