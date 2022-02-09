import { Button } from "@components/index";
import Image from "next/image";

export default function Product() {
  return (
    <section className="bg-black  rounded-xl max-w-xs m-2">
      <div className="p-2">
        <Image
          src={require("../../utils/assets/images/placeholder.png")}
          layout="responsive"
          alt="image"
        />
      </div>
      <h2 className="font-bold text-white p-2 text-3xl">Title</h2>
      <p className="text-white p-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos molestiae
        consequuntur itaque vitae doloremque reprehenderit dolore optio quisquam
        aliquid recusandae blanditiis neque nostrum non veniam, quo quibusdam
        molestias iste odio.
      </p>
      <div className="flex flex-row justify-between">
        <Button variants="ok">Buy</Button>
        <Button>Cart</Button>
      </div>
    </section>
  );
}
