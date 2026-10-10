import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <p className="mb-3 text-7xl font-extrabold text-green-700">404</p>

            <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
                দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
            </h1>

            <p className="mb-6 max-w-md text-gray-600">
                তুমি যে পেজটি খুঁজছ, সেটি পাওয়া যাচ্ছে না অথবা পেজটি সরিয়ে ফেলা
                হয়েছে।
            </p>

            <Link
                href="/"
                className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-green-800"
            >
                হোম পেজে ফিরে যান
            </Link>
        </main>
    );
};

export default NotFound;
