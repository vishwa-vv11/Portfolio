import Link from "next/link";
export default function NotFound() {
  return <div className="container-shell flex min-h-[60vh] flex-col items-start justify-center"><p className="eyebrow">404 · Page not found</p><h1 className="mt-4 text-5xl font-bold text-text">This page isn't here.</h1><Link href="/" className="button-primary mt-8">Back to home</Link></div>;
}
