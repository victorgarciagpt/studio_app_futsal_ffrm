// src/app/(app)/protocols/page.tsx
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronRight } from "lucide-react";
import { protocols } from "@/data/protocols";

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
