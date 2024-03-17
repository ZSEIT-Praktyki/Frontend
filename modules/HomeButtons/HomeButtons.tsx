import { Button } from "@components/index";
import { useRouter } from "next/router";
import { useSelector } from "@utils/store/store";

export default function HomeButtons() {
  const router = useRouter();

  const { isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn ? (
    <>
      <Button
        variants="fire"
        classes="!py-3 w-full font-medium hover:scale-[1.1] "
        onClick={() => router.push("/listing/create")}
      >
        START SELLING
      </Button>
    </>
  ) : (
    <>
      <Button
        variants="fire"
        classes="w-1/2 w-full mr-2 !py-5 font-medium mb-5 xs:mb-0"
        onClick={() => router.push("/auth/login")}
      >
        LOGIN
      </Button>
      <Button
        variants="fire"
        classes="w-1/2 w-full !py-5 font-medium"
        onClick={() => router.push("/auth/register")}
      >
        REGISTER
      </Button>
    </>
  );
}
