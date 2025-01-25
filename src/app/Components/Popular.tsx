// "use client";

// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { CiHeart } from "react-icons/ci";
// import { AiFillHeart } from "react-icons/ai";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug: { current: string };
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const Popular = () => {
//   const [likedCars, setLikedCars] = useState<number[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);

//   const toggleLike = (index: number) => {
//     setLikedCars((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == 'car' && "popular" in tags]{
//         name,
//         type,
//         fuelCapacity,
//         transmission,
//         seatingCapacity,
//         pricePerDay,
//         slug,
//         image {
//           asset -> {
//             url
//           }
//         }
//       }`;
//       const result = await client.fetch(query);
//       setProducts(result);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="text-base text-gray-400 mx-4 sm:mx-6 lg:mx-12 my-12">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
//         Popular Cars
//       </h2>
//       <div className="text-right mb-4">
//         <Link href={`/Category`}>
//           <button className="hover:underline text-blue-700 transition duration-200 ease-in-out">
//             View All
//           </button>
//         </Link>
//       </div>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {products.map((product: Product, index: number) => (
//           <div
//             key={index}
//             className="flex flex-col p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative"
//           >
//             <div className="flex flex-col mb-4">
//               <div className="text-xl font-semibold text-gray-900 flex items-center justify-between">
//                 {product.name}
//                 <div
//                   className="cursor-pointer text-xl"
//                   onClick={() => toggleLike(index)}
//                 >
//                   {likedCars.includes(index) ? (
//                     <AiFillHeart className="text-red-600 transform hover:scale-125 transition-transform duration-300" />
//                   ) : (
//                     <CiHeart className="text-gray-400 hover:text-red-600 transition-colors duration-300" />
//                   )}
//                 </div>
//               </div>
//               <div className="mt-1 text-sm text-gray-500">{product.type}</div>
//             </div>

//             {/* Updated to use Next.js Image */}
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={400}
//                 height={300}
//                 className="object-contain self-center max-w-full h-48 mb-4 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
//               />
//             )}

//             <div className="flex flex-col gap-2 text-sm font-medium text-gray-500 mb-4">
//               <div>Fuel Capacity: {product.fuelCapacity}L</div>
//               <div>Seating Capacity: {product.seatingCapacity}</div>
//               <div>Transmission: {product.transmission}</div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="text-xl font-bold text-gray-900">
//                 {product.pricePerDay}
//               </div>
//               <Link href={`/car/${product.slug.current}`}>
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-transform duration-300">
//                   Rent Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;
// "use client";

// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { CiHeart } from "react-icons/ci";
// import { AiFillHeart } from "react-icons/ai";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug: { current: string };
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const Popular = () => {
//   const [likedCars, setLikedCars] = useState<number[]>([]);
//   const [notifications, setNotifications] = useState<string[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);

//   const toggleLike = (index: number) => {
//     setLikedCars((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );

//     // Add notification when liking a car
//     if (!likedCars.includes(index)) {
//       const carName = products[index]?.name;
//       setNotifications((prev) => [...prev, `${carName} liked`]);

//       // Remove the notification after 3 seconds
//       setTimeout(() => {
//         setNotifications((prev) => prev.filter((n) => n !== `${carName} liked`));
//       }, 2000);
//     }
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == 'car' && "popular" in tags]{
//         name,
//         type,
//         fuelCapacity,
//         transmission,
//         seatingCapacity,
//         pricePerDay,
//         slug,
//         image {
//           asset -> {
//             url
//           }
//         }
//       }`;
//       const result = await client.fetch(query);
//       setProducts(result);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="text-base text-gray-400 mx-4 sm:mx-6 lg:mx-12 my-12">
//       {/* Notification Area */}
//       <div className="fixed top-4 right-4 z-50">
//         {notifications.map((notification, index) => (
//           <div
//             key={index}
//             className="bg-blue-600 text-white px-4 py-2 rounded shadow-md mb-2 animate-bounce"
//           >
//             {notification}
//           </div>
//         ))}
//       </div>

//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
//         Popular Cars
//       </h2>
//       <div className="text-right mb-4">
//         <Link href={`/Category`}>
//           <button className="hover:underline text-blue-700 transition duration-200 ease-in-out">
//             View All
//           </button>
//         </Link>
//       </div>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {products.map((product: Product, index: number) => (
//           <div
//             key={index}
//             className="flex flex-col p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative"
//           >
//             <div className="flex flex-col mb-4">
//               <div className="text-xl font-semibold text-gray-900 flex items-center justify-between">
//                 {product.name}
//                 <div
//                   className="cursor-pointer text-xl"
//                   onClick={() => toggleLike(index)}
//                 >
//                   {likedCars.includes(index) ? (
//                     <AiFillHeart className="text-red-600 transform hover:scale-125 transition-transform duration-300" />
//                   ) : (
//                     <CiHeart className="text-gray-400 hover:text-red-600 transition-colors duration-300" />
//                   )}
//                 </div>
//               </div>
//               <div className="mt-1 text-sm text-gray-500">{product.type}</div>
//             </div>

//             {/* Updated to use Next.js Image */}
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={400}
//                 height={300}
//                 className="object-contain self-center max-w-full h-48 mb-4 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
//               />
//             )}

//             <div className="flex flex-col gap-2 text-sm font-medium text-gray-500 mb-4">
//               <div>Fuel Capacity: {product.fuelCapacity}L</div>
//               <div>Seating Capacity: {product.seatingCapacity}</div>
//               <div>Transmission: {product.transmission}</div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="text-xl font-bold text-gray-900">
//                 {product.pricePerDay}
//               </div>
//               <Link href={`/car/${product.slug.current}`}>
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-transform duration-300">
//                   Rent Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;
// "use client";

// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { CiHeart } from "react-icons/ci";
// import { AiFillHeart } from "react-icons/ai";
// import Image from "next/image";
// import Link from "next/link";

// interface Product {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug: { current: string };
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const Popular = () => {
//   const [likedCars, setLikedCars] = useState<string[]>([]); // Store slugs of liked cars
//   const [notifications, setNotifications] = useState<string[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);

//   // Load liked cars from localStorage on component mount
//   useEffect(() => {
//     const savedLikedCars = JSON.parse(localStorage.getItem("likedCars") || "[]");
//     setLikedCars(savedLikedCars);
//   }, []);

//   // Save liked cars to localStorage whenever the state changes
//   useEffect(() => {
//     localStorage.setItem("likedCars", JSON.stringify(likedCars));
//   }, [likedCars]);

//   const toggleLike = (slug: string, carName: string) => {
//     setLikedCars((prev) =>
//       prev.includes(slug)
//         ? prev.filter((s) => s !== slug) // Remove from liked
//         : [...prev, slug] // Add to liked
//     );

//     // Add notification when liking a car
//     if (!likedCars.includes(slug)) {
//       setNotifications((prev) => [...prev, `${carName} added to Wishlist!`]);

//       // Remove the notification after 2 seconds
//       setTimeout(() => {
//         setNotifications((prev) =>
//           prev.filter((n) => n !== `${carName} added to Wishlist!`)
//         );
//       }, 2000);
//     }
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `*[_type == 'car' && "popular" in tags]{
//         name,
//         type,
//         fuelCapacity,
//         transmission,
//         seatingCapacity,
//         pricePerDay,
//         slug,
//         image {
//           asset -> {
//             url
//           }
//         }
//       }`;
//       const result = await client.fetch(query);
//       setProducts(result);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="text-base text-gray-400 mx-4 sm:mx-6 lg:mx-12 my-12">
//       {/* Notification Area */}
//       <div className="fixed top-4 right-4 z-50">
//         {notifications.map((notification, index) => (
//           <div
//             key={index}
//             className="bg-blue-600 text-white px-4 py-2 rounded shadow-md mb-2 animate-bounce"
//           >
//             {notification}
//           </div>
//         ))}
//       </div>

//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
//         Popular Cars
//       </h2>
//       <div className="text-right mb-4">
//         <Link href={`/Category`}>
//           <button className="hover:underline text-blue-700 transition duration-200 ease-in-out">
//             View All
//           </button>
//         </Link>
//       </div>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {products.map((product: Product, index: number) => (
//           <div
//             key={index}
//             className="flex flex-col p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative"
//           >
//             <div className="flex flex-col mb-4">
//               <div className="text-xl font-semibold text-gray-900 flex items-center justify-between">
//                 {product.name}
//                 <div
//                   className="cursor-pointer text-xl"
//                   onClick={() => toggleLike(product.slug.current, product.name)} // Use slug for toggle
//                 >
//                   {likedCars.includes(product.slug.current) ? (
//                     <AiFillHeart className="text-red-600 transform hover:scale-125 transition-transform duration-300" />
//                   ) : (
//                     <CiHeart className="text-gray-400 hover:text-red-600 transition-colors duration-300" />
//                   )}
//                 </div>
//               </div>
//               <div className="mt-1 text-sm text-gray-500">{product.type}</div>
//             </div>

//             {/* Updated to use Next.js Image */}
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={400}
//                 height={300}
//                 className="object-contain self-center max-w-full h-48 mb-4 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
//               />
//             )}

//             <div className="flex flex-col gap-2 text-sm font-medium text-gray-500 mb-4">
//               <div>Fuel Capacity: {product.fuelCapacity}L</div>
//               <div>Seating Capacity: {product.seatingCapacity}</div>
//               <div>Transmission: {product.transmission}</div>
//             </div>

//             <div className="flex justify-between items-center">
//               <div className="text-xl font-bold text-gray-900">
//                 {product.pricePerDay}
//               </div>
//               <Link href={`/car/${product.slug.current}`}>
//                 <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-transform duration-300">
//                   Rent Now
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

     
      
//     </div>
//   );
// };

// export default Popular;
// components/Popular.tsx
"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/app/context/wishlistContext";

interface Product {
  name: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
  };
}

const Popular = () => {
  const { likedCars, toggleLike } = useWishlist(); // Access the wishlist context
  const [notifications, setNotifications] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const handleLike = (slug: string, carName: string) => {
    toggleLike(slug); // Toggle the liked state

    // Add notification when liking a car
    if (!likedCars.includes(slug)) {
      setNotifications((prev) => [...prev, `${carName} added to Wishlist!`]);

      // Remove the notification after 2 seconds
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((n) => n !== `${carName} added to Wishlist!`)
        );
      }, 2000);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == 'car' && "popular" in tags]{
        name,
        type,
        fuelCapacity,
        transmission,
        seatingCapacity,
        pricePerDay,
        slug,
        image {
          asset -> {
            url
          }
        }
      }`;
      const result = await client.fetch(query);
      setProducts(result);
    };
    fetchProducts();
  }, []);

  return (
    <div className="text-base text-gray-400 mx-4 sm:mx-6 lg:mx-12 my-12">
      {/* Notification Area */}
      <div className="fixed top-4 right-4 z-50">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow-md mb-2 animate-bounce"
          >
            {notification}
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center sm:text-left">
        Popular Cars
      </h2>
      <div className="text-right mb-4">
        <Link href={`/Category`}>
          <button className="hover:underline text-blue-700 transition duration-200 ease-in-out">
            View All
          </button>
        </Link>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product: Product, index: number) => (
          <div
            key={index}
            className="flex flex-col p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out relative"
          >
            <div className="flex flex-col mb-4">
              <div className="text-xl font-semibold text-gray-900 flex items-center justify-between">
                {product.name}
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => handleLike(product.slug.current, product.name)} // Use handleLike function
                >
                  {likedCars.includes(product.slug.current) ? (
                    <AiFillHeart className="text-red-600 transform hover:scale-125 transition-transform duration-300" />
                  ) : (
                    <CiHeart className="text-gray-400 hover:text-red-600 transition-colors duration-300" />
                  )}
                </div>
              </div>
              <div className="mt-1 text-sm text-gray-500">{product.type}</div>
            </div>

            {/* Updated to use Next.js Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={400}
                height={300}
                className="object-contain self-center max-w-full h-48 mb-4 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            )}

            <div className="flex flex-col gap-2 text-sm font-medium text-gray-500 mb-4">
              <div>Fuel Capacity: {product.fuelCapacity}L</div>
              <div>Seating Capacity: {product.seatingCapacity}</div>
              <div>Transmission: {product.transmission}</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-gray-900">
                {product.pricePerDay}
              </div>
              <Link href={`/car/${product.slug.current}`}>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-transform duration-300">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;