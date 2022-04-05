import { Button } from "@components/index";
import Container from "@components/Container";
import { useRouter } from "next/router";
import { H1 } from "@components/UI/Text";

export default function NotAuthenticated() {
  const router = useRouter();
  return (
    <Container type="center-vertical" col>
      <div className="mb-5 mt-5 w-full text-center">
        <H1>This page requires authentication</H1>
      </div>
      <img
        src="/security_SVG.svg"
        //  layout="fill"
        className="w-full md:w-2/4 p-4"
        alt=""
      />
      <div className="w-1/2 mt-2 flex">
        <Button
          classes="w-full !py-3"
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
    </Container>
  );
}
