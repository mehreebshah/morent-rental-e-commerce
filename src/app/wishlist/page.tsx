"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const Wishlist = () => {
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

  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      const likedCars = JSON.parse(localStorage.getItem("likedCars") || "[]");

      // Fetch products based on their slugs
      const query = `*[_type == 'car' && slug.current in $likedCars]{
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
      const result = await client.fetch(query, { likedCars });
      setWishlistProducts(result);
    };
    fetchWishlistProducts();
  }, []);

  return (
    <div className="text-base text-gray-400 mx-4 sm:mx-6 lg:mx-12 my-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-8 text-center sm:text-left">
        Your Wishlist
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlistProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col p-4 sm:p-6 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300 ease-in-out relative"
          >
            {/* Product Name and Type */}
            <div className="flex flex-col mb-4">
              <div className="text-xl font-semibold text-gray-900">
                {product.name}
              </div>
              <div className="mt-1 text-sm text-gray-400">{product.type}</div>
            </div>

            {/* Product Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={300}
                height={200}
                className="object-contain self-center max-w-full h-48 mb-4 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            )}

            {/* Product Features */}
            <div className="flex flex-col gap-2 text-sm font-medium text-gray-400 mb-4">
              <div>Fuel: {product.fuelCapacity}L</div>
              <div>Seating: {product.seatingCapacity}</div>
              <div>Transmission: {product.transmission}</div>
            </div>

            {/* Product Footer */}
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

export default Wishlist;