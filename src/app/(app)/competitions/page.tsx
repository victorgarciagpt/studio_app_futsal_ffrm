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
import { ffrmCategories, ffrmGeneralNotes } from "@/lib/data";
import type { FFRMCategory } from "@/lib/types";
import {
  ClipboardList,
  Clock,
  Flag,
  FlagOff,
  Goal,
  Search,
  ShieldAlert,
  ShieldCheck,
  CircleSlash,
  Users,
  Info,
} from "lucide-react";

const FutbolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-primary"
  >
    <line x1="12" x2="12" y1="2" y2="4"></line>
    <line x1="12" x2="12" y1="20" y2="22"></line>
    <line x1="20" x2="22" y1="12" y2="12"></line>
    <line x1="2" x2="4" y1="12" y2="12"></line>
    <line x1="19.07" x2="20.48" y1="4.93" y2="3.51"></line>
    <line x1="3.52" x2="4.93" y1="20.48" y2="19.07"></line>
    <line x1="4.93" x2="3.51" y1="4.93" y2="3.51"></line>
    <line x1="20.48" x2="19.07" y1="20.48" y2="19.07"></line>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75 12 12l3.44-9.25"></path>
    <path d="m15.44 21.25-3.44-9.25-3.44 9.25"></path>
    <path d="M21.25 8.56 12 12l9.25 3.44"></path>
    <path d="m2.75 15.44 9.25-3.44-9.25-3.44"></path>
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

function CategoryDetails({ category }: { category: FFRMCategory }) {
  return (
    <AccordionContent className="pt-2 pb-4 px-4">
      <ul className="space-y-3 text-sm">
        <CategoryRule
          icon={<Users className="h-5 w-5 text-primary" />}
          label="Sustituciones"
          value={category.substitutions}
        />
        <CategoryRule
          icon={
            category.offside ? (
              <Flag className="h-5 w-5 text-primary" />
            ) : (
              <FlagOff className="h-5 w-5 text-muted-foreground" />
            )
          }
          label="Fuera de juego"
          value={category.offside ? "Sí" : "No"}
        />
        <CategoryRule
          icon={
            category.goalkeeperPassBack ? (
              <ShieldAlert className="h-5 w-5 text-destructive" />
            ) : (
              <ShieldCheck className="h-5 w-5" style={{ color: 'hsl(var(--primary))' }} />
            )
          }
          label="Cesión al portero"
          value={category.goalkeeperPassBack ? "Infracción" : "Permitido"}
        />
        <CategoryRule
          icon={
            category.directGoalFromKickoff ? (
              <Goal className="h-5 w-5 text-primary" />
            ) : (
              <CircleSlash className="h-5 w-5 text-muted-foreground" />
            )
          }
          label="Gol desde saque de centro"
          value={category.directGoalFromKickoff ? "Permitido" : "No permitido"}
        />
        <CategoryRule
          icon={<ClipboardList className="h-5 w-5 text-primary" />}
          label="Fichas"
          value={`Mínimo ${category.rosterSize.split('-')[0]}, máximo ${category.rosterSize.split('-')[1]}`}
        />
        <CategoryRule
          icon={<FutbolIcon />}
          label="Balón"
          value={`Talla ${category.ballSize}`}
        />
        <CategoryRule
          icon={<Clock className="h-5 w-5 text-primary" />}
          label="Tiempo"
          value={category.matchTime}
        />
      </ul>
      {category.notes && category.notes.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
            <Info className="h-5 w-5" /> Notas Adicionales
          </h4>
          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
            {category.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </AccordionContent>
  );
}

export default function CompetitionsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = ffrmCategories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">
        Competiciones
      </h1>
      <Tabs defaultValue="ffrm">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="ffrm">FFRM</TabsTrigger>
          <TabsTrigger value="cartagena">Comarcal Cartagena</TabsTrigger>
        </TabsList>
        <TabsContent value="ffrm" className="space-y-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar categoría FFRM..."
              className="pl-9 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Accordion type="single" collapsible className="w-full">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <AccordionItem value={category.id} key={category.id}>
                  <AccordionTrigger className="text-left font-semibold hover:no-underline px-4">
                    {category.title}
                  </AccordionTrigger>
                  <CategoryDetails category={category} />
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
                <CardTitle className="font-headline text-xl">Aclaraciones Generales FFRM</CardTitle>
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
        <TabsContent value="cartagena">
          <Card>
            <CardHeader>
              <CardTitle>Competiciones de Cartagena</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                La información sobre las competiciones comarcales de Cartagena
                estará disponible próximamente.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
