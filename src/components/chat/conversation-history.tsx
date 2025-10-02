"use client";

import type { Conversation } from "@/lib/types";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface ConversationHistoryProps {
  storageKey: "chat_competitions_history" | "chat_reports_history";
  onSelectConversation: (conversationId: string) => void;
  conversations: Conversation[];
}

export function ConversationHistory({
  conversations,
  onSelectConversation,
}: ConversationHistoryProps) {

  return (
    <div className="p-4 space-y-4">
      {conversations.length === 0 ? (
        <p className="text-muted-foreground text-center">
          No hay conversaciones recientes.
        </p>
      ) : (
        conversations.map((conv) => (
          <Card
            key={conv.id}
            className="cursor-pointer hover:border-primary"
            onClick={() => onSelectConversation(conv.id)}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold truncate">
                {conv.messages[0]?.content || "Conversación vacía"}
              </CardTitle>
              <CardDescription>
                {conv.timestamp
                  ? format(new Date(conv.timestamp), "d MMM yyyy, HH:mm", {
                      locale: es,
                    })
                  : "Fecha desconocida"}
              </CardDescription>
            </CardHeader>
          </Card>
        ))
      )}
    </div>
  );
}
