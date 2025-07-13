"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import { chatAssistant } from "@/ai/flows/chat-assistant";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { ChatMessage } from "./chat-message";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  // Generate a unique session ID once per component mount
  const [sessionId] = useState(() => crypto.randomUUID());

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
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatAssistant({
        uid: "test-user",
        locale: "es-ES",
        message: input,
        sessionId: sessionId, // Send the session ID with each request
      });

      if (response) {
        const assistantMessage: Message = {
          role: "assistant",
          content: response.text,
        };
        setMessages((prev) => [...prev, assistantMessage]);
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
      // Optional: remove the user's message if the call fails
      // setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col h-full">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-6">
            <ChatMessage role="assistant" content="Hola, soy el asistente de la FFRM. ¿En qué puedo ayudarte hoy?" />
            {messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
            )}
            </div>
        </ScrollArea>
        <div className="border-t p-4 bg-background">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pregunta sobre reglamentos, protocolos..."
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