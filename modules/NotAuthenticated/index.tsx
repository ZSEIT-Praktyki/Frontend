import { Button } from "@components/index";
import { useRouter } from "next/router";

export default function NotAuthenticated() {
  const router = useRouter();
  return (
    <section className="flex flex-col w-full md:w-10/12 min-h-[calc(50vh+100px)] mx-auto justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold text-white md:text-center">
        Sign in to your account to get started
      </h1>
      <img
        src="/security_SVG.svg"
        //  layout="fill"
        className="w-80 md:w-1/2 p-4 mt-5"
        alt="decorative image of a security lock"
      />

      <div className="w-full flex-col sm:flex-row md:w-1/2 flex gap-2 mt-10">
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
