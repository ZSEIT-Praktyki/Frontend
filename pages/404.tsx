import Image from "next/image";
import Container from "@components/Container/index";

export default function NotFound() {
  return (
    <main className="w-full min-h-[calc(100vh-90px)] p-10 flex justify-center items-center">
      <Image src="/404.svg" width={700} height={800} alt="Success" />
    </main>
  );
}
