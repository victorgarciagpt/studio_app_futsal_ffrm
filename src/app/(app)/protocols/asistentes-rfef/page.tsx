// src/app/(app)/protocols/asistentes-rfef/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import Image from "next/image";

const ListItem = ({ children, level = 1 }: { children: React.ReactNode, level?: number }) => {
    const padding = level === 1 ? "pl-5" : "pl-10";
    return <li className={`mb-2 ${padding}`}>{children}</li>
}

export default function AsistentesRfefPage() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <h1 className="text-3xl font-bold tracking-tight font-headline">
                ASISTENTES RFEF F.S.
            </h1>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary">Marcación de Goles en Tiempo Real</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>En los encuentros de categorías nacionales de 1ª División, 2ª División, 2ª División “B”, División de Honor Juvenil, 1ª División Femenina y 2ª División Femenina esta temporada se marcarán los goles en el Acta en tiempo real.</p>
                </CardContent>
            </Card>

            <h2 className="text-2xl font-bold font-headline">Procedimiento</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                        Antes del inicio del encuentro
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0">
                        <ol className="list-decimal list-outside space-y-2 ml-5 text-muted-foreground">
                            <li>El asistente se meterá en el Acta del partido y pulsará la pestaña ATR que aparecerá como Sí y estará durante el encuentro con su móvil y la consola del marcador electrónico.</li>
                            <li>Marcar comenzar el partido.</li>
                            <li>Seleccionar “Realizar Acta“ (NO actualizar resultandos).</li>
                        </ol>
                        <div className="mt-4">
                            <Image 
                                src="https://i.imgur.com/uGGrwF4.png" 
                                alt="Instrucciones Asistentes RFEF" 
                                width={500} 
                                height={300}
                                className="rounded-md border"
                            />
                        </div>
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                        Durante el encuentro cuando se marque un gol
                    </AccordionTrigger>
                     <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <ol className="list-decimal list-outside space-y-2 ml-5">
                            <li>Subirá al marcador electrónico el gol del equipo.</li>
                            <li>Anotará en su tarjeta el gol del jugador.</li>
                            <li>
                                En el acta marcará el gol (Esta acción no tiene porque ser inmediata, lo hará lo antes posible pero siempre sin perder la visión del partido cuando el balón está en juego), siguiendo los siguientes pasos:
                                <ul className="list-[lower-alpha] list-outside space-y-1 mt-2 ml-5">
                                    <li>Asignar gol marcado al jugador en cuestión.</li>
                                    <li>Darle a grabar.</li>
                                </ul>
                            </li>
                        </ol>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
             <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Nota Importante</AlertTitle>
                <AlertDescription>
                    <p>Mientras que en el acta del programa esté pulsada la pestaña ATR todo lo que se marque se verá inmediatamente en la página WEB de la RFEF.</p>
                    <p className="mt-2">Si desactivamos la pestaña ATR deberemos darle a GUARDAR para que no se pierdan los datos que hemos indicado.</p>
                </AlertDescription>
            </Alert>
        </div>
    );
}
