'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          AI Trading Assistant 💹
        </h1>

        <p className="text-gray-600 mb-6">
          Carica un grafico e ricevi un’analisi AI dettagliata.
          Gratuito, educativo e semplice — progettato per trader curiosi.
        </p>

        <button
          onClick={() => router.push('/upload')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
        >
          Inizia l’Analisi AI
        </button>
      </div>
    </main>
  );
}
