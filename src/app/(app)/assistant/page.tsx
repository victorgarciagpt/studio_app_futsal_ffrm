// src/app/(app)/assistant/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { ChatPanel } from "@/components/chat/chat-panel";
import { Card, CardContent } from "@/components/ui/card";
import { ConversationHistory } from "@/components/chat/conversation-history";
import type { Conversation } from "@/lib/types";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function AssistantPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);

  useEffect(() => {
    const storedConversations = localStorage.getItem("chatHistory");
    if (storedConversations) {
      const parsedConversations: Conversation[] = JSON.parse(storedConversations);
      setConversations(parsedConversations);
      if (parsedConversations.length > 0) {
        setCurrentConversationId(parsedConversations[0].id);
      }
    }
  }, []);

  const saveConversations = useCallback((updatedConversations: Conversation[]) => {
    // Keep only the last 3 conversations
    const conversationsToSave = updatedConversations.slice(-3);
    setConversations(conversationsToSave);
    localStorage.setItem("chatHistory", JSON.stringify(conversationsToSave));
  }, []);

  const handleNewConversation = () => {
    const newId = crypto.randomUUID();
    setCurrentConversationId(newId);
  };
  
  const handleSelectConversation = (id: string) => {
    setCurrentConversationId(id);
  };

  const currentConversation = conversations.find(c => c.id === currentConversationId) || (currentConversationId ? { id: currentConversationId, messages: [] } : null);

  return (
    <div className="flex-1 p-4 md:p-8 pt-6 flex flex-col h-[calc(100vh-57px)] md:h-auto">
      <div className="space-y-1 mb-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Asistente IA
        </h1>
        <p className="text-muted-foreground">
          Chatea con el asistente para resolver dudas sobre reglamentos, protocolos y manuales.
        </p>
      </div>
       <Card className="flex-1 flex flex-col overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
            <ConversationHistory
              conversations={conversations}
              currentConversationId={currentConversationId}
              onNewConversation={handleNewConversation}
              onSelectConversation={handleSelectConversation}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
              <CardContent className="p-0 h-full">
                {currentConversation ? (
                  <ChatPanel
                    key={currentConversation.id}
                    conversation={currentConversation}
                    allConversations={conversations}
                    saveConversations={saveConversations}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground">
                    <p>Selecciona una conversación o empieza una nueva.</p>
                  </div>
                )}
              </CardContent>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Card>
    </div>
  );
}
