import Link from "next/link";

export default function ProductCard({
  name,
  slug,
  description,
  large = false,
}: {
  name: string;
  slug: string;
  description: string;
  large?: boolean;
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image placeholder */}
      <div
        className={`flex items-center justify-center bg-gray-100 ${
          large ? "h-56 sm:h-64" : "h-44 sm:h-52"
        }`}
      >
        <div className="text-center text-gray-400">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-1 text-xs">Product Image</p>
        </div>
      </div>
      <div className={`p-4 ${large ? "sm:p-6" : ""}`}>
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
