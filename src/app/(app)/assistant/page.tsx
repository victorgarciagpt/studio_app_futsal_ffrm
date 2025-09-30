// src/app/(app)/assistant/page.tsx
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Trophy, FilePenLine, ChevronRight } from "lucide-react";

const assistantExperts = [
  {
    title: "Experto en Competiciones y Circular nº1",
    description: "Resuelve tus dudas sobre normativas, categorías, tiempos de juego, sanciones y el contenido de la Circular nº1.",
    href: "/assistant/competitions",
    icon: Trophy,
  },
  {
    title: "Experto en Redacción de Actas",
    description: "Obtén ayuda y ejemplos para redactar amonestaciones, expulsiones y otras incidencias en el acta del partido.",
    href: "/assistant/reports",
    icon: FilePenLine,
  },
];

export default function AssistantSelectionPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="space-y-1 mb-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Asistente IA
        </h1>
        <p className="text-muted-foreground">
          Selecciona un asistente experto para resolver tus dudas.
        </p>
      </div>
      <div className="grid gap-6 pt-4 md:grid-cols-1 lg:grid-cols-2">
        {assistantExperts.map((expert) => (
          <Link href={expert.href} key={expert.href}>
            <Card className="h-full flex flex-col hover:border-primary transition-colors duration-200 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-semibold font-headline tracking-tight">
                      {expert.title}
                    </CardTitle>
                  </div>
                   <expert.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {expert.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}