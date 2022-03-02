import { useSelector } from "@utils/store/store";
import useUploadListing from "@utils/hooks/useUploadListing";
import AddForm from "@modules/AddForm";
import Head from "next/head";
import Image from "next/image";
import Container from "@components/Container";
import { H1 } from "@components/UI/Text";
import { Button } from "@components/index";
import { useRouter } from "next/router";

export default function AddListing() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const router = useRouter();
  const { onSubmit } = useUploadListing();

  if (!isLoggedIn)
    return (
      <Container type="center-vertical" col>
        <Head>
          <title>Sign in first</title>
        </Head>

        <div className="mb-5 mt-5 w-full text-center">
          <H1>This page requires authentication</H1>
        </div>
        <img
          src="/security_SVG.svg"
          //  layout="fill"
          className="w-full md:w-2/4"
          alt=""
        />
        <div className="w-1/2 mt-2">
          <Button
            classes="w-full !py-3"
            variants="fire"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </Button>
        </div>
      </Container>
    );

  return (
    <main className="w-full h-full flex justify-center">
      <Head>
        <title>Post a listing</title>
      </Head>
      <AddForm onSubmit={onSubmit} />
    </main>
  );
}
