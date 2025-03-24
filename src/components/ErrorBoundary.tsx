'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Log error ke layanan monitoring
    console.error('Error:', error);
  }, [error]);

  useEffect(() => {
    // Reset error boundary ketika navigasi
    reset();
  }, [pathname, searchParams, reset]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h2 className="text-2xl font-bold mb-4">Terjadi Kesalahan</h2>
      <p className="mb-6 text-center">Maaf, terjadi kesalahan saat memuat halaman ini.</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-hover)]"
      >
        Coba Lagi
      </button>
    </div>
  );
}