"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Document } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

type DocumentListPageProps = {
  title: string;
  documents: Document[];
};

export function DocumentListPage({ title, documents }: DocumentListPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">{title}</h1>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por título..."
            className="pl-9 w-full md:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {filteredDocuments.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map((doc) => (
            <Link href={`/document/${doc.category}/${doc.id}`} key={doc.id}>
              <Card className="h-full flex flex-col hover:border-primary transition-colors duration-200">
                <CardHeader>
                  <CardTitle className="font-headline">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* You can add a short description here if available */}
                </CardContent>
                <CardFooter>
                  <CardDescription>
                    Actualizado: {format(new Date(doc.updatedAt), "d 'de' MMMM 'de' yyyy", { locale: es })}
                  </CardDescription>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
            <p>No se encontraron documentos.</p>
        </div>
      )}
    </div>
  );
}
