import { NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      status: ctx.query.redirect_status,
    },
  };
}

export default function Success({ status }: { status: "failed" | "success" }) {
  return (
    <main className="w-full h-screen p-3 relative flex justify-center items-center">
      <Head>
        <title>Payment {status === "success" ? "succeeded" : "failed"}</title>
      </Head>
      <article className="w-4/5 h-4/5 relative flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl text-green-500 font-bold mb-5">
          Payment {status}
        </h1>
        <section className="relative w-3/4 h-3/4 ">
          <Image src={"/success.svg"} layout="fill" />
        </section>
      </article>
    </main>
  );
}
