"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import { ChatPanel } from "./chat-panel";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
          size="icon"
        >
          <MessageCircle className="h-8 w-8" />
          <span className="sr-only">Abrir Asistente IA</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-headline text-center text-2xl">Asistente IA de la FFRM</SheetTitle>
        </SheetHeader>
        <ChatPanel />
      </SheetContent>
    </Sheet>
  );
}
