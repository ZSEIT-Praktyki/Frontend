import { H2 } from "@components/UI/Text";
import { useGetAddressesQuery } from "@utils/services/addressService";
import Image from "next/image";
import { AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai";

interface AddressProps {
  address: number;
  setAddress: (n: number) => void;
}

export default function SelectAddress({ address, setAddress }: AddressProps) {
  const { data = [] } = useGetAddressesQuery({});

  return (
    <section className="mt-3">
      <div className="mb-5 mt-2">
        <H2>Select address</H2>
      </div>

      {data.map(({ name, address_id, surname, city, phone, state, street }) => (
        <li
          onClick={() => setAddress(address_id)}
          key={address_id}
          className={` bg-gray-900 rounded-xl p-3 cursor-pointer border-2 border-gray-900 items-center w-full flex justify-between flex-row mb-3 ${
            address === address_id && "!border-purple-600"
          }`}
        >
          <div className="relative h-10 w-10">
            <Image
              src="/default-user-image.png"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="ml-2 flex  flex-row">
            <h2 className="text-gray-300 font-medium text-sm mr-2">
              {name} {surname}
            </h2>
            <h2 className="text-gray-300 font-medium text-sm mr-2">
              {city} {phone}
            </h2>
            <h2 className="text-gray-300 font-medium text-sm mr-2">
              {state} {street}
            </h2>
          </div>
          <div>
            <button>
              {address === address_id ? (
                <AiFillCheckSquare size={30} />
              ) : (
                <AiOutlineCheckSquare size={30} />
              )}
            </button>
          </div>
        </li>
      ))}
    </section>
  );
}
