import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const formatNumber = (value) =>
    new Intl.NumberFormat("bn-BD", {
        maximumFractionDigits: 2,
    }).format(Number(value) || 0);

const Marquee = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products",
        {
            cache: "force-cache",
        },
    );

    if (!res.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const data = await res.json();

    return (
        <div className="px-4">
            <MarqueeText direction="right" duration="15">
                {data.map((x) => (
                    <Link
                        key={x.id}
                        href={`/product/${x.slug}`}
                        className="inline-block border-r border-gray-200 px-4 py-3 transition-colors hover:bg-gray-100"
                    >
                        <span>
                            {x.categoryIcon} {x.nameBn}
                        </span>

                        <span className="mx-3 font-semibold">
                            {formatNumber(x.today)} টাকা/{x.unit}
                        </span>

                        <span
                            className={
                                x.change?.dir === "up"
                                    ? "font-bold text-red-600"
                                    : x.change?.dir === "down"
                                      ? "font-bold text-green-600"
                                      : "font-bold text-gray-500"
                            }
                        >
                            {x.change?.dir === "up"
                                ? "▲"
                                : x.change?.dir === "down"
                                  ? "▼"
                                  : "—"}{" "}
                            {formatNumber(Math.abs(Number(x.change?.pct) || 0))}
                            %
                        </span>
                    </Link>
                ))}
            </MarqueeText>
        </div>
    );
};

export default Marquee;
