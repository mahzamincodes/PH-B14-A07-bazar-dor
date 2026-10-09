"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

const getDate = () =>
    new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "full",
    }).format(new Date());

const getServerDate = () => "";

const subscribe = () => () => {};

const Hero = () => {
    const date = useSyncExternalStore(subscribe, getDate, getServerDate);

    const handleScrollToProducts = () => {
        const productsSection = document.getElementById("all-products");

        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            window.history.replaceState(
                null,
                "",
                `${window.location.pathname}${window.location.search}#all-products`,
            );
        }
    };

    return (
        <section className="w-full">
            <div className="container mx-auto px-4 py-6 sm:py-8">
                <div className="flex w-full flex-col items-center justify-between gap-8 rounded-2xl border border-[#eef2f0] bg-white p-6 shadow-sm sm:p-8 md:flex-row md:gap-6">
                    <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
                        <span className="rounded-full bg-[#e7f5ed] px-3 py-1.5 font-sans text-xs font-semibold text-[#117c43]">
                            {date}
                        </span>

                        <h1 className="whitespace-nowrap text-base font-bold tracking-tight text-[#1a3325] sm:text-xl md:text-2xl lg:text-3xl">
                            আজকের বাজারের দাম এক নজরে
                        </h1>

                        <p className="max-w-xl text-sm leading-relaxed text-[#55695d] sm:text-base">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                            দামের পরিবর্তন জানুন এক জায়গায়।
                        </p>

                        <button
                            type="button"
                            onClick={handleScrollToProducts}
                            className="inline-flex items-center gap-2 rounded-lg bg-[#008235] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#105c36]"
                        >
                            সব পণ্য দেখুন
                        </button>
                    </div>

                    <div className="flex h-44 w-44 shrink-0 items-center justify-center sm:h-52 sm:w-52 md:h-56 md:w-56">
                        <Image
                            src="/bazar-hero.png"
                            alt="বাজারের পণ্য"
                            width={400}
                            height={400}
                            priority
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
