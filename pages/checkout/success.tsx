import Image from "next/image";

export default function Success() {
  return (
    <main className="w-full h-screen p-3 relative flex justify-center items-center">
      <section className="w-4/5 h-4/5 relative">
        <Image src="/success.svg" layout="fill" alt="success" />
      </section>
    </main>
  );
}
