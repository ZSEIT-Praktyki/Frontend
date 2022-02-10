import BottomTab from "@modules/BottomTab";
import Product from "@modules/Product";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <div className="p-2 w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 xl:w-2/3">
        {new Array(10).fill({}).map((_, i) => (
          <Product key={i.toString()} />
        ))}
      </div>

      <BottomTab></BottomTab>
    </main>
  );
}
