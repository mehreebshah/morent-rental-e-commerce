// context/WishlistContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WishlistContextType {
  likedCars: string[];
  toggleLike: (slug: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [likedCars, setLikedCars] = useState<string[]>([]);

  // Load liked cars from localStorage on component mount
  useEffect(() => {
    const savedLikedCars = JSON.parse(localStorage.getItem("likedCars") || "[]");
    setLikedCars(savedLikedCars);
  }, []);

  // Save liked cars to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("likedCars", JSON.stringify(likedCars));
  }, [likedCars]);

  const toggleLike = (slug: string) => {
    setLikedCars((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug) // Remove from liked
        : [...prev, slug] // Add to liked
    );
  };

  return (
    <WishlistContext.Provider value={{ likedCars, toggleLike }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};