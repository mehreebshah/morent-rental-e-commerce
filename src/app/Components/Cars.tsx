'use client';
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/app/context/wishlistContext"; // Import the Wishlist context


const Cars = () => {
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
    const [cars, setCars] = useState<Product[]>([]);
    const { likedCars, toggleLike } = useWishlist(); // Use the Wishlist context
    const [notification, setNotification] = useState<string | null>(null);

    const handleLike = (slug: string, carName: string) => {
        toggleLike(slug); // Toggle the liked state using the context

        // Show notification when a car is liked
        if (!likedCars.includes(slug)) {
            setNotification(`${carName} added to Wishlist!`);
            setTimeout(() => setNotification(null), 2000); // Clear notification after 2 seconds
        }
    };

    useEffect(() => {
        const fetchCars = async () => {
            const query = `*[_type == 'car']{
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
            const res = await client.fetch(query);
            setCars(res);
        };

        fetchCars();
    }, []);

    return (
        <div className="container mx-auto p-4">
            {/* Notification Banner */}
            {notification && (
                <div className="fixed top-4 right-4 z-50 transform -translate-x-1/2 bg-gradient-to-r from-blue-300 to-blue-500 text-white px-4 py-2 rounded shadow-lg text-center animate-bounce">
                    {notification}
                </div>
            )}
            {/* Cars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cars.map((car) => (
                    <div key={car.slug.current} className="flex flex-col mb-4 p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                        <div className="text-xl font-semibold text-gray-900 flex items-center justify-between">
                            {car.name}
                            {/* Heart Icon */}
                            <div
                                className="cursor-pointer text-xl"
                                onClick={() => handleLike(car.slug.current, car.name)} // Use handleLike function
                            >
                                {likedCars.includes(car.slug.current) ? (
                                    <AiFillHeart className="text-red-600 transition-transform duration-300 transform hover:scale-125" />
                                ) : (
                                    <CiHeart className="text-gray-400 hover:text-red-600 transition-colors duration-300" />
                                )}
                            </div>
                        </div>
                        {/* Product Image */}
                        {car.image && (
                            <Image
                                src={urlFor(car.image).url()}
                                alt={car.name}
                                width={300}
                                height={200}
                                className="object-contain self-center max-w-full h-48 mb-4 rounded-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        )}
                        <div className="mt-1 text-sm text-gray-400">{car.type}</div>

                        {/* Product Features */}
                        <div className="flex flex-col gap-2 text-sm font-medium text-gray-400 mb-4">
                            <div>Fuel: {car.fuelCapacity}L</div>
                            <div>Seating: {car.seatingCapacity}</div>
                            <div>Transmission: {car.transmission}</div>
                        </div>

                        {/* Product Footer */}
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-bold text-gray-900">
                                {car.pricePerDay}
                            </div>
                            <Link href={`/car/${car.slug.current}`}>
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

export default Cars;
