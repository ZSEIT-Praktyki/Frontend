import Image from "next/image";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  console.log(router.query);

  return (
    <main className="w-full h-screen p-3 relative flex justify-center items-center">
      <section className="w-4/5 h-4/5 relative">
        <Image src="/success.svg" layout="fill" alt="success" />
      </section>
    </main>
  );
}
