// src/app/(app)/protocols/regla-pasarela-31/page.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Users, Clock, ShieldCheck, ClipboardList, Info, AlertTriangle } from "lucide-react";
import Image from "next/image";

const DetailItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1 text-primary">{icon}</div>
        <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <div className="text-muted-foreground">{children}</div>
        </div>
    </div>
);

export default function ReglaPasarelaPage() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <h1 className="text-3xl font-bold tracking-tight font-headline">
                Regla Pasarela Nº31
            </h1>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary">Procedimiento de Aplicación</CardTitle>
                    <CardDescription>
                        Aplicable en las categorías: División de Honor y Liga Autonómica Alevín, 2ª Alevín, División de Honor y Liga Autónoma Benjamín, 2ª Benjamín, Prebenjamín, Prebenjamín Murcia, Debutantes y Femenino Alevín Fútbol Sala.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <DetailItem icon={<Users className="h-6 w-6" />} title="Número de Jugadores">
                        <p>Podrán jugar hasta un máximo de 14 jugadores por partido.</p>
                    </DetailItem>
                    <DetailItem icon={<Clock className="h-6 w-6" />} title="Tiempo de Juego (Alevín, Benjamín)">
                        <p>30 Minutos a reloj corrido. Cada parte se divide en 4 periodos: los tres primeros de 5 minutos cada uno y el cuarto de 15 minutos.</p>
                    </DetailItem>
                </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
                <AccordionItem value="item-1" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                        Normativa de Participación
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <p>Es <strong>obligatorio</strong> que cada jugador juegue un mínimo de 1 periodo y descanse mínimo 1 periodo entre los 3 primeros periodos de cada parte.</p>
                        <p>En los 3 primeros periodos de cada parte <strong>no se podrán realizar sustituciones</strong> una vez iniciado el periodo, salvo lesión.</p>
                        <Alert variant="destructive">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Lesiones</AlertTitle>
                            <AlertDescription>
                                Si se produjera alguna lesión de un jugador en los 3 primeros periodos se podrá realizar el cambio y se hará constar en el apartado de Incidencias esta circunstancia indicando en el minuto que se produjo.
                            </AlertDescription>
                        </Alert>
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                        Procedimiento Arbitral y Anotaciones
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 space-y-4">
                        <DetailItem icon={<ClipboardList className="h-6 w-6" />} title="Antes de cada Parte">
                            <p>Apuntar en la tarjeta el cinco inicial antes de comenzar la primera y segunda parte. Posteriormente, se debe hacer constar en el acta en el apartado de Observaciones.</p>
                        </DetailItem>
                        <DetailItem icon={<ShieldCheck className="h-6 w-6" />} title="Cambios entre Periodos (1º, 2º y 3º)">
                             <ul className="list-decimal pl-5 space-y-2">
                                <li><strong>Final del 1er periodo:</strong> El árbitro interrumpe el juego. Los entrenadores/delegados comunican los cambios y el árbitro los revisa (máx. 30 segundos). La alineación se debe reflejar en el Acta.</li>
                                <li><strong>Final del 2º periodo:</strong> Se repite el mismo procedimiento de interrupción y revisión de cambios (máx. 30 segundos). La alineación se debe reflejar en el Acta.</li>
                            </ul>
                        </DetailItem>
                        <DetailItem icon={<Info className="h-6 w-6" />} title="Inicio del 4º Periodo (Últimos 15 minutos)">
                             <p>Al finalizar el 3er periodo, el árbitro interrumpe el juego y comunica a los entrenadores/delegados que a partir de ese momento se pueden realizar cambios libres (volantes) durante este último periodo.</p>
                        </DetailItem>
                    </AccordionContent>
                </AccordionItem>

                 <AccordionItem value="item-3" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                        Ejemplo de Tarjeta de Anotaciones
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 flex justify-center">
                       <Image 
                            src="https://i.imgur.com/fSyi8Qa.png" 
                            alt="Ejemplo de Tarjeta de Anotaciones para Regla Pasarela" 
                            width={600} 
                            height={400}
                            className="rounded-md border"
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
