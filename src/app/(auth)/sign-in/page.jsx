"use client";

import Link from "next/link";

import { FaGithub, FaGoogle } from "react-icons/fa";

const SignInPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F5F0] px-4 py-8">
            <div className="w-full max-w-120 p-6 sm:p-8 bg-white rounded-lg border border-gray-100 shadow-sm font-sans">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
                    সাইন ইন
                </h2>

                <p className="text-center text-sm text-gray-500 mb-6">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে
                    ঢুকুন।
                </p>

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-4"
                >
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            ইমেইল
                        </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none focus:border-green-600 transition-colors"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            পাসওয়ার্ড
                        </label>

                        <input
                            type="password"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md outline-none focus:border-green-600 transition-colors"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-[#008744] hover:bg-[#007038] text-white py-2.5 rounded-md font-semibold text-base transition-colors cursor-pointer"
                    >
                        সাইন ইন
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex py-5 items-center justify-center">
                    <div className="grow border-t border-gray-200"></div>

                    <span className="shrink mx-4 text-sm text-gray-400 bg-white px-2">
                        অথবা
                    </span>

                    <div className="grow border-t border-gray-200"></div>
                </div>

                {/* Social Login */}
                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                    <button
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <FaGoogle className="text-base" />
                        Google দিয়ে চালিয়ে যান
                    </button>

                    <button
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <FaGithub className="text-lg" />
                        GitHub দিয়ে চালিয়ে যান
                    </button>
                </div>

                {/* Sign Up */}
                <p className="text-center text-sm text-gray-600">
                    অ্যাকাউন্ট আছে?
                    <Link
                        href="/sign-up"
                        className="text-[#008744] hover:underline font-medium ml-1"
                    >
                        সাইন আপ করুন
                    </Link>
                </p>

                {/* Home */}
                <div className="text-center mt-6">
                    <Link
                        href="/"
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
