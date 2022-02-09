import BottomTab from "@modules/BottomTab";
import Product from "@modules/Product";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <div className="p-2 flex flex-wrap justify-center max-w-screen-2xl">
        {new Array(10).fill({}).map((_, i) => (
          <Product key={i.toString()} />
        ))}
      </div>

      <BottomTab></BottomTab>
    </main>
  );
}
