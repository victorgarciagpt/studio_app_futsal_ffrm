import type { Document } from '@/lib/types';

export const expulsionesJugadores: Document = {
  id: 'expulsiones-jugadores',
  title: 'Manual 3.2: Expulsiones de Jugadores',
  category: 'manuals',
  updatedAt: '2024-07-25',
  content: `
      <h2 class="font-headline text-2xl font-bold mb-4">3.2 Expulsiones de Jugadores (Tarjetas Rojas)</h2>
      <p class="text-muted-foreground mb-6">A continuación se detallan los principios, criterios y ejemplos para la correcta redacción de expulsiones a jugadores en el acta del partido.</p>

      <div data-orientation="vertical" class="w-full">
        <div class="border-b">
          <h3 data-orientation="vertical" data-state="closed">
            <button type="button" aria-expanded="false" data-state="closed" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-lg">
              Principios Generales
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
          </h3>
        </div>
        <div class="border-b">
          <h3 data-orientation="vertical" data-state="closed">
            <button type="button" aria-expanded="false" data-state="closed" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-lg">
              Criterios para Redacción de Expulsiones
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
          </h3>
        </div>
        <div class="border-b">
          <h3 data-orientation="vertical" data-state="closed">
            <button type="button" aria-expanded="false" data-state="closed" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-lg">
              Categorías de Expulsión
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
          </h3>
        </div>
        <div class="border-b">
          <h3 data-orientation="vertical" data-state="closed">
            <button type="button" aria-expanded="false" data-state="closed" class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-lg">
              Casos Prácticos de Expulsiones
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
          </h3>
        </div>
      </div>
    `
};

    