import Link from "next/link";
import Image from "next/image";

export default function ProductCard({
  name,
  slug,
  description,
  mobileImage,
}: {
  name: string;
  slug: string;
  description: string;
  mobileImage: string;
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <Image
          src={mobileImage}
          alt={name}
          width={600}
          height={600}
          className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black group-hover:underline">
          {name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-black">
          View Details
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
