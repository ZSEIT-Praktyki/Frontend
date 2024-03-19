import { Button } from "@components/index";
import Container from "@components/Container";
import { useRouter } from "next/router";
import { H1 } from "@components/UI/Text";

export default function NotAuthenticated() {
  const router = useRouter();
  return (
    <section className="flex flex-col w-10/12 min-h-screen mx-auto justify-center items-center h-4/5">
      <h1 className="text-5xl font-bold text-white text-center">
        Sign in to your account to access your sales, purchases and watchlist
      </h1>
      <img
        src="/security_SVG.svg"
        //  layout="fill"
        className="w-1/2 p-4 mt-5"
        alt=""
      />

      <div className="w-1/2 flex gap-2 mt-10">
        <Button
          classes="w-full !py-3 mr-2"
          variants="fire"
          onClick={() => router.push("/auth/login")}
        >
          Login to your account
        </Button>
        <Button
          classes="w-full !py-3"
          variants="fire"
          onClick={() => router.push("/auth/register")}
        >
          Create account
        </Button>
      </div>
    </section>
  );
}
