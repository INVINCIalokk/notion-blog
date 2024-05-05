"use client"
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-2 px-4 rounded"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}