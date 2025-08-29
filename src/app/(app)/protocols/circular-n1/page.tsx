// src/app/(app)/protocols/circular-n1/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react";


const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">{children}</h2>
);

const SubSectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold font-headline mt-6 mb-3">{children}</h3>
);

const Point = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-4">
        <p><strong className="font-semibold">{title})</strong> {children}</p>
    </div>
)

export default function CircularN1Page() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <h1 className="text-3xl font-bold tracking-tight font-headline">
                Circular Nº 1 (Temporada 2024/2025)
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

            <div>
                <SectionTitle>1. Obligaciones Arbítrales desde el Nombramiento hasta la Llegada</SectionTitle>
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        <p>Es obligación que el Árbitro contacte con él segundo árbitro y árbitro asistente designado, al menos 48 horas antes de los partidos, así como recogerlo desde el punto de encuentro hasta las Instalaciones deportivas y vuelta.</p>
                        <p>En la categoría de 1ª División, el Tercer Árbitro será el encargado de ponerse en contacto con los árbitros, el / la árbitro asistente, al menos 48 horas antes del inicio del partido. Los 4 miembros del cuerpo arbitral, entrarán juntos a las instalaciones deportivas.</p>
                        <p>En la categoría de 2ª División, el Tercer Árbitro, será el encargado de ponerse en contacto con los árbitros, el / la árbitro asistente, al menos 48 horas antes del inicio del partido. Los 4 miembros del cuerpo arbitral, entrarán juntos a las instalaciones deportivas.</p>
                        
                        <SubSectionTitle>5) Llegada a las Instalaciones Deportivas</SubSectionTitle>
                        <p>En las categorías de Primera, Segunda División es de 3 horas en la localidad del encuentro y 1 hora 30 minutos en las instalaciones deportivas, en 2ª División “B” y 1ª División femenina será de 2 horas en la localidad del encuentro y 1 hora 30 minutos en las instalaciones deportivas</p>
                        <p>En el resto de categorías no hay antelación mínima en la localidad, únicamente se deberá llegar a las instalaciones del encuentro con 1 hora de antelación.</p>
                        <p>En cualquier categoría, cuando se llegue a las instalaciones deportivas nos presentaremos al Conserje de las Instalaciones y a los delegados de equipo.</p>
                        
                        <Alert variant="destructive">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>Importante</AlertTitle>
                            <AlertDescription>
                                <p>Si por la circunstancia que fuese, un partido se suspende por incomparecencia del árbitro, todos los gastos que se originen en la reanudación correrán por cuenta del árbitro, salvo que el Órgano Jurisdiccional opine que no ha sido responsabilidad suya y esté totalmente justificado.</p>
                                <p className="mt-2">En caso de que, por cualquier circunstancia, avería del coche en la carretera, no localizar la instalación deportiva, etc.), impida al árbitro encontrarse en las instalaciones deportivas con el tiempo de antelación correspondiente. Se tendrá que notificar en ese momento esta circunstancia llamando al teléfono del Secretario.</p>
                            </AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>
            
            <div>
                <SectionTitle>2. Obligaciones Arbítrales en las Instalaciones</SectionTitle>
                 <Card>
                    <CardContent className="pt-6 space-y-4">
                        <Point title="6">Licencias Federativas, número máximo de jugadores, Actas.</Point>
                        
                        <h4 className="font-semibold text-lg">2.1. Licencias</h4>
                        <p>El número máximo de licencias en Categorías Nacionales es de 14.</p>
                        <p>El número máximo de licencias en Categorías Regionales es de 14.</p>

                        <h4 className="font-semibold text-lg mt-4">2.2. Confirmación partidos y Actas de los encuentros</h4>
                        <p>En las categorías nacionales de 1ª, 2ª, 2ª B División, División Honor Juvenil, 1ª y 2ª División Femenina, la confirmación de partidos y las actas se hacen por el programa de “Novanet” (https://intranetrfef.novanet.es).</p>
                        <p>En las categorías nacionales de 3ª División y todas las regionales, la confirmación de partidos y las actas se hace por el programa de “https://intranet.ffrm.es”.</p>

                        <h4 className="font-semibold text-lg mt-4">2.3. Entrenadores y Delegados que pueden estar en diferente equipos del mismo club.</h4>
                        <p>Los delegados en todas las categorías Regionales teniendo ficha del Club podrán estar en cualquiera de sus equipos en el Acta. Este permiso no es aplicable a las categorías Nacionales.</p>
                        <p>Los entrenadores con licencia de una categoría igual o superior a la de la categoría del encuentro en cuestión, no podrán ejercer funciones de entrenador, salvo autorización específica de la FFRM o salvo que se trate de las categorías Alevín, Benjamín, Prebenjamín y Debutantes.</p>

                        <h4 className="font-semibold text-lg mt-4">2.4. Jugadores y Miembros del Cuerpo técnico que no salen en el Acta del programa (aplicación web) de los encuentros de 3º División y Regional.</h4>
                        <p>Si no aparecen en el acta, pero el Delegado confirma que tienen licencia validada, se les permitirá participar reflejándolo en observaciones. El árbitro deberá crear la licencia en la app y para la identificación se deberá presentar DNI, Carnet de Conducir, Pasaporte o Permiso de Residencia original y con foto.</p>

                        <Point title="7">En todos los encuentros antes de comenzar el partido, se procederá a realizar una revisión de identidad en el vestuario arbitral.</Point>
                        
                        <h4 className="font-semibold text-lg mt-4">2.5. Normativa previa antes del inicio del encuentro.</h4>
                        <Point title="8">
                            <strong>Instalaciones Deportivas:</strong> Las líneas de marcación tendrán una anchura que oscila entre 5 y 8 centímetros. La mesa del árbitro asistente se situará a una distancia mínima de 50 centímetros hasta la línea de banda. Las porterías podrán ser fijas al suelo ó móviles.
                        </Point>
                        <Point title="9">
                            <strong>Balones reglamentarios homologados:</strong> Se especifica la marca y tamaño por categoría. Si no se dispone del balón oficial, se puede usar otro reglamentario, haciéndolo constar en el acta.
                        </Point>
                        <Point title="10">
                            <strong>Banquillos:</strong> Todos los componentes deben tener Licencia Federativa. Los jugadores sustitutos deberán llevar un peto/sudadera. El calentamiento se realiza en zonas designadas.
                        </Point>
                         <Point title="11">
                            Es obligatorio que antes del inicio del partido, el árbitro realice un calentamiento en la superficie de juego.
                        </Point>
                        <Point title="12">
                            Todos los árbitros asistentes, deberán llevar cronógrafo de mano. Se deberá comprobar el Marcador electrónico.
                        </Point>
                         <Point title="13">
                            Es obligatorio revisar las redes de las porterías, las marcas en el terreno de juego y que el número de jugadores en pista coincida con los inscritos en el Acta.
                        </Point>
                        <Point title="14">
                            <strong>Mínimo de Jugadores:</strong> 3 jugadores para iniciar un partido tanto en categorías Nacionales como Regionales.
                        </Point>
                    </CardContent>
                </Card>
            </div>
             <div>
                <SectionTitle>3. Normativa Específica de los Encuentros</SectionTitle>
                 <Card>
                    <CardContent className="pt-6 space-y-4">
                        <Point title="15">
                           <strong>Brazalete:</strong> El capitán debe llevar el distintivo. Los árbitros menores de edad llevarán un brazalete identificativo.
                        </Point>
                        <Point title="16">
                           <strong>Expulsiones con inferioridad numérica:</strong> Se aplicarán los 2 minutos con un jugador menos solo en 1ª, 2ª, 2ªB, 3ª División, D.H. Juvenil, 1ª y 2ª Div. Femenina, Campeonatos de España, Preferente Masculino, Liga Autonómica Juvenil y D.H. Cadete.
                        </Point>
                         <Point title="17, 32 y 33">
                           <strong>Tiempos de Juego:</strong> Se detalla la duración y formato (reloj parado/corrido) para cada una de las categorías.
                        </Point>
                        <Point title="18">
                           <strong>Diferencia de 10 Goles:</strong> En categorías masculinas Infantil, Alevín, Benjamín, Prebenjamín y en todas las femeninas, al alcanzar una diferencia de 10 goles, no se anotarán más en el marcador.
                        </Point>
                        <Point title="19">
                           <strong>Saque de Meta / Cesión:</strong> En TODAS las categorías, si el portero traspasa el medio campo en un saque de meta, se sancionará con libre indirecto. En Prebenjamín y Debutantes, la cesión antirreglamentaria se reanuda con saque de banda.
                        </Point>
                        <Point title="20">
                           Será obligatorio en todos los encuentros, antes del inicio del encuentro, realizar el saludo fair play.
                        </Point>
                    </CardContent>
                </Card>
            </div>
            <div>
                <SectionTitle>4. Normativa Post-Partido y Gestiones</SectionTitle>
                 <Card>
                    <CardContent className="pt-6 space-y-4">
                        <Point title="21">El pago de los encuentros lo hará la Federación por transferencia.</Point>
                        <Point title="22">Es obligatorio redactar todas las tarjetas (amarillas y rojas) en el acta, indicando motivo y minuto.</Point>
                        <Point title="23">Si el acta online falla, debe finalizarse lo antes posible en otro lugar. El plazo para un anexo es de 24h.</Point>
                        <Point title="24">Cualquier irregularidad en las instalaciones que no impida jugar debe constar en el acta.</Point>
                        <Point title="25">Los encuentros deben confirmarse en la intranet antes del jueves.</Point>
                        <Point title="29">Se detalla la uniformidad reglamentaria, colores y marcas por categoría (Macron, Fibranet).</Point>
                        <Point title="30">Los árbitros pueden usar las pistas de atletismo de Monte-Romero gratuitamente.</Point>
                        <Point title="31">Se especifican los hospitales concertados para asistencia médica urgente y el procedimiento a seguir.</Point>
                        <Point title="40">Se detalla la normativa sobre el Entrenador en Prácticas según la categoría.</Point>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
