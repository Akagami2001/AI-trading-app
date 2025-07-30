'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Benvenuto in AI Trading Assistant</h1>

        <p className="text-gray-600 mb-6">
          Carica grafici e ricevi un’analisi automatica per aiutarti a capire il mercato. 
          Tutto gratuito, educativo e semplice.
        </p>

        <button
          onClick={() => router.push('/upload')}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Vai all’analisi AI
        </button>
      </div>
    </div>
  );
}
