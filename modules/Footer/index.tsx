import { FaGithub, FaFacebook, FaDiscord } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex flex-col w-full  bg-zinc-900  sm:px-40 py-6 mt-2">
      <section className=" flex flex-col md:flex-row justify-center text-gray-500  pt-4 pb-12">
        <section className=" flex-1 pr-4 pl-4 pb-6 flex flex-col items-center md:justify-start md:items-start">
          <p className="text-purple-50 font-bold pb-4 text-lg">Adress</p>
          <p>elektronowa 18,</p>
          <p>21-370, </p>
          <p>Piotrków Trybunalskich</p>
        </section>
        <section className=" flex-1 pr-4 pl-4 pb-6 flex flex-col items-center md:justify-start md:items-start">
          <p className="text-purple-50 font-bold pb-4 text-lg">About us</p>
          <p>We have huge canons</p>
        </section>
        <section className=" flex-1 pr-4 pl-4 pb-6 flex flex-col items-center md:justify-start md:items-start">
          <p className="text-purple-50 font-bold pb-4 text-lg">
            Around the web
          </p>
          <div className="flex space-x-4">
            <a className="text-4xl " href="https://github.com/ZSEIT-Praktyki">
              <FaGithub />
            </a>
            <a className="text-4xl" href="?">
              <FaFacebook />
            </a>
            <a className="text-4xl" href="?">
              <FaDiscord />
            </a>
          </div>
        </section>

        <section className="flex-1  pr-4 pl-4 pb-6 flex flex-col items-center md:justify-start md:items-start">
          <p className="text-purple-50 font-bold pb-4 text-lg">Contact</p>
          <p>mail@gmail.com </p>
          <p>111 222 333</p>
        </section>
      </section>

      <section>
        <p className=" flex justify-center w-full text-gray-300  bg-zinc-800 p-1 font-bold pt-4 pb-4 ">
          Praktyki Elektron®
        </p>
      </section>
    </footer>
  );
}
