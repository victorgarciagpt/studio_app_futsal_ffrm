// src/app/(app)/competitions/page.tsx
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { futsalCategories, ffrmGeneralNotes } from "@/data/competitions";
import type { FutsalCategory } from "@/lib/types";
import {
  ClipboardList,
  Clock,
  Search,
  Users,
  Info,
  ShieldCheck,
  Building,
  Shirt,
  Goal,
  Timer,
  PersonStanding,
  AlertTriangle,
  Scale,
  Handshake,
  FileText
} from "lucide-react";

const FutsalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-primary"
  >
    <path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
    <path d="M18.36 5.64 12 12" />
  </svg>
);


function CategoryRule({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <span>
        <strong className="font-semibold">{label}:</strong> {value}
      </span>
    </li>
  );
}

function FFRMFutsalCategoryDetails({ category }: { category: FutsalCategory }) {
  return (
    <AccordionContent className="pt-2 pb-4 px-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm">
        <CategoryRule
          icon={<Scale className="h-5 w-5 text-primary" />}
          label="Regulador"
          value={category.regulador}
        />
        <CategoryRule
          icon={<FutsalIcon />}
          label="Balón"
          value={category.balon}
        />
        <CategoryRule
          icon={<Clock className="h-5 w-5 text-primary" />}
          label="Tiempo de Juego"
          value={category.tiempoJuego}
        />
        <CategoryRule
          icon={<Timer className="h-5 w-5 text-primary" />}
          label="Tiempo Muerto"
          value={category.tiempoMuerto}
        />
         <CategoryRule
          icon={<Users className="h-5 w-5 text-primary" />}
          label="Nº Jugadores"
          value={`${category.jugadores} (${category.minJugadores} para iniciar)`}
        />
        <CategoryRule
          icon={<ClipboardList className="h-5 w-5 text-primary" />}
          label="Confirmación Actas"
          value={category.confirmacionActas}
        />
        <CategoryRule
          icon={<AlertTriangle className="h-5 w-5 text-primary" />}
          label="Normativa Específica Expulsión"
          value={category.normativaEspecifica}
        />
        <CategoryRule
          icon={<Goal className="h-5 w-5 text-primary" />}
          label="Porterías"
          value={category.porterias}
        />
        <CategoryRule
          icon={<PersonStanding className="h-5 w-5 text-primary" />}
          label="Presencia Arbitral"
          value={category.presenciaArbitral}
        />
        <CategoryRule
          icon={<Building className="h-5 w-5 text-primary" />}
          label="Llegada a Instalaciones"
          value={category.llegadaInstalaciones}
        />
        <CategoryRule
          icon={<ShieldCheck className="h-5 w-5 text-primary" />}
          label="Regla Pasarela"
          value={category.reglaPasarela ? "Sí" : "No"}
        />
        <CategoryRule
          icon={<Shirt className="h-5 w-5 text-primary" />}
          label="Regla +10 Goles"
          value={category.reglaDiferencia10Goles ? "Sí" : "No"}
        />
         <CategoryRule
          icon={<FileText className="h-5 w-5 text-primary" />}
          label="Saque de Meta"
          value={category.saqueMeta}
        />
         <CategoryRule
          icon={<FileText className="h-5 w-5 text-primary" />}
          label="Cesión al Portero"
          value={category.cesionPortero}
        />
      </ul>
      {category.notas && category.notas.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
            <Info className="h-5 w-5" /> Notas Adicionales
          </h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            {category.notas.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </AccordionContent>
  );
}


export default function CompetitionsPage() {
  const [ffrmSearchTerm, setFfrmSearchTerm] = useState("");
  const [cartagenaSearchTerm, setCartagenaSearchTerm] = useState("");

  const filteredFfrmCategories = futsalCategories.filter((category) =>
    category.title.toLowerCase().includes(ffrmSearchTerm.toLowerCase())
  );
  
  // const filteredCartagenaCategories = cartagenaCategories.filter((category) =>
  //   category.title.toLowerCase().includes(cartagenaSearchTerm.toLowerCase())
  // );

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">
        Competiciones de Fútbol Sala
      </h1>
      <Tabs defaultValue="ffrm">
        <TabsList className="grid w-full grid-cols-1 md:w-[400px]">
          <TabsTrigger value="ffrm">Competiciones FFRM</TabsTrigger>
          {/* <TabsTrigger value="cartagena">Comarcal Cartagena</TabsTrigger> */}
        </TabsList>
        <TabsContent value="ffrm" className="space-y-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar categoría FFRM..."
              className="pl-9 w-full md:w-[300px]"
              value={ffrmSearchTerm}
              onChange={(e) => setFfrmSearchTerm(e.target.value)}
            />
          </div>
          <Accordion type="single" collapsible className="w-full">
            {filteredFfrmCategories.length > 0 ? (
              filteredFfrmCategories.map((category) => (
                <AccordionItem value={category.id} key={category.id}>
                  <AccordionTrigger className="text-left font-semibold hover:no-underline px-4">
                     <div className="flex items-center gap-3">
                        <FutsalIcon />
                        <span>{category.title} ({category.regulador})</span>
                     </div>
                  </AccordionTrigger>
                  <FFRMFutsalCategoryDetails category={category} />
                </AccordionItem>
              ))
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No se encontraron categorías.
              </p>
            )}
          </Accordion>
           <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Aclaraciones Generales Fútbol Sala (Categorías Regionales)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {ffrmGeneralNotes.map(note => (
                   <div key={note.title}>
                      <h3 className="font-semibold text-primary">{note.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-wrap">{note.content}</p>
                   </div>
                ))}
              </CardContent>
            </Card>
        </TabsContent>
        {/* <TabsContent value="cartagena" className="space-y-4">
           <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar categoría Cartagena..."
              className="pl-9 w-full md:w-[300px]"
              value={cartagenaSearchTerm}
              onChange={(e) => setCartagenaSearchTerm(e.target.value)}
            />
          </div>
          <Accordion type="single" collapsible className="w-full">
            {filteredCartagenaCategories.length > 0 ? (
              filteredCartagenaCategories.map((category) => (
                <AccordionItem value={category.id} key={category.id}>
                  <AccordionTrigger className="text-left font-semibold hover:no-underline px-4">
                    {category.title}
                  </AccordionTrigger>
                </AccordionItem>
              ))
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No se encontraron categorías.
              </p>
            )}
          </Accordion>
           <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Aclaraciones Generales Liga Comarcal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {cartagenaGeneralNotes.map(note => (
                   <div key={note.title}>
                      <h3 className="font-semibold text-primary">{note.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-wrap">{note.content}</p>
                   </div>
                ))}
              </CardContent>
            </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
