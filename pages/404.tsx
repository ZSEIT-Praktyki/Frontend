import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen relative">
      <Image src="/404.svg" layout="fill" alt="Success" />
    </main>
  );
}
