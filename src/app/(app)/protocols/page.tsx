import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronRight } from "lucide-react";

const protocols = [
  {
    id: 'violencia-verbal',
    title: 'Protocolo de Actuación sobre la Violencia Verbal',
    description: 'Medidas efectivas para combatir las amenazas, insultos y manifestaciones intolerantes.',
    updatedAt: '2024-07-20',
  },
  {
    id: 'circular-n1',
    title: 'Circular Nº 1 (Temporada 2024/2025)',
    description: 'Normativa general y de obligado cumplimiento para el colectivo arbitral.',
    updatedAt: '2024-07-26',
  },
  // Se pueden añadir más protocolos aquí en el futuro
];

export default function ProtocolsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">Circulares y protocolos</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {protocols.map((protocol) => (
          <Link href={`/protocols/${protocol.id}`} key={protocol.id} className="block hover:no-underline">
            <Card className="h-full flex flex-col hover:border-primary transition-colors duration-200">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{protocol.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{protocol.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm">
                 <p className="text-muted-foreground">
                    Actualizado: {format(new Date(protocol.updatedAt), "d 'de' MMMM, yyyy", { locale: es })}
                  </p>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
