"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavLinksPage = () => {
    const [categories, setCategories] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(
                    "https://api.abcz.workers.dev/api/bazardor/categories",
                );

                if (!res.ok) {
                    throw new Error("Categories fetch failed");
                }

                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="border-b border-gray-200">
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-wrap items-center gap-3 pb-2">
                    {categories.map((product) => {
                        const isActive =
                            pathname === `/category/${product.slug}`;

                        return (
                            <Link
                                href={`/category/${product.slug}`}
                                key={product.id}
                                aria-current={isActive ? "page" : undefined}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 md:text-base ${
                                    isActive
                                        ? "bg-green-700 text-white shadow-sm pl-1"
                                        : "bg-transparent text-gray-700 hover:bg-green-50 hover:text-green-700"
                                }`}
                            >
                                <span className="text-lg md:text-xl">
                                    {product.icon}
                                </span>

                                <span>{product.nameBn}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NavLinksPage;
