// "use client";
// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";

// interface Product {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug?: { current: string };
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const ProductDetail = ({ params }: { params: { slug: string } }) => {
//     const [product, setProduct] = useState<Product | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const query = `*[_type == 'car' && slug.current == $slug][0]{
//           name,
//           type,
//           fuelCapacity,
//           transmission,
//           seatingCapacity,
//           pricePerDay,
//           slug,
//           image {
//             asset -> {
//               url
//             }
//           }
//         }`;
//         const result = await client.fetch(query);
//         setProduct(result);
//       } catch (err) {
//         setError("Failed to fetch product. Please try again later.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [params.slug]);

//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-500">{error}</div>;
//   }

//   if (!product || !product.image || !product.image.asset || !product.image.asset.url) {
//     return <div className="text-center py-8">Product data is incomplete.</div>;
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
//       <img
//         src={product.image.asset.url}
//         alt={product.name}
//         className="object-cover rounded-lg mb-6"
//       />
//       <div className="space-y-4">
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Type:</span> {product.type}
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Price Per Day:</span> $
//           {product.pricePerDay}
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Seating Capacity:</span>{" "}
//           {product.seatingCapacity}
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Fuel Capacity:</span>{" "}
//           {product.fuelCapacity}L
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Transmission:</span>{" "}
//           {product.transmission}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
// "use client";

// import { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";

// interface Product {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug?: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
// }

// const ProductDetail = ({ slug }: { slug: string }) => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const query = `*[_type == 'car' && slug.current == $slug][0]{
//           name,
//           type,
//           fuelCapacity,
//           transmission,
//           seatingCapacity,
//           pricePerDay,
//           slug,
//           image {
//             asset -> {
//               url
//             }
//           }
//         }`;
//         const result = await client.fetch(query, { slug });
//         setProduct(result);
//       } catch (err) {
//         setError("Failed to fetch product. Please try again later.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [slug]);

//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-500">{error}</div>;
//   }

//   if (!product || !product.image || !product.image.asset || !product.image.asset.url) {
//     return <div className="text-center py-8">Product data is incomplete.</div>;
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
//       <img
//         src={product.image.asset.url}
//         alt={product.name}
//         className="object-cover rounded-lg mb-6"
//       />
//       <div className="space-y-4">
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Type:</span> {product.type}
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Price Per Day:</span> ${product.pricePerDay}
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Seating Capacity:</span> {product.seatingCapacity}
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Fuel Capacity:</span> {product.fuelCapacity}L
//         </p>
//         <p className="text-lg text-gray-700">
//           <span className="font-semibold">Transmission:</span> {product.transmission}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
// interface Product {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug: { current: string };
//   image: { asset: { url: string } };
// }

// const ProductDetail = ({ product }: { product: Product }) => {
//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <div className="lg:w-1/2 w-full">
//             {product.image ? (
//               <img
//                 alt="ecommerce"
//                 className="w-full object-cover object-center rounded-md"
//                 height={500}
//                 width={500}
//                 src={product.image.asset.url}
//               />
//             ) : (
//               <div>Image not available</div>
//             )}
//           </div>
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest">
//               {product.name}
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product.name}
//             </h1>
//             <p className="leading-relaxed text-sm sm:text-base">{product.type}</p>
//             <p className="leading-relaxed text-sm sm:text-base">{product.fuelCapacity}</p>
//             <p className="leading-relaxed text-sm sm:text-base">{product.seatingCapacity}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <span className="mr-3 text-2xl text-gray-900">
//                 {product.pricePerDay}
//               </span>
//             </div>
//             <p className="leading-relaxed text-sm sm:text-base">
//               This is a description for the {product.name}. It is a {product.type}{" "}
//               priced at {product.pricePerDay}.
//             </p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;
// import img2 from "../../../public/inside car.png";
// import car2 from "../../../public/inside-car-4.jpeg";
// import car3 from "../../../public/inside-car-5.jpg";
// import car4 from "../../../public/in car.png";
// import Image from "next/image";
// interface Product {
//   name: string;
//   type: string;
//   fuelCapacity: number;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   slug: { current: string };
//   image: { asset: { url: string } };
// }

// const ProductDetail = ({ product }: { product: Product }) => {
//   // Dynamically generate the description
//   const generateDescription = () => {
//     let description = `${product.name} is a ${product.type} vehicle with a fuel capacity of ${product.fuelCapacity} liters. `;

//     if (product.transmission.toLowerCase() === 'automatic') {
//       description += "It features a smooth automatic transmission for easy driving. ";
//     } else {
//       description += "It comes with a manual transmission for an engaging driving experience. ";
//     }

