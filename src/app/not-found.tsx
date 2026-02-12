import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <p className="text-6xl font-bold text-terracotta">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy">Page not found</h1>
        <p className="mt-2 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center px-6 py-3 bg-charcoal text-white font-semibold rounded-full text-sm hover:shadow-lg transition-all"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
