import { Button } from "@components/index";
import Container from "@components/Container";
import { useRouter } from "next/router";
import { H1 } from "@components/UI/Text";

export default function NotAuthenticated() {
  const router = useRouter();
  return (
    <section className="flex flex-col w-10/12 min-h-screen mx-auto justify-center items-center h-4/5">
      <img
        src="/security_SVG.svg"
        //  layout="fill"
        className="w-1/3 p-4"
        alt=""
      />

      <H1>This page requires authentication</H1>

      <div className="w-1/2 flex mt-10">
        <Button
          classes="w-full !py-3 mr-2"
          variants="fire"
          onClick={() => router.push("/auth/login")}
        >
          Login
        </Button>
        <Button
          classes="w-full !py-3"
          variants="fire"
          onClick={() => router.push("/auth/register")}
        >
          Register
        </Button>
      </div>
    </section>
  );
}
