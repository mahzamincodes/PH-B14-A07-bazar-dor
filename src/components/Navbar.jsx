"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLinksPage from "./NavLinks";

const NavbarPage = () => {
    const [date, setDate] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            const today = new Date().toLocaleDateString("bn-BD", {
                dateStyle: "full",
            });

            setDate(today);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <nav className="border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex min-h-20 items-center justify-between gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/logo-icon.png"
                                alt="Logo"
                                height="50"
                                width="50"
                                className="rounded-[13px] bg-green-700 p-3"
                            />

                            <div>
                                <h1 className="text-xl font-bold md:text-2xl">
                                    বাজার দর
                                </h1>

                                <p className="text-sm">{date}</p>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden items-center gap-4 md:flex md:gap-8">
                            {/* Sign In */}
                            <Link
                                href="/sign-in"
                                className={`rounded-lg px-4 py-2 font-bold ${
                                    pathname === "/sign-in"
                                        ? "bg-green-700 text-white"
                                        : "bg-transparent text-black"
                                }`}
                            >
                                সাইন ইন
                            </Link>

                            {/* Sign Up */}
                            <Link
                                href="/sign-up"
                                className={`rounded-lg px-4 py-2 font-bold ${
                                    pathname === "/sign-up"
                                        ? "bg-green-700 text-white"
                                        : "bg-transparent text-black"
                                }`}
                            >
                                সাইন আপ
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-2xl md:hidden"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="flex flex-col gap-3 border-t border-gray-200 py-4 md:hidden">
                            {/* Sign In */}
                            <Link
                                href="/sign-in"
                                onClick={() => setIsMenuOpen(false)}
                                className={`w-fit rounded-lg px-4 py-2 font-medium ${
                                    pathname === "/sign-in"
                                        ? "bg-green-700 text-white"
                                        : "bg-transparent text-black"
                                }`}
                            >
                                সাইন ইন
                            </Link>

                            {/* Sign Up */}
                            <Link
                                href="/sign-up"
                                onClick={() => setIsMenuOpen(false)}
                                className={`w-fit rounded-lg px-4 py-2 font-medium ${
                                    pathname === "/sign-up"
                                        ? "bg-green-700 text-white"
                                        : "bg-transparent text-black"
                                }`}
                            >
                                সাইন আপ
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* NavLink */}
            <NavLinksPage/>
        </div>
    );
};

export default NavbarPage;
