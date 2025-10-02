// src/app/(app)/assistant/competitions/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChatPanel } from "@/components/chat/chat-panel";
import type { Conversation } from "@/lib/types";
import { chatCompetitions } from "./actions";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AssistantCompetitionsPage() {
  const [conversation, setConversation] = useState<Conversation | null>(null);

  useEffect(() => {
    // Each expert gets its own conversation history
    const storedConversation = localStorage.getItem("chat_competitions");
    if (storedConversation) {
      setConversation(JSON.parse(storedConversation));
    } else {
      const newId = crypto.randomUUID();
      setConversation({ id: newId, messages: [] });
    }
  }, []);

  const saveConversation = useCallback((updatedConversation: Conversation) => {
    setConversation(updatedConversation);
    localStorage.setItem("chat_competitions", JSON.stringify(updatedConversation));
  }, []);

  return (
    <div className="flex-1 p-4 md:p-8 pt-6 flex flex-col h-[calc(100vh-57px)] md:h-auto">
        <div className="flex items-center gap-4 mb-4">
            <Button asChild variant="outline" size="icon" className="h-7 w-7 flex-shrink-0">
                <Link href="/assistant">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Volver a Asistentes</span>
                </Link>
            </Button>
            <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Asistente de Competiciones
                </h1>
                <p className="text-muted-foreground hidden md:block">
                Resuelve tus dudas sobre normativas, categorías, y la Circular nº1.
                </p>
            </div>
      </div>
       <Card className="flex-1 flex flex-col overflow-hidden">
          <CardContent className="p-0 h-full">
            {conversation ? (
              <ChatPanel
                key={conversation.id}
                conversation={conversation}
                saveConversation={saveConversation}
                chatAction={chatCompetitions}
                placeholder="Pregunta sobre la Circular nº1 o normativas de categorías..."
                welcomeMessage="Hola, soy tu experto en Competiciones y Circular nº1. ¿En qué puedo ayudarte?"
              />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <p>Cargando asistente...</p>
              </div>
            )}
          </CardContent>
      </Card>
    </div>
  );
}
