// src/app/(app)/protocols/violencia-verbal/page.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Megaphone, Siren, ClipboardList } from "lucide-react";

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-muted/50 p-4 rounded-md text-sm whitespace-pre-wrap font-code text-muted-foreground">
        <code>{children}</code>
    </pre>
);

const AspectList = ({ items }: { items: string[] }) => (
    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-4">
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
);

export default function ProtocoloViolenciaVerbalPage() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <h1 className="text-3xl font-bold tracking-tight font-headline">
                Protocolo de Actuación sobre la Violencia Verbal
            </h1>
            
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary">Motivación y Definición</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">La RFEF y las Federaciones Territoriales han establecido este protocolo para combatir las amenazas, insultos y manifestaciones racistas, xenófobas, sexistas e intolerantes.</p>
                    <p><strong className="font-semibold text-foreground">Se entiende por violencia verbal:</strong> el insulto, la amenaza grave y las manifestaciones mencionadas proferidas de forma continuada.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary">Gesto de Incidente Racista</CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground">Ante un incidente racista, se debe realizar el gesto universal cruzando los antebrazos frente al pecho, formando una "X". Este gesto puede ser realizado por cualquier participante para activar el protocolo.</p>
                </CardContent>
            </Card>
            
            <div>
                 <h2 className="text-2xl font-bold font-headline mb-4">Medidas a Tomar</h2>
                 <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border rounded-lg">
                        <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                            <div className="flex items-center gap-3">
                                <Megaphone className="h-6 w-6" />
                                <span>Medida 1: Detención del partido</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <p className="mb-4">El árbitro detendrá el partido y comunicará al delegado de campo la existencia de violencia verbal para que advierta a los autores.</p>
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><ClipboardList className="h-5 w-5" /> Redacción en Acta (Apartado Público)</h3>
                            <div className="bg-muted/30 p-4 rounded-md mb-4">
                                <p className="font-semibold mb-2">Aspectos a incluir:</p>
                                <AspectList items={[
                                    "Minuto exacto del incidente.",
                                    "Indicación de activación del protocolo (y gesto si es racista).",
                                    "Motivo de la interrupción (insultos, amenazas, etc.).",
                                    "Identificación del sector del público.",
                                    "Descripción literal de los gritos o insultos.",
                                    "Acción tomada (comunicación al delegado).",
                                    "Respuesta del público y duración de la detención.",
                                    "Mención de la reanudación."
                                ]} />
                            </div>
                            <h4 className="font-semibold mb-2">Ejemplo de redacción:</h4>
                            <CodeBlock>
{`Público- En el minuto X me vi en la obligación de parar momentáneamente el partido y activar el protocolo de violencia verbal debido a que un sector del público, aficionados del equipo Y que pude identificar por los continuos gritos de ánimo a su equipo durante el partido, en numerosas ocasiones y de forma continuada gritaron (insultos/amenazas/...) de los cuales pude identificar algunos como “...” hacía (mi persona/un jugador/...). Tras la detención, (realicé el gesto correspondiente si es incidente racista) y me dirigí al delegado de campo para comunicarle lo ocurrido y a continuación se advirtió por megafonía/personalmente a los autores que cesaran su actitud. Una vez cesó dicha actitud, se reanudó el partido tras estar detenido durante X minutos.`}
                            </CodeBlock>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border rounded-lg">
                        <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                           <div className="flex items-center gap-3">
                                <AlertTriangle className="h-6 w-6" />
                                <span>Medida 2: Suspensión temporal</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <p className="mb-4">Si la violencia persiste tras la primera advertencia, el árbitro suspenderá temporalmente el partido, invitará a los equipos a los vestuarios y se repetirán los mensajes por megafonía.</p>
                             <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><ClipboardList className="h-5 w-5" /> Redacción en Acta (Continuación)</h3>
                            <div className="bg-muted/30 p-4 rounded-md mb-4">
                                <p className="font-semibold mb-2">Aspectos a añadir:</p>
                                <AspectList items={[
                                    "Minuto exacto de la suspensión temporal.",
                                    "Motivo: persistencia de la violencia verbal.",
                                    "Ejemplos de los insultos persistentes.",
                                    "Acción: suspensión temporal y retirada a vestuarios.",
                                    "Instrucciones al delegado y segunda advertencia."
                                ]} />
                            </div>
                            <h4 className="font-semibold mb-2">Ejemplo de redacción:</h4>
                            <CodeBlock>
{`(Tras la redacción de la Medida 1...)
Público - En el minuto Z y tras haber sido advertidos anteriormente, los insultos no cesaron, pudiendo identificar algunos gritos como “(Poner ejemplos)”. Por este motivo suspendí temporalmente el partido invitando a los equipos a retirarnos a los vestuarios. A continuación se volvió a advertir (por megafonía/personalmente) que debían cesar esta actitud.

[Añadir si se reanuda o no]
- Si se reanuda: Se llamó a la fuerza pública, quien garantizó la seguridad. Por lo tanto, tras estar el juego detenido durante X minutos, el partido se reanudó.
- Si no se reanuda: (Ver Medida 3).`}
                            </CodeBlock>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border rounded-lg">
                        <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">
                           <div className="flex items-center gap-3">
                                <Siren className="h-6 w-6" />
                                <span>Medida 3: Suspensión definitiva</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                             <p className="mb-4">Si los autores no pueden ser expulsados o los actos violentos se repiten, el árbitro acordará la suspensión definitiva del partido.</p>
                             <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><ClipboardList className="h-5 w-5" /> Redacción en Acta (Continuación)</h3>
                             <div className="bg-muted/30 p-4 rounded-md mb-4">
                                <p className="font-semibold mb-2">Apartado 'Público':</p>
                                <AspectList items={[ "Describir la llamada a la fuerza pública y su respuesta (si no pueden garantizar la seguridad)." ]} />
                                <p className="font-semibold mt-2 mb-2">Apartado 'Otras Incidencias':</p>
                                 <AspectList items={[
                                     "Indicar la decisión de suspensión definitiva.",
                                     "Detalles del momento: posición de equipos, acción en juego, tiempo añadido, resultado."
                                 ]} />
                             </div>
                             <h4 className="font-semibold mb-2">Ejemplo de redacción:</h4>
                            <CodeBlock>
{`(Tras Medidas 1 y 2...)
Público - Una vez en vestuarios, se llamó a la fuerza pública, quien nos comunicó que no eran capaces de garantizar nuestra seguridad. Por lo tanto, decidí suspender definitivamente el encuentro.

Otras Incidencias – Debido a los incidentes en 'Público', suspendí definitivamente el encuentro. El equipo local defendía la portería X... El equipo local se disponía a sacar de portería. El tiempo de añadido iba a ser de X min. El resultado era X-X.`}
                            </CodeBlock>
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
            </div>
        </div>
    );
}