//     description += `With seating capacity for ${product.seatingCapacity} people, it is ideal for group travel. `;
//     description += `This vehicle is available for rent at a rate of ${product.pricePerDay}.`;

//     return description;
//   };

//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           <div className="lg:w-1/2 w-full">
//             {product.image ? (
//               <Image
//                 alt="ecommerce"
//                 className="w-full object-cover object-center rounded-md hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
//                 height={500}
//                 width={500}
//                 src={product.image.asset.url}
//               />
//             ) : (
//               <div>Image not available</div>
//             )}
//             <div className="flex gap-2">
//               <Image
//               src={car4}
//               alt="inside car"
//               height={150}
//               width={150}
//               className="rounded-md mt-6 hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
//               />
//               <Image
//               src={car2}
//               alt="inside car"
//               height={150}
//               width={150}
//               className="rounded-md mt-6 hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
//               />
//               <Image
//               src={car3}
//               alt="inside car"
//               height={150}
//               width={150}
//               className="rounded-md mt-6 hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//           </div>
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h2 className="text-sm title-font text-gray-500 tracking-widest">
//               {product.type}
//             </h2>
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {product.name}
//             </h1>

//             <p className="leading-relaxed text-sm sm:text-base">Fuel Capacity: {product.fuelCapacity} liters</p>
//             <p className="leading-relaxed text-sm sm:text-base">Seating Capacity: {product.seatingCapacity}</p>
//             <p className="leading-relaxed text-sm sm:text-base">Transmission: {product.transmission}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <span className="mr-3 text-2xl text-gray-900">
//                 {product.pricePerDay}
//               </span>
//             </div>
//             <p className="leading-relaxed text-sm sm:text-base">
//               {generateDescription()}
//             </p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;
"use client";
import { useState } from "react";
import car2 from "../../../public/inside-car-4.jpeg";
import car3 from "../../../public/inside-car-5.jpg";
import car4 from "../../../public/in car.png";
import Image from "next/image";

interface Product {
  name: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  slug: { current: string };
  image: { asset: { url: string } };
}

const ProductDetail = ({ product }: { product: Product }) => {
  const [rating, setRating] = useState<number>(0); // User's rating
  const [hoveredRating, setHoveredRating] = useState<number | null>(null); // Hover effect for stars

  const generateDescription = () => {
    let description = `${product.name} is a ${product.type} vehicle with a fuel capacity of ${product.fuelCapacity} liters. `;

    if (product.transmission.toLowerCase() === "automatic") {
      description +=
        "It features a smooth automatic transmission for easy driving. ";
    } else {
      description +=
        "It comes with a manual transmission for an engaging driving experience. ";
    }

    description += `With seating capacity for ${product.seatingCapacity} people, it is ideal for group travel. `;
    description += `This vehicle is available for rent at a rate of `;

    return description;
  };

  const handleRatingClick = (rate: number) => {
    setRating(rate);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full">
            {product.image ? (
              <Image
                alt="ecommerce"
                className="w-full object-cover object-center rounded-md hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
                height={500}
                width={500}
                src={product.image.asset.url}
              />
            ) : (
              <div>Image not available</div>
            )}
            <div className="flex gap-2">
              <Image
                src={car4}
                alt="inside car"
                height={150}
                width={150}
                className="rounded-md mt-6 hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
              />
              <Image
                src={car2}
                alt="inside car"
                height={150}
                width={150}
                className="rounded-md mt-6 hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
              />
              <Image
                src={car3}
                alt="inside car"
                height={150}
                width={150}
                className="rounded-md mt-6 hover:shadow-md hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.type}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 font-serif">
              {product.name}
            </h1>

            <p className="leading-relaxed text-sm sm:text-base text-gray-400">
              Fuel Capacity: {product.fuelCapacity} liters
            </p>
            <p className="leading-relaxed text-sm sm:text-base text-gray-400">
              Seating Capacity: {product.seatingCapacity}
            </p>
            <p className="leading-relaxed text-sm sm:text-base text-gray-400">
              Transmission: {product.transmission}
            </p>
            <div className="flex mt-4 items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={
                      hoveredRating && star <= hoveredRating
                        ? "gold"
                        : rating >= star
                          ? "gold"
                          : "none"
                    }
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-3 text-gray-600">
                {rating > 0 ? `You rated ${rating}/5` : `Rate this ${product.name}`}
              </span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base mt-6">
              {generateDescription()}
            </p>
            <div className="flex mt-6 items-center pb-5 mb-5 text-3xl text-gray-900 font-semibold"> 
              {product.pricePerDay}
              <span className="text-gray-500 text-base">/day</span>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
