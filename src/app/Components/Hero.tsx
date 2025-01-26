import Image from "next/image";
import bg from "../../../public/bg.png";
import bg2 from "../../../public/bg2.jpg";
import car1 from "../../../public/car.png";
import car2 from "../../../public/car(1).png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 my-8 items-center px-4">
      {/* Left Section */}
      <div className="relative w-full  md:max-w-md lg:max-w-lg">
        <Image src={bg} alt="Background" className="rounded-lg" />
        <div className="absolute top-8 left-4 text-gray-300">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
            The Best Platform
            <br />
            for Car Rental
          </p>
          <div className="mt-4">
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed">
              Ease of doing a car rental safely
              <br />
              and reliably. Of course at a low price.
            </p>
            <Link href="/Detail">
              <button className="bg-blue-600 rounded p-2 px-4 mt-4 text-sm hover:bg-blue-700">
                Rental Car
              </button>
            </Link>
          </div>
        </div>
        {/* Car Image at Right Bottom */}
        <Image
          src={car1}
          alt="Car"
          className="absolute bottom-4 right-4 w-40 sm:w-52 lg:w-60"
        />
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-lg md:max-w-md lg:max-w-lg">
        <Image src={bg2} alt="Background" className="rounded-lg" />
        <div className="absolute top-8 left-4 text-gray-300">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight capitalize">
            Easy way to rent a
            <br />
            car at a low price
          </p>
          <div className="mt-4">
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed capitalize">
              Providing cheap car rental services
              <br /> and safe and comfortable facilities.
            </p>
            <Link href="/Detail">
              <button className="bg-blue-500 rounded p-2 px-4 mt-4 text-sm hover:bg-blue-600">
                Rental Car
              </button>
            </Link>
          </div>
        </div>
        {/* Car Image at Right Bottom */}
        <Image
          src={car2}
          alt="Car"
          className="absolute bottom-4 right-4 w-40 sm:w-52 lg:w-60"
        />
      </div>
    </div>
  );
};

export default Hero;
