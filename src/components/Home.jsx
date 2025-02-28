import { FaTv } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiWashingMachine } from "react-icons/gi";
import { PiTelevisionBold, PiBathtub } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      id: "air-conditioner",
      icon: (
        <TbAirConditioning className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Air Conditioner",
    },
    {
      id: "washing-machine",
      icon: (
        <GiWashingMachine className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Washing Machine",
    },
    {
      id: "refrigerator",
      icon: (
        <CgSmartHomeRefrigerator className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Refrigerator",
    },
    {
      id: "tv",
      icon: (
        <FaTv className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "TV & Appliances",
    },
    {
      id: "microwave-oven",
      icon: (
        <PiTelevisionBold className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Microwave Oven",
    },
    {
      id: "geyser",
      icon: (
        <PiBathtub className="w-16 sm:w-32 h-16 sm:h-32 mx-auto mt-4 text-black" />
      ),
      name: "Geyser (Water Heater)",
    },
  ];
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-black text-yellow-500 w-full h-auto pt-8">
        {/* Top Section - Logo and Business Name */}
        <div className="sm:absolute flex justify-between sm:justify-start sm:w-1/2 items-center sm:items-start px-4 bg-black">
          <div className="w-1/2 sm:w-auto flex justify-center px-4 mr-4">
            <img
              src="/logo.jpeg"
              alt="Shiv Shakti Home Appliance Services"
              className="w-24 sm:w-32 h-24 sm:h-32"
            />
          </div>
          <div className="w-1/2 sm:w-auto text-left">
            <h1 className="text-2xl font-bold">
              Shiv Shakti Home Appliance Service's
            </h1>
            <p className="text-lg font-semibold mt-2 hidden sm:block ">
              Con. No. 6375477987
            </p>
          </div>
        </div>
        <p className="text-lg font-semibold mt-2 px-4 sm:hidden">
          Con. No. 6375477987
        </p>

        {/* Middle Section - Appliance Images in Right-Aligned Pyramid Shape */}
        <div className="flex justify-end items-end sm:w-[75%] right-0 mt-6 bg-yellow-500 p-6 pb-16 sm:pb-32 rounded-tl-full overflow-hidden relative ml-auto">
          <div
            className="grid gap-4 mt-10"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, auto)",
              justifyItems: "end", // Align all items to the right
              alignItems: "end",
              gridTemplateAreas: `
        ". . img1"
        ". img2 img3"
        "img4 img5 img6"
      `,
            }}
          >
            <img
              src="/vite.svg"
              alt="Appliance 1"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img1" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 2"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img2" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 3"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img3" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 4"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img4" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 5"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img5" }}
            />
            <img
              src="/vite.svg"
              alt="Appliance 6"
              className="w-24 h-24 rounded-lg"
              style={{ gridArea: "img6" }}
            />
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full mt-1"></div>

        {/* Bottom Section - Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center pt-6 pb-6 px-4 bg-yellow-500">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="relative border-2 border-black p-2 block"
            >
              <span className="absolute top-0 left-4 sm:left-12 right-4 sm:right-12 h-[6px] bg-black rounded-br-2xl rounded-bl-2xl" />
              {service.icon}
              <p className="mt-2 font-semibold text-black">{service.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
