import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function Page() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="text-blue-600 hover:text-blue-800">Go back to homepage</a>
      </div>
    </div>
  );
}