// src/app/(app)/protocols/violencia-verbal/page.tsx
"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Clipboard,
    Megaphone,
    MessageCircleWarning,
    PauseCircle,
    Shield,
    XCircle,
} from "lucide-react";

const ActaCard = ({ title, content, example }: { title: string, content: React.ReactNode, example: string }) => (
    <Card className="mt-4 bg-muted/50">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-headline">
                <Clipboard className="h-5 w-5 text-primary" />
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
            {content}
            <div className="bg-background p-3 rounded-md">
                <h4 className="font-semibold mb-2">Ejemplo de redacción:</h4>
                <pre className="whitespace-pre-wrap text-xs font-code bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <code>{example}</code>
                </pre>
            </div>
        </CardContent>
    </Card>
);

export default function ProtocoloViolenciaVerbalPage() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                    Protocolo de Actuación sobre la Violencia Verbal
                </h1>
                <p className="text-muted-foreground">
                    Pasos a seguir para combatir la violencia verbal en los campos de juego.
                </p>
            </div>

            <Alert variant="destructive" className="border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive">
                <Shield className="h-4 w-4" />
                <AlertTitle className="font-bold">Gesto Oficial de Incidente Racista</AlertTitle>
                <AlertDescription>
                    Si el incidente es de índole racista, cruza los antebrazos frente al pecho
                    formando una "X" para comunicar que se activa el protocolo por este motivo.
                    Este gesto puede ser realizado por cualquier participante del partido.
                </AlertDescription>
            </Alert>

            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline px-4 text-lg">
                        <div className="flex items-center gap-3">
                            <Badge className="text-lg py-1 px-3" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>1</Badge>
                            Medida 1: Detención del Partido
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4 px-4 space-y-4">
                        <p className="text-base flex items-start gap-2">
                            <Megaphone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span>El árbitro detendrá el partido y comunicará al delegado de campo la existencia de violencia verbal para que advierta a los autores.</span>
                        </p>
                        <ActaCard
                            title="Redacción en el Acta (Público)"
                            content={
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Especificar minuto exacto del incidente.</li>
                                    <li>Indicar la activación del protocolo (y el gesto si es racista).</li>
                                    <li>Detallar el tipo de violencia (insultos, amenazas, etc.).</li>
                                    <li>Identificar el sector del público si es posible.</li>
                                    <li>Incluir ejemplos literales de los gritos o insultos.</li>
                                    <li>Describir la acción tomada (comunicación al delegado, aviso por megafonía).</li>
                                    <li>Anotar la duración de la detención.</li>
                                </ul>
                            }
                            example={`Público - En el minuto X me vi en la obligación de parar momentáneamente el partido y activar el protocolo de violencia verbal debido a que un sector del público, aficionados del equipo Y, gritaron de forma continuada (insultos/amenazas) como “...” hacia (mi persona/un jugador/etc). Tras la detención, (realicé el gesto de incidente racista y) me dirigí al delegado de campo para comunicarle lo ocurrido y se advirtió por megafonía. Una vez cesó dicha actitud, se reanudó el partido tras estar detenido durante X minutos.`}
                        />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline px-4 text-lg">
                        <div className="flex items-center gap-3">
                            <Badge className="text-lg py-1 px-3" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>2</Badge>
                             Medida 2: Suspensión Temporal
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4 px-4 space-y-4">
                        <p className="text-base flex items-start gap-2">
                            <PauseCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span>Si la violencia persiste, el árbitro suspenderá temporalmente el partido e invitará a los equipos a retirarse a vestuarios mientras se repiten los avisos.</span>
                        </p>
                         <ActaCard
                            title="Redacción en el Acta (Público)"
                            content={
                                <>
                                    <p>Esta redacción es una continuación de la Medida 1.</p>
                                    <ul className="list-disc pl-5 space-y-2 mt-2">
                                        <li>Indicar minuto de la suspensión temporal.</li>
                                        <li>Explicar que los insultos no cesaron.</li>
                                        <li>Incluir nuevos ejemplos de insultos persistentes.</li>
                                        <li>Describir la orden de retirada a vestuarios.</li>
                                        <li>Indicar si se reanudó el partido (p. ej., tras la llegada de la fuerza pública) o si se procede a la Medida 3.</li>
                                    </ul>
                                </>
                            }
                            example={`(Redacción Medida 1)...
Público - En el minuto Z, y tras haber sido advertidos, los insultos no cesaron, identificando gritos como “...”. Por este motivo suspendí temporalmente el partido, invitando a los equipos a vestuarios. Se volvió a advertir por megafonía.
(Añadir si se reanuda o no): Una vez en vestuarios, se llamó a la fuerza pública, quien garantizó la seguridad. Tras X minutos, el partido se reanudó.`}
                        />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline px-4 text-lg">
                        <div className="flex items-center gap-3">
                             <Badge className="text-lg py-1 px-3" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>3</Badge>
                             Medida 3: Suspensión Definitiva
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4 px-4 space-y-4">
                        <p className="text-base flex items-start gap-2">
                             <XCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span>Si no se puede expulsar a los autores o los actos violentos se reproducen, el árbitro suspenderá definitivamente el partido.</span>
                        </p>
                        <ActaCard
                            title="Redacción en el Acta (Público y Otras Incidencias)"
                            content={
                                <>
                                    <p>Esta redacción es una continuación de las Medidas 1 y 2.</p>
                                    <p className="font-semibold mt-2">En apartado "Público":</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Detallar la llamada a la fuerza pública y su respuesta (si asistieron y si pudieron garantizar la seguridad).</li>
                                        <li>Concluir con la decisión de suspender definitivamente el encuentro.</li>
                                    </ul>
                                     <p className="font-semibold mt-4">En apartado "Otras Incidencias":</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Reflejar el estado exacto del partido en el momento de la suspensión.</li>
                                    </ul>
                                </>
                            }
                            example={`(Redacción Medidas 1 y 2)...
Público - Una vez en vestuarios, se llamó a la fuerza pública, quien nos comunicó que no era capaz de garantizar la seguridad. Por lo tanto, decidí suspender definitivamente el encuentro.

Otras Incidencias - Debido a los incidentes reflejados en el apartado Público, suspendí definitivamente el encuentro. El equipo local defendía la portería a la izquierda de vestuarios. En ese momento, el equipo visitante iba a ejecutar un saque de banda. El resultado era de X-X. El tiempo de añadido previsto era de X minutos.`}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
