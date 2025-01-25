// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import { client } from "@/sanity/lib/client";


// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [price, setPrice] = useState(0);
//   const [selectedType, setSelectedType] = useState("");
//   const [cars, setCars] = useState<Car[]>([]);

//   interface Car {
//     name: string;
//     type: string;
//     fuelCapacity: number;
//     transmission: string;
//     seatingCapacity: number;
//     pricePerDay: number;
//     slug: string;
//     image: {
//       asset: {
//         url: string;
//       };
//     };
//   }

//   // Toggle sidebar visibility
//   const toggleSidebar = () => setIsOpen(!isOpen);

//   // Fetch cars
//   const fetchCars = useCallback(async () => {
//     const query = `*[_type == "car" ${
//       selectedType ? `&& type == "${selectedType}"` : ""
//     }]{
//       name,
//       type,
//       fuelCapacity,
//       transmission,
//       seatingCapacity,
//       pricePerDay,
//       slug,
//       image {
//         asset -> {
//           url
//         }
//       }
//     }`;

//     const result = await client.fetch(query);
//     setCars(result);
//   }, [selectedType]);

//   useEffect(() => {
//     fetchCars();
//   }, [fetchCars]);

//   return (
//     <div className="relative flex">
//       <button
//         onClick={toggleSidebar}
//         className="sm:hidden absolute top-4 left-4 p-2 bg-blue-600 text-white rounded shadow-md focus:outline-none z-30"
//       >
//         {isOpen ? "Close" : "Menu"}
//       </button>

//       <div
//         className={`fixed inset-0 bg-black/30 z-10 transition-opacity duration-300 ease-in-out ${
//           isOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         } sm:hidden`}
//         onClick={toggleSidebar}
//       ></div>

//       <div
//         className={`top-0 left-0 w-64 bg-white shadow-lg p-4 transition-transform transform z-20 sm:translate-x-0 sm:w-64 sm:block ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="scroll-smooth h-full">
//           <div className="mb-8">
//             <h2 className="text-lg font-bold mb-3 text-gray-500">T Y P E</h2>
//             <ul className="space-y-3">
//               {["Sport", "SUV", "Sedan", "Hatchback", "Gasoline", "Electric", "Hybrid", "Diesel"].map(
//                 (type, index) => (
//                   <li key={index} className="flex items-center text-sm text-gray-700">
//                     <input
//                       type="radio"
//                       name="carType"
//                       id={type}
//                       value={type}
//                       onChange={(e) => setSelectedType(e.target.value)}
//                       checked={selectedType === type}
//                       className="w-4 h-4 border-gray-300 rounded accent-blue-600 focus:ring focus:ring-blue-300"
//                     />
//                     <label htmlFor={type} className="ml-3 cursor-pointer">
//                       {type}
//                     </label>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-bold mb-3 text-gray-500">P R I C E</h2>
//             <div className="text-sm text-gray-700">
//               Max. <span className="text-gray-900 font-semibold">${price}</span>
//             </div>
//             <input
//               type="range"
//               max="1000"
//               min="0"
//               value={price}
//               onChange={(e) => setPrice(Number(e.target.value))}
//               className="w-full mt-4 accent-blue-600"
//             />
//           </div>
//         </div>
//       </div>

    
      
//     </div>
//   );
// };

// export default Sidebar;
// "use client";

// import Image from "next/image";
// import React, { useState } from "react";

// interface Car {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug: string;
//   image: { asset: { url: string } };
// }

// const Sidebar = ({ cars }: { cars: Car[] }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [price, setPrice] = useState(0);
//   const [selectedType, setSelectedType] = useState("");

//   const filteredCars = cars.filter(
//     (car) => car.pricePerDay <= price && (!selectedType || car.type === selectedType)
//   );

//   return (
//     <div className="relative flex">
//       {/* Sidebar toggle button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="sm:hidden absolute top-4 left-4 p-2 bg-blue-600 text-white rounded shadow-md focus:outline-none z-30"
//       >
//         {isOpen ? "Close" : "Menu"}
//       </button>

//       {/* Sidebar content */}
//       <div
//         className={`top-0 left-0 w-64 bg-white shadow-lg p-4 transition-transform transform z-20 sm:translate-x-0 sm:w-64 sm:block ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <h2 className="text-lg font-bold mb-3 text-gray-500">T Y P E</h2>
//         <ul>
//           {["Sport", "SUV", "Sedan", "Hatchback"].map((type) => (
//             <li key={type}>
//               <input
//                 type="radio"
//                 id={type}
//                 value={type}
//                 checked={selectedType === type}
//                 onChange={() => setSelectedType(type)}
//               />
//               <label htmlFor={type}>{type}</label>
//             </li>
//           ))}
//         </ul>
//         <h2 className="text-lg font-bold mb-3 text-gray-500">P R I C E</h2>
//         <input
//           type="range"
//           min={0}
//           max={1000}
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//         />
//       </div>

//       {/* Filtered Cars */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
//         {filteredCars.map((car) => (
//           <div key={car.slug}>
//             <Image src={car.image.asset.url} alt={car.name} />
//             <h3>{car.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/image"; // Import utility for Sanity image URLs

interface Car {
  name: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  slug: string;
  image: { asset: { url: string } };
}

const Sidebar = ({ cars }: { cars: Car[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(1000); // Default max price
  const [selectedType, setSelectedType] = useState("");

  const filteredCars = cars.filter(
    (car) => car.pricePerDay <= price && (!selectedType || car.type === selectedType)
  );

  return (
    <div className="relative flex">
      {/* Sidebar toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden absolute top-4 left-4 p-2 bg-blue-600 text-white rounded shadow-md focus:outline-none z-30"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar content */}
      <div
        className={`top-0 left-0 w-64 bg-white shadow-lg p-4 transition-transform duration-300 transform z-20 sm:translate-x-0 sm:w-64 sm:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold mb-3 text-gray-500">T Y P E</h2>
        <ul>
          {["Sport", "SUV", "Sedan", "Hatchback"].map((type) => (
            <li key={type} className="mb-2">
              <label htmlFor={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={type}
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  className="form-radio"
                />
                {type}
              </label>
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-bold mb-3 text-gray-500">P R I C E</h2>
        <div className="flex items-center">
          <input
            type="range"
            min={0}
            max={1000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="flex-grow mr-2"
          />
          <span>${price}</span>
        </div>
      </div>

      {/* Filtered Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {filteredCars.map((car) => (
          <div key={car.slug} className="p-4 border rounded-lg shadow-md">
            <Image
              src={urlFor(car.image).url()}
              alt={car.name}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">{car.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
