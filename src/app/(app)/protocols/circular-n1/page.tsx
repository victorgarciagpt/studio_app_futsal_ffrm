// src/app/(app)/protocols/circular-n1/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Point = ({ title, children }: { title: React.ReactNode, children: React.ReactNode }) => (
    <div className="mb-4">
        <p><strong className="font-semibold">{title})</strong> {children}</p>
    </div>
)

const ListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="mb-2">{children}</li>
)

export default function CircularN1Page() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <h1 className="text-3xl font-bold tracking-tight font-headline">
                Circular Nº 1 (Temporada 2025/2026)
            </h1>

            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-headline text-primary">Introducción</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>Los Árbitros, Árbitros Asistentes e Informadores, no podrán dirigir ningún encuentro si no tienen la licencia validada, así como aquellos que no asistan a cualquier reunión o convocatoria de pruebas físicas que se les convoque.</p>
                    <p>La totalidad del Colectivo Arbitral, estará en disponibilidad de ejercer sus funciones como Árbitro, Árbitro Asistente e Informador para los partidos que le sean asignados durante la temporada que como ya sabéis comienza el 1 de Julio y termina el 30 de Junio, ( tanto Sábados y Domingos, como entre semana, incluidos los días festivos ). Los árbitros que no puedan dirigir encuentros en fechas determinadas, serán por causas muy justificadas y deberán indicarlo en el programa de la FFRM en el apartado Disponibilidad, comunicándose como máximo los lunes de cada semana.</p>
                    <p>Cualquier cambio en su afiliación, (domicilio, teléfono, correo electrónico, etc), será comunicada a este Comité.</p>
                </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">1. Obligaciones Arbítrales desde el Nombramiento hasta la Llegada</AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 text-muted-foreground space-y-4">
                        <p>Es obligación que el Árbitro contacte con él segundo árbitro y árbitro asistente designado, al menos 48 horas antes de los partidos, así como recogerlo desde el punto de encuentro hasta las Instalaciones deportivas y vuelta.</p>
                        <p>En la categoría de 1ª División, el Tercer Árbitro será el encargado de ponerse en contacto con los árbitros, el / la árbitro asistente, al menos 48 horas antes del inicio del partido. Los 4 miembros del cuerpo arbitral, entrarán juntos a las instalaciones deportivas.</p>
                        <p>En la categoría de 2ª División, el Tercer Árbitro, será el encargado de ponerse en contacto con los árbitros, el / la árbitro asistente, al menos 48 horas antes del inicio del partido. Los 4 miembros del cuerpo arbitral, entrarán juntos a las instalaciones deportivas.</p>
                        
                        <h3 className="text-xl font-semibold font-headline mt-4 mb-2 text-foreground">5) Llegada a las Instalaciones Deportivas</h3>
                        <p>En las categorías de Primera, Segunda División es de 3 horas en la localidad del encuentro y 1 hora 30 minutos en las instalaciones deportivas, en 2ª División “B” y 1ª División femenina será de 2 horas en la localidad del encuentro y 1 hora en las instalaciones deportivas.</p>
                        <p>En el resto de categorías la antelación es de 1 hora, cuando se llegue a las instalaciones deportivas nos presentaremos al Conserje de las instalaciones y a los delegados de equipo.</p>
                        
                        <Alert variant="destructive" className="mt-4">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Importante</AlertTitle>
                            <AlertDescription>
                                <p>Si por la circunstancia que fuese, un partido se suspende por incomparecencia del árbitro, todos los gastos que se originen en la reanudación correrán por cuenta del árbitro, salvo que el Órgano Jurisdiccional opine que no ha sido responsabilidad suya y esté totalmente justificado.</p>
                                <p className="mt-2">En caso de que, por cualquier circunstancia, avería del coche en la carretera, no localizar la instalación deportiva, etc.), impida al árbitro encontrarse en las instalaciones deportivas con el tiempo de antelación correspondiente. Se tendrá que notificar en ese momento esta circunstancia llamando al teléfono del Secretario.</p>
                            </AlertDescription>
                        </Alert>
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">2. Obligaciones Arbítrales en las Instalaciones</AccordionTrigger>
                     <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <Point title="6">Licencias Federativas, número máximo de jugadores, Actas.</Point>
                        
                        <h4 className="font-semibold text-lg text-foreground">2.1. Licencias</h4>
                        <p>El número máximo de licencias en Categorías Nacionales es de 14 Jugadores y 7 miembros del cuerpo técnico (Entrenador Sala, Entrenador Auxiliar o prácticas, Delegado, médico, fisioterapeuta o ats, preparador físico, encargado de material).</p>
                        <p>El número máximo de licencias en Categorías Regionales es de 14 Jugadores y 7 miembros del cuerpo técnico (Entrenador Sala, Entrenador Auxiliar o prácticas, Delegado, médico, fisioterapeuta o ats, preparador físico, encargado de material).</p>

                        <h4 className="font-semibold text-lg mt-4 text-foreground">2.2. Confirmación partidos y Actas de los encuentros</h4>
                        <p>En las categorías nacionales de 1ª, 2ª, 2ª B División, División Honor Juvenil, 1ª y 2ª División Femenina, la confirmación de partidos y las actas se hacen por el programa de “Novanet “https://intranetrfef.novanet.es”</p>
                        <p>En las categorías nacionales de 3ª División y todas las regionales, la confirmación de partidos y las actas se hace por el programa de “https://intranet.ffrm.es”</p>

                        <h4 className="font-semibold text-lg mt-4 text-foreground">2.3. Entrenadores y Delegados que pueden estar en diferente equipos del mismo club</h4>
                        <p>Los delegados en todas las categorías Regionales (Preferente Masculino, 1ª y 3ª autonómica, Liga autonómica Juvenil, 1ª y 2ª Juvenil, Liga autonómica Cadete, 1ª y 2ª Cadete, infantiles, alevines, benjamines, prebenjamines, debutantes, preferente femenina, Juvenil/cadete femenino, infantil/alevín/benjamín femenino ), teniendo ficha del Club podrán estar en cualquiera de sus equipos en el Acta. Ejemplo: Se permite al Delegado de la categoría Alevín ejercer de delegando en la categoría de un equipo Juvenil, Benjamín, etc. Por el contrario, este permiso no es aplicable a las categorías Nacionales (1ª, 2ª, 3ª Div. Masculina, Div. Honor Juvenil, Div. Honor Cadete, 1ª y 2ª Div. Femenina).</p>
                        <p>Los Entrenadores en categorías regionales excepcionalmente podrán sustituir a otro entrenador de una categoría distinta siempre que tenga la titulación adecuada, el árbitro lo incluirá en el acta y lo hará constar que es distinta categoría.</p>
                        <p>Los entrenadores en la categoría nacional de División de Honor Juvenil del mismo club podrán estar también en el equipo de 3ª División.</p>
                        <p>Los entrenadores del mismo club podrán estar en el Acta y banquillo en los encuentros si la categoría de su licencia es igual o superior a la del encuentro (Ejemplo: Entrenador con Licencia en 3ª División en un equipo Infantil). En el caso que sea de inferior categoría a una superior no podrán estar en el banquillo. Salvo autorización de la FFRM.</p>
                        <p className="mt-2">En el caso que una licencia de entrenador sea de inferior categoría a una superior no podrán estar en el banquillo, salvo autorización de la FFRM. Por lo tanto, un entrenador de la categoría Preferente no podrá actuar como entrenador en un partido de la categoría Infantil.</p>
                        <p className="font-semibold mt-2">Titulaciones Entrenadores:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Entrenador Sala Titular: Se refiere al Primer Entrenador.</li>
                            <li>Entrenador Sala Auxiliar: Se refiere al Segundo Entrenador.</li>
                            <li>Entrenador Sala Prácticas: Se refiere al Segundo Entrenador.</li>
                        </ul>

                        <h4 className="font-semibold text-lg mt-4 text-foreground">2.4. Jugadores y Miembros del Cuerpo técnico que no salen en el Acta del programa (aplicación web) de los encuentros de 3º División y Regional.</h4>
                        <p>Si en la alineación de los equipos no aparecen en el acta el programa algún/os jugadores o miembros del cuerpo técnico pero el Delegado del equipo nos indica que los jugadores o técnicos tienen realizadas y validadas las licencias, los dejaremos participar en el encuentro haciéndolo constar en el apartado de observaciones. Para incluirlo en el acta previamente deberemos comprobar su identificación presentándonos un documento del Ministerio del interior que sean originales y con foto: DNI, Carnet de Conducir, Pasaporte, Permiso de Residencia, también es válido que nos muestren la licencia federativa en papel ó móvil siempre que aparezca que es de la temporada 2.025 / 2.026. A su vez, se deberá añadir al jugador o miembro del cuerpo técnico en el acta en su casillas correspondiente, para ello, la forma de añadirlo es dándole a “Crear Licencia”.</p>
                        <p className="italic mt-2">Ejemplo Redacción de jugadores que no aparecen en la app web acta: El delegado local del equipo [X] nos comunica que el jugador con dorsal Nº [X] que no aparece en el acta del programa tiene la licencia federativa realizada y validada por la Federación asumiendo la responsabilidad de incluirlo en el acta.</p>
                        <p className="italic mt-2">Ejemplo Redacción de técnico que no aparecen en la app web acta: El delegado local del equipo [X] nos comunica que el técnico con licencia de [entrenador] que no aparece en el acta del programa tiene la licencia federativa realizada y validada por la Federación asumiendo la responsabilidad de incluirlo en el acta.</p>

                        <Point title="7">En todos los encuentros antes de comenzar el partido, se procederá a realizar una revisión de identidad en el vestuario arbitral.</Point>
                        
                        <h3 className="text-xl font-semibold font-headline mt-6 mb-3 text-foreground">2.5. Normativa previa antes del inicio del encuentro.</h3>
                        <Point title="8">
                            <strong>Instalaciones Deportivas:</strong> Las instalaciones deportivas reunirán las características reglamentarias de las Reglas de Juego Nº1, excepto en las siguientes competiciones con sus correspondientes modificaciones: De 3ª División hasta Fútbol Sala Base. Las líneas de marcación tendrán una anchura que oscila entre 5 y 8 centímetros. La mesa del árbitro asistente se situará a una distancia mínima de 50 centímetros hasta la línea de banda. Las porterías podrán ser fijas al suelo ó móviles.
                        </Point>
                        <Point title="9">
                            <strong>Balones reglamentarios homologados:</strong>
                            <ul className="list-none mt-2 space-y-1">
                                <ListItem><strong>Categorías Nacionales:</strong></ListItem>
                                <ListItem>1ª y 2ª División Masculina y 1ª División Femenina: Joma</ListItem>
                                <ListItem>2ª División “B”, 2ª División Femenino y División de Honor Juvenil: Joma TOP 5</ListItem>
                                <ListItem>3ª División, Liga Nacional Autonómica Juvenil: Kelme (62 centímetros)</ListItem>
                                <ListItem><strong>Categorías Regionales:</strong></ListItem>
                                <ListItem>Preferente, 1ª y 2ª Autonómica, Juvenil Regional, Cadete, Infantil (Masculino y Femenino): Kelme (62 centímetros)</ListItem>
                                <ListItem>Alevín, Benjamín (Masculinas y Femeninas): Kelme (58 centímetros)</ListItem>
                                <ListItem>Prebenjamín y Debutantes: Kelme ( 55 centímetros ).</ListItem>
                            </ul>
                            <p className="mt-2">En caso de que en un encuentro el balón que dispongan los equipos (local y visitante), no corresponda con la marca y modelo específico para esa categoría, se disputará el partido con otro balón, siempre que reúna las medidas reglamentarias y se hará constar en el Acta.</p>
                            <p className="italic mt-2">Ejemplo de redacción: Debido a que no disponían de ellos, el partido se disputó con un balón que no correspondía con la marca y modelo específico para la categoría. Aun así, el partido se jugó con balones que cumplían las medidas reglamentarias.</p>
                            <p className="mt-2">Los balones serán custodiados por el árbitro asistente. En los encuentros dirigidos por un solo árbitro, el responsable de su control será el Delegado Local.</p>
                        </Point>
                        <Point title="10">
                            <strong>Banquillos:</strong> Todos los componentes del mismo equipo tienen la obligación de tener Licencia Federativa ( Entrenador, Delegado, Auxiliares, etc ). Los jugadores sustitutos deberán llevar un peto/sudadera. El banquillo de cada equipo será para un mínimo de 16 plazas (máximo 7 oficiales y 9 sustitutos). Todos los jugadores podrán realizar ejercicios de calentamiento, desde la línea donde acaba su banquillo hasta el córner y siempre en movimiento, nunca tras la línea de meta. En caso de haber suficiente espacio detrás de los banquillos se podrá realizar en ella. En los encuentros disputados a reloj parado, los banquillos de los equipos se situarán en la misma línea de banda donde se encuentra la mesa del árbitro asistente.
                        </Point>
                         <Point title="11">
                            Es obligatorio que antes del inicio del partido, el árbitro realice un calentamiento en la superficie de juego para el desarrollo de su función y evitar posibles lesiones.
                        </Point>
                        <Point title="12">
                            Todos los árbitros asistentes, deberán llevar cronógrafo de mano, el cuál se deberá comprobar personalmente, el buen uso del mismo y no realizarlo con el móvil o con un reloj de pulsera, en caso contrario el árbitro será suspendido de sus funciones. Se deberá comprobar el Marcador electrónico, antes del comienzo, para que no surja ningún tipo de problema. Al finalizar el primer tiempo se pondrá en el marcador los diez minutos de descanso, si lo permite el electrónico.
                        </Point>
                         <Point title="13">
                            Es obligatorio revisar las redes de las porterías, así como las marcas en el terreno de juego. También es obligatorio comprobar que el número de jugadores que se encuentran en la pista coincida con los inscritos en el Acta, antes del comienzo del encuentro y a la reanudación del 2º tiempo.
                        </Point>
                        <Point title="14">
                            <strong>Mínimo de Jugadores para iniciar un partido:</strong>
                            <ul className="list-none mt-2 space-y-1">
                                <ListItem><strong>Categorías Nacionales:</strong> Para que un encuentro pueda disputarse, habrán de estar físicamente presentes y en disposición de actuar en el mismo antes del comienzo del partido, un mínimo de 3 jugadores.</ListItem>
                                <ListItem><strong>Categorías Regionales:</strong> Para que un encuentro pueda disputarse, habrán de estar físicamente presentes y en disposición de actuar en el mismo antes del comienzo del partido, un mínimo de 3 jugadores.</ListItem>
                            </ul>
                            <p className="mt-2">En el caso de que un encuentro comience con un equipo con solo 3 jugadores, se podrá incorporar hasta un máximo de 3 jugadores más durante el desarrollo del encuentro, siempre y cuando hubiesen comunicado antes del comienzo del partido que se incorporarán.</p>
                        </Point>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">3. Normativa Específica de los Encuentros</AccordionTrigger>
                     <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            <AccordionItem value="sub-item-15">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">15) Brazalete</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    Se recuerda a todo el Colectivo Arbitral que todo equipo tiene un capitán que deberá llevar el distintivo, en caso de no llevar el brazalete, esta función la ejercerá el portero designado por el equipo.
                                    <br/><strong>Brazalete Arbitral:</strong> Los árbitros menores de edad llevarán un brazalete para que se les identifique como menores.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="sub-item-16">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">16) Expulsiones con inferioridad numérica</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    Si un jugador es expulsado por tarjeta roja directa o doble tarjeta amarilla, se aplicarán los 2 minutos (a reloj parado) con un jugador menos en el terreno de juego, sólo en las categorías de 1ª División, 2ª División, 2ª División “B”, 3ª División, División de Honor Juvenil, 1ª y 2ª División Femenina Campeonatos de España de Clubes y de Selecciones Territoriales. También es de aplicación en las categorías regionales de Preferente Masculino, Liga Autonómica Juvenil y División de Honor Cadete F.S.. En el caso de el equipo rival consiga un gol antes de los 2 minutos, el equipo del jugador que recibió la roja podrá incorporar de inmediato a un jugador sin necesidad de esperar los 2 minutos. Se le entregará al Delegado un documento informativo con el tiempo de reincorporación, siendo esta la hoja de expulsiones. En el resto de categorías, no se aplicará la sanción de los 2 minutos, aunque haya un árbitro asistente, excepto si el comité lo circula.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="sub-item-17">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">17) Tiempos de Juego</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                     <ul className="list-disc pl-6 mt-2 space-y-1">
                                        <ListItem><strong>Primera División Masculina:</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>Segunda División Masculina:</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>Segunda División "B":</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>Tercera División Nacional:</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>Preferente Autonómica Masculino:</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>1ª Autonómica:</strong> 2 tiempos de 30 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x20 parado).</ListItem>
                                        <ListItem><strong>3ª Autonómica:</strong> 2 tiempos de 30 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x20 parado).</ListItem>
                                        <ListItem><strong>División de Honor Juvenil:</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>Liga Autonómica Juvenil:</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>1ª y 2ª Juvenil:</strong> 2 tiempos de 30 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x20 parado).</ListItem>
                                        <ListItem><strong>División de Honor Cadete:</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>Liga Autonómica Cadete:</strong> 2 tiempos de 30 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x20 parado).</ListItem>
                                        <ListItem><strong>Segunda Cadete:</strong> 2 tiempos de 25 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x15 parado).</ListItem>
                                        <ListItem><strong>División de Honor Infantil:</strong> 2 tiempos de 30 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x20 parado).</ListItem>
                                        <ListItem><strong>Liga Autonómica Infantil:</strong> 2 tiempos de 30 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x20 parado).</ListItem>
                                        <ListItem><strong>Segunda Infantil:</strong> 2 tiempos de 25 minutos a reloj corrido. (Excepción: Con árbitro asistente, 2x15 parado).</ListItem>
                                        <ListItem><strong>División de Honor Alevín:</strong> 2x30min corrido. (Pasarela: 3x5 + 1x15). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Liga Autonómica Alevín:</strong> 2x30min corrido. (Pasarela: 3x5 + 1x15). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>1ª Alevín:</strong> 2x30min corrido. (Pasarela: 3x5 + 1x15). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>2ª Alevín:</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>División de Honor Benjamín:</strong> 2x30min corrido. (Pasarela: 3x5 + 1x15). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Liga Autonómica Benjamín:</strong> 2x30min corrido. (Pasarela: 3x5 + 1x15). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Benjamín F.S.:</strong> 2x30min corrido. (Pasarela: 3x5 + 1x15). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>2ª Benjamín:</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>División de Honor Prebenjamín:</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Liga Autonómica Prebenjamín:</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Prebenjamín F.S:</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Prebenjamín Murcia Fútbol Sala:</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Debutantes:</strong> 2x20min corrido. (Pasarela: 4x5). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Femenino (1ª y 2ª Div):</strong> 2 tiempos de 20 minutos a reloj parado.</ListItem>
                                        <ListItem><strong>Femenino (Preferente, Juv/Cad):</strong> 2x30min corrido. (Excepción Asistente: 2x20 parado).</ListItem>
                                        <ListItem><strong>Femenino (Infantil):</strong> 2x25min corrido. (Excepción Asistente: 2x15 parado).</ListItem>
                                        <ListItem><strong>Femenino (Alevín):</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Femenino (Benjamín):</strong> 2x25min corrido. (Pasarela: 3x5 + 1x10). (Excepción Asistente: 2x15 parado. Pasarela: 3x3 + 1x6).</ListItem>
                                        <ListItem><strong>Campeonatos España Selecciones:</strong> 2x20min parado. (Alevín, Benjamín, Infantil Fem: 2x15 parado).</ListItem>
                                        <ListItem>En todas las categorías está permitido realizar un tiempo muerto de 1 minuto en cada parte.</ListItem>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="sub-item-31">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">31) Regla Pasarela</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    <p className="mb-2">En las categorías División de Honor y Liga Autonómica Alevín, 2ª Alevín, División de Honor y Liga Autonómica Benjamín, 2ª Benjamín, Prebenjamín, Prebenjamín Murcia y, Femenino Alevín Fútbol Sala se aplicarán las Reglas Pasarela.</p>
                                    <p><strong>Número de Jugadores:</strong> Podrán jugar hasta un máximo de 14 jugadores por partido.</p>
                                    <p className="font-semibold mt-2">Reglas Pasarela: 30 Minutos reloj corrido (Alevín, Benjamín)</p>
                                    <ul className="list-disc pl-5 my-2">
                                        <li>Cada parte estará dividida en 4 periodos, los tres primeros de 5 minutos cada uno y el cuarto de 15 minutos.</li>
                                        <li>Es obligatorio que cada jugador juegue un mínimo de 1 periodo y descanse mínimo 1 periodo entre los 3 primeros periodos.</li>
                                        <li>En los 3 primeros periodos de cada parte no se podrán realizar sustituciones una vez iniciado el periodo.</li>
                                        <li>Si se produjera alguna lesión de un jugador en los 3 primeros periodos se podrá realizar el cambio y se hará constar en el apartado de Incidencias esta circunstancia indicando en el minuto que se produjo.</li>
                                    </ul>
                                     <p className="font-semibold mt-2">Procedimiento de la Aplicación de las Reglas Pasarela:</p>
                                     <ul className="list-disc pl-5 my-2">
                                        <li>Antes de iniciar la primera y segunda parte del partido apuntaremos en nuestra tarjeta como siempre el cinco inicial que posteriormente tendremos que hacer constar en el acta en el apartado de Observaciones.</li>
                                        <li>A la finalización del periodo 1º e inicio de la 2ª parte (5 primeros minutos de la primera a la segunda parte), el árbitro interrumpirá el juego y los entrenadores o delegados comunicarán y el árbitro revisará los cambios realizados, no excediendo para ello los 30 segundos. Las alineaciones de estos periodos deberán reflejarse en el Acta.</li>
                                        <li>A la finalización del periodo 2º e inicio de la 3ª parte (Del minuto 5 al minuto 10 de la primera a la segunda parte), el árbitro interrumpirá el juego y los entrenadores o delegados comunicarán y el árbitro revisará los cambios realizados, no excediendo para ello los 30 segundos. Las alineaciones de estos periodos deberán reflejarse en el Acta.</li>
                                        <li>A la finalización del periodo 3º e inicio de la 4ª parte (Del minuto 15 al 30 de la primera y segunda parte), el árbitro interrumpe el juego y comunicará a los entrenadores o delegados que ya se pueden hacer cambios libres en este periodo.</li>
                                    </ul>
                                    <p className="font-semibold mt-2">Ejemplo Redacción del Acta en el apartado de Observaciones:</p>
                                    <pre className="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm">
{`Equipo Local (Nombre del equipo):
Participaciones:
Primer periodo de la 1ª parte: Dorsales 1, 4, 10, 11, 12
Segundo periodo de la 1ª parte: Dorsales 1, 6, 8, 11, 12
Tercer periodo de la 1ª parte: Dorsales 15, 10, 4, 9, 16
Primer periodo de la 2ª parte: Dorsales 15, 10, 4, 9, 16
Segundo periodo de la 2ª parte: Dorsales 1, 4, 10, 11, 12
Tercer periodo de la 2ª parte: Dorsales 1, 6, 8, 11, 12

Equipo Visitante (Nombre del equipo):
Participaciones:
Primer periodo de la 1ª parte: Dorsales 14, 5, 6, 9, 10
Segundo periodo de la 1ª parte: Dorsales 1, 6, 8, 9, 10
Tercer periodo de la 1ª parte: Dorsales 14, 2, 3, 8, 16
Primer periodo de la 2ª parte: Dorsales 1, 6, 8, 9, 10
Segundo periodo de la 2ª parte: Dorsales 14, 5, 6, 9, 10
Tercer periodo de la 2ª parte: Dorsales 14, 2, 3, 8, 16`}
                                    </pre>
                                     <p className="font-semibold mt-2">Reglas Pasarela: 25 Minutos reloj corrido (Femenino Alevín, Prebenjamín, Prebenjamín Murcia, 2ª Alevín y 2ª Benjamín) y 20 minutos en Debutantes</p>
                                      <ul className="list-disc pl-5 my-2">
                                        <li>Cada parte estará dividida en 4 periodos, los tres primeros de 5 minutos cada uno y el cuarto de 10 minutos.</li>
                                        <li>En los 3 primeros periodos de cada parte no se podrán realizar sustituciones una vez iniciado el periodo.</li>
                                        <li>Si se produjera alguna lesión de un jugador en los 3 primeros periodos se podrá realizar el cambio y se hará constar en el apartado de Incidencias esta circunstancia indicando en el minuto que se produjo.</li>
                                        <li>Es obligatorio que cada jugador juegue un mínimo de 1 periodo y descanse mínimo 1 periodo entre los 3 primeros periodos.</li>
                                    </ul>
                                     <p className="font-semibold mt-2">Ejemplo Redacción del Acta en el apartado de Observaciones:</p>
                                     <pre className="bg-muted/50 p-2 my-1 rounded-md whitespace-pre-wrap font-code text-sm">
{`Equipo Local (Nombre del equipo):
Participaciones:
Primer periodo de la 1ª parte: Dorsales 1, 4, 10, 11, 12
Segundo periodo de la 1ª parte: Dorsales 1, 6, 8, 11, 12
Tercer periodo de la 1ª parte: Dorsales 15, 10, 4, 9, 16
Primer periodo de la 2ª parte: Dorsales 15, 10, 4, 9, 16
Segundo periodo de la 2ª parte: Dorsales 1, 4, 10, 11, 12
Tercer periodo de la 2ª parte: Dorsales 1, 6, 8, 11, 12

Equipo Visitante (Nombre del equipo):
Participaciones:
Primer periodo de la 1ª parte: Dorsales 14, 5, 6, 9, 10
Segundo periodo de la 1ª parte: Dorsales 1, 6, 8, 9, 10
Tercer periodo de la 1ª parte: Dorsales 14, 2, 3, 8, 16
Primer periodo de la 2ª parte: Dorsales 1, 6, 8, 9, 10
Segundo periodo de la 2ª parte: Dorsales 14, 5, 6, 9, 10
Tercer periodo de la 2ª parte: Dorsales 14, 2, 3, 8, 16`}
                                    </pre>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="sub-item-32">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">32) Porterías Reductoras</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    En todas las categorías Benjamín, Prebenjamín y Debutantes, las porterías tendrán una reducción de 30 cm. Es obligatorio, y si no se cumple, el partido no se disputará.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="sub-item-33">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">33) Sustitución de jugadores</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    La sustitución será efectiva en el momento en el que el jugador abandone la superficie de juego por su zona de sustituciones y el sustituto ingrese en la pista posteriormente. El jugador suplente deberá entregar el peto al jugador sustituido.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="sub-item-18">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">18) Diferencia de 10 Goles</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    En las categorías masculinas Infantil, Alevín, Benjamín, Prebenjamín, Prebenjamín Murcia Fútbol Sala, 2ª Categorías y en todas las femeninas Preferente, Juvenil, Cadete, Infantil y 2ª Categorías, cuando se produce una diferencia de 10 goles durante el transcurso del encuentro, no se anotarán más goles.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="sub-item-19">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">19) Saque de Meta / Cesión</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    En TODAS las categorías, si en un saque de meta el portero traspasa la línea de medio campo, se le sancionará con un tiro libre indirecto a favor el equipo contrario. Se reanuda con el balón sobre la línea del centro del campo donde pasó el balón. En las categorías Prebenjamín, Prebenjamín Murcia Fútbol Sala y Debutantes, cuando sancionamos una infracción por cesión al portero, se ejecutará con un saque de banda, a favor del equipo contrario en el lugar más cercano a donde se cometió la infracción.
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="sub-item-20">
                                <AccordionTrigger className="font-semibold text-foreground hover:no-underline">20) Saludo Fair Play</AccordionTrigger>
                                <AccordionContent className="pt-2 text-muted-foreground">
                                    Será obligatorio en todos los encuentros, antes del inicio del encuentro, realizar el saludo fair play. Los equipos saludarán al público, situándose en el centro del campo con el árbitro/s, ( árbitro asistente ), posteriormente los jugadores visitantes saludan dando la mano al árbitro/s, ( árbitro asistente) y a los jugadores locales.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">4. Normativa Post-Partido y Gestiones</AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <Point title="21">El pago de los encuentros lo hará la Federación por transferencia.</Point>
                        <Point title="22"><strong>Redacción del Acta:</strong> En todas las categorías nacionales y regionales, se redactarán todas las tarjetas mostradas durante el partido, tanto amarillas, como rojas, ya sea esta última por roja directa o por doble amarilla. Además, será obligatorio indicar el motivo por el cual se le ha sacado la tarjeta y el minuto en el que se produce.</Point>
                        <Point title="23"><strong>Actas online:</strong> Si por algún motivo el acta online no pudiera ser cumplimentada en las instalaciones deportivas ( fallo de cobertura, etc ), deberá finalizarse lo antes posible, en otro lugar o en vuestro ordenador, haciendo constar el motivo de ello. El tiempo reglamentario para realizar un anexo es de 24 horas una vez finalizado el encuentro.</Point>
                        <Point title="24">Cualquier irregularidad en cuanto a las Instalaciones, terrenos de juego, vestuarios, etc., que presenten deficiencias pero que no impidan disputar el encuentro, se harán constar en el acta al término del partido para su posterior traslado al Comité de Competición. Si se tuviera constancia de que se ha cometido alguna irregularidad y no se ha reflejado en Acta podrá llevar sanción para el/los componente/s del equipo arbitral.</Point>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">5. Gestiones en las Oficinas del Comité</AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <Point title="25">Todos los encuentros deberán estar confirmados en el programa de intranet durante el día del Jueves. Aquellos/as que no lo hagan, se entenderá como rechazo de dicho nombramiento, tomándose las medidas oportunas.</Point>
                        <Point title="26">
                            <strong>Teléfonos de contacto y correos electrónicos:</strong>
                             <ul className="list-none pl-4 mt-2 space-y-1">
                                <ListItem><strong>Teléfono Oficina:</strong> 968229552</ListItem>
                                <ListItem><strong>Correo electrónico:</strong> arbitrosfutbolsala@ffrm.es</ListItem>
                                <ListItem><strong>Alejandro Martínez Flores (Coordinador):</strong> 670 88 47 39</ListItem>
                                <ListItem><strong>Francisco José Lorca Pérez (Secretario):</strong> 667 76 87 67</ListItem>
                                <ListItem><strong>Ángel Alberto Cerezo Martínez (Preparador Físico):</strong> 646 02 82 33</ListItem>
                            </ul>
                        </Point>
                        <Point title="27">
                           <strong>Correspondencia:</strong> COMITÉ TERRITORIAL DE ÁRBITROS DE FÚTBOL SALA. APARTADO DE CORREOS 4733. 30.080 Murcia.
                        </Point>
                        <Point title="28">
                            <strong>Uniformidad:</strong> La uniformidad reglamentaria para dirigir encuentros es de la marca Macron. Se detalla la ropa (camisas, pantalón, medias) y colores por rol (árbitro, 3er árbitro, asistente) y categoría (con o sin publicidad Fibranet), así como la combinación de medias. Las zapatillas serán de color blanco, excepto las entregadas por el Comité Nacional.
                        </Point>
                        <Point title="29">
                            <strong>Pistas de Atletismo:</strong> Los árbitros pueden usar las pistas de atletismo de Monte-Romero (Espinardo) gratuitamente. Mensualmente habrá 1 entrenamiento por categorías.
                        </Point>
                        <Point title="30">
                            <strong>Asistencia Médica Urgente:</strong> Se especifican los hospitales concertados (Hospital de Molina de Segura, Virgen de la Caridad en Cartagena, Virgen del Alcázar en Lorca, San José de Alcantarilla) y el procedimiento a seguir. Es obligatorio comunicar las bajas y altas médicas al Comité.
                        </Point>
                        <Point title="34">
                            <strong>Horario de Oficina:</strong> Lunes a Viernes. Mañanas: L-J de 8:00 a 15:00, V de 8:00 a 14:00. Tardes: solo Miércoles de 16:00 a 19:00.
                        </Point>
                        <Point title="35">
                           <strong>Miembros del Comité:</strong> Se lista la composición del Comité de Árbitros de Fútbol Sala: Alejandro Martínez Flores (Coordinador), Antonio Almagro Lajarin, Andrés Botella López, Ángel Alberto Cerezo Martínez, Ana Hurtado Cárceles, Irene Hurtado Cárceles, Ramón Martínez Martínez, José Antonio Sánchez López, y Francisco José Lorca Pérez (Secretario).
                        </Point>
                    </AccordionContent>
                </AccordionItem>

                 <AccordionItem value="item-6" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">6. Firma del acta del delegado</AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <p>Antes de enviar el acta los delegados deberán leerla y firmar con su código. En caso de no firmar, al finalizar el acta en el apartado de la firma de los delegados se deberá seleccionar la opción de que no firma y escoger el motivo en una de las opciones que aparece en la lista desplegable. Algunos de los motivos por los que el delegado puede decidir no firmar el acta son: El equipo no presenta delegado, el delegado se ha ido y no se encuentra en las instalaciones, el delegado se niega a firmar el acta, etc.</p>
                    </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7" className="border rounded-lg">
                    <AccordionTrigger className="text-lg font-semibold text-primary p-4 hover:no-underline">7. Licencia de Entrenador</AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 space-y-4 text-muted-foreground">
                        <h4 className="font-semibold text-lg text-foreground">Categorías nacionales de 1ª, 2ª, 2ª División “B”, División de Honor Juvenil, 1ª Div. Femenina y 2ª Div. Femenina</h4>
                        <p>Si aparece un Entrenador en Prácticas, NO podrá ejercer como primer entrenador.</p>
                        <h4 className="font-semibold text-lg mt-4 text-foreground">Categoría Nacional de 3ª División y Territoriales</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <ListItem>El entrenador en prácticas a tales efectos ejerce como 2º entrenador.</ListItem>
                            <ListItem>Solo puede haber un 1er entrenador y un 2º Entrenador (o entrenador en prácticas).</ListItem>
                            <ListItem>No podrá sentarse en el banquillo un entrenador en prácticas si ya hay un 2º entrenador.</ListItem>
                            <ListItem>En el caso de que no haya 1er entrenador, el 2º entrenador o el entrenador en prácticas podrá levantarse a dar instrucciones.</ListItem>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
