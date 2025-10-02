"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { ChatMessage } from "./chat-message";
import { useToast } from "@/hooks/use-toast";
import type { Message, Conversation } from "@/lib/types";

type ChatAction = (input: {
  uid: string;
  locale: string;
  message: string;
  sessionId: string;
}) => Promise<{ text: string; citations: string[] }>;

type ChatPanelProps = {
  conversation: Conversation;
  saveConversation: (conversation: Conversation) => void;
  chatAction: ChatAction;
  placeholder?: string;
  welcomeMessage?: string;
};

export function ChatPanel({
  conversation,
  saveConversation,
  chatAction,
  placeholder = "Pregunta algo...",
  welcomeMessage = "Hola, ¿en qué puedo ayudarte hoy?"
}: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>(conversation.messages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatAction({
        uid: "test-user",
        locale: "es-ES",
        message: input,
        sessionId: conversation.id, 
      });

      if (response) {
        const assistantMessage: Message = {
          role: "assistant",
          content: response.text,
        };
        const finalMessages = [...newMessages, assistantMessage];
        setMessages(finalMessages);
        
        // Update and save conversation
        const updatedConversation: Conversation = { ...conversation, messages: finalMessages, timestamp: new Date() };
        saveConversation(updatedConversation);
      } else {
        throw new Error("No response from AI assistant");
      }
    } catch (error) {
      console.error("Error calling chat assistant:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo obtener una respuesta del asistente.",
      });
       // Restore previous messages on error
       setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col h-full">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-6">
            {messages.length === 0 && (
                <ChatMessage role="assistant" content={welcomeMessage} />
            )}
            {messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
            ))}
            {isLoading && (
                <div className="flex justify-start items-center gap-4">
                  <div className="h-8 w-8 border rounded-full flex items-center justify-center">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  </div>
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                    <span className="animate-pulse">Pensando...</span>
                  </div>
                </div>
            )}
            </div>
        </ScrollArea>
        <div className="border-t p-4 bg-background">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className="flex-1 resize-none"
                rows={1}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
                    }
                }}
                disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">Enviar</span>
            </Button>
            </form>
        </div>
    </div>
  );
}
