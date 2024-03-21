import { H2, H4 } from "@components/UI/Text";
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
    <section>
      <div className="mb-2">
        <H4>Select address</H4>
      </div>

      {data.map(({ name, address_id, surname, city, phone, state, street }) => (
        <li
          onClick={() => setAddress(address_id)}
          key={address_id}
          className={` bg-zinc-950 rounded-lg p-2 cursor-pointer border-2 border-zinc-800 items-center w-full flex justify-between flex-row mb-3 ${
            address === address_id && "!border-purple-600"
          }`}
        >
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

          <button>
            {address === address_id ? (
              <AiFillCheckSquare size={30} />
            ) : (
              <AiOutlineCheckSquare size={30} />
            )}
          </button>
        </li>
      ))}
    </section>
  );
}
