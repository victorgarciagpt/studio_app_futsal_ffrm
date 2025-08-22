// src/components/chat/conversation-history.tsx
"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Conversation } from "@/lib/types";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

type ConversationHistoryProps = {
  conversations: Conversation[];
  currentConversationId: string | null;
  onNewConversation: () => void;
  onSelectConversation: (id: string) => void;
};

export function ConversationHistory({
  conversations,
  currentConversationId,
  onNewConversation,
  onSelectConversation,
}: ConversationHistoryProps) {
    
  const sortedConversations = [...conversations].sort((a, b) => 
    new Date(b.timestamp!).getTime() - new Date(a.timestamp!).getTime()
  );

  return (
    <div className="flex flex-col h-full p-4 bg-muted/50 border-r">
      <Button onClick={onNewConversation} className="w-full mb-4">
        <PlusCircle className="mr-2 h-4 w-4" />
        Nueva Conversación
      </Button>
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-2 px-2">Recientes</h2>
        <nav className="grid gap-1">
          {sortedConversations.map((convo) => (
            <Button
              key={convo.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-left h-auto",
                convo.id === currentConversationId && "bg-accent text-accent-foreground"
              )}
              onClick={() => onSelectConversation(convo.id)}
            >
              <MessageSquare className="mr-2 h-4 w-4 flex-shrink-0" />
              <div className="flex flex-col overflow-hidden">
                <span className="truncate font-medium">
                  {convo.messages[0]?.content || "Nueva conversación"}
                </span>
                 {convo.timestamp && (
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(convo.timestamp), { addSuffix: true, locale: es })}
                    </span>
                  )}
              </div>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}
