import { NextPageContext } from "next";
import Head from "next/head";

const url =
  "https://i.kym-cdn.com/entries/icons/mobile/000/025/382/Screen_Shot_2018-02-06_at_3.37.14_PM.jpg";

export async function getServerSideProps({ query }: NextPageContext) {
  const res = await fetch(`http://localhost:3001/listings/${query.id}`);
  const data = await res.json();

  if (data.statusCode === 404 || data.statusCode === 400) {
    return {
      props: {
        data: {},
        error: "Post not found",
      },
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default function Listing({ data }: any) {
  return (
    <main className="w-full flex flex-col items-center">
      <Head>
        <title>{data.title}</title>
      </Head>
      <section className="flex flex-col w-full xl:w-2/4 sm:w-3/4">
        <article className="p-2 mt-5">
          <img className="w-full rounded" src={url} alt="" />
          <div className="pt-2 flex overflow-scroll sm:overflow-hidden h-16 sm:h-24 mb-2">
            <img className="pr-2 rounded last:pr-0" src={url} alt="" />
            <img className="pr-2 rounded last:pr-0" src={url} alt="" />
            <img className="pr-2 rounded last:pr-0" src={url} alt="" />
            <img className="pr-2 rounded last:pr-0" src={url} alt="" />
          </div>
        </article>
        <article className="p-2">
          <h1 className="text-2xl sm:text-4xl text-white font-bold">
            {data.title}
          </h1>

          <h2 className="text-gray-300 mt-2 text-xl font-bold">
            Price: ${data.price / 100}
          </h2>
          <div className="mt-4 flex flex-row overflow-hidden">
            <span className="p-2 rounded border border-white text-white mr-2">
              Electronic
            </span>
            <span className="p-2 rounded border border-white text-white mr-2">
              Electronic
            </span>
            <span className="p-2 rounded border border-white text-white mr-2">
              Electronic
            </span>
            <span className="p-2 rounded border border-white text-white mr-2">
              Electronic
            </span>
          </div>
          <p className="mt-4 text-white p-2">{data.description}</p>
        </article>
      </section>
    </main>
  );
}
