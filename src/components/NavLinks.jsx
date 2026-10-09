"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavLinksPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch(
                "https://api.abcz.workers.dev/api/bazardor/categories",
            );

            const data = await res.json();

            console.log("data", data);

            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <div className="border-b border-gray-200">
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-wrap items-center gap-6 pb-2">
                    {categories.map((product) => (
                        <Link
                            href={`/category/${product.slug}`}
                            key={product.id}
                            className="flex items-center gap-2 px-2 py-1 text-sm font-medium md:text-base"
                        >
                            <span className="text-lg md:text-xl">
                                {product.icon}
                            </span>

                            <span>{product.nameBn}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavLinksPage;