// src/app/(app)/assistant/competitions/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChatPanel } from "@/components/chat/chat-panel";
import { ConversationHistory } from "@/components/chat/conversation-history";
import type { Conversation } from "@/lib/types";
import { chatCompetitions } from "./actions";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const STORAGE_KEY = "chat_competitions_history";
const MAX_HISTORY = 3;

export default function AssistantCompetitionsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);

  useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY);
    const loadedConversations = storedHistory ? JSON.parse(storedHistory) : [];
    setConversations(loadedConversations);

    // Start a new conversation by default on page load
    createNewConversation();
  }, []);
  
  const createNewConversation = () => {
    const newId = crypto.randomUUID();
    const newConversation: Conversation = { id: newId, messages: [], timestamp: new Date() };
    
    // Add to state but don't save to storage until there's a message
    setConversations(prev => [newConversation, ...prev]);
    setActiveConversationId(newId);
  };

  const saveConversation = useCallback((updatedConversation: Conversation) => {
    // Only save if there are messages
    if (updatedConversation.messages.length === 0) return;

    setConversations(prevConversations => {
      const existingIndex = prevConversations.findIndex(c => c.id === updatedConversation.id);
      let newConversations;

      if (existingIndex !== -1) {
        // Update existing conversation
        newConversations = [...prevConversations];
        newConversations[existingIndex] = updatedConversation;
      } else {
        // Add new conversation
        newConversations = [updatedConversation, ...prevConversations];
      }
      
      // Sort by timestamp and limit history
      const sortedAndLimited = newConversations
        .filter(c => c.messages.length > 0) // Only keep non-empty conversations
        .sort((a, b) => new Date(b.timestamp!).getTime() - new Date(a.timestamp!).getTime())
        .slice(0, MAX_HISTORY);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedAndLimited));
      return sortedAndLimited;
    });
  }, []);

  const handleSelectConversation = (conversationId: string) => {
    setActiveConversationId(conversationId);
    // Switch to chat tab
    const chatTabTrigger = document.querySelector('button[data-state="inactive"][value="chat"]') as HTMLButtonElement | null;
    chatTabTrigger?.click();
  };

  const activeConversation = conversations.find(c => c.id === activeConversationId) || null;

  return (
    <div className="flex-1 p-4 md:p-8 pt-6 flex flex-col h-[calc(100vh-57px)] md:h-auto">
      <div className="flex items-center gap-4 mb-4">
        <Button asChild variant="outline" size="icon" className="h-7 w-7 flex-shrink-0">
          <Link href="/assistant">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver a Asistentes</span>
          </Link>
        </Button>
        <div className="space-y-1 flex-grow">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-headline flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Asistente de Competiciones
          </h1>
          <p className="text-muted-foreground hidden md:block">
            Resuelve tus dudas sobre normativas, categorías, y la Circular nº1.
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="chat" className="flex-1 flex flex-col">
        <div className="flex justify-between items-center pr-4">
            <TabsList>
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="history">Historial</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="icon" onClick={createNewConversation}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Nueva Conversación</span>
            </Button>
        </div>
        <Card className="flex-1 mt-4 flex flex-col overflow-hidden">
          <TabsContent value="chat" className="p-0 h-full flex-1">
            {activeConversation ? (
              <ChatPanel
                key={activeConversation.id}
                conversation={activeConversation}
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
          </TabsContent>
          <TabsContent value="history">
            <ConversationHistory
              storageKey="chat_competitions_history"
              onSelectConversation={handleSelectConversation}
              conversations={conversations.filter(c => c.messages.length > 0)}
            />
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
}
