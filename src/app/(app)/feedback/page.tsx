// src/app/(app)/feedback/page.tsx
"use client";

import { useState } from "react";
import { Star, MessageSquarePlus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { sendFeedback } from "./actions";
import { Loader2 } from "lucide-react";


function StarRating({ rating, setRating }: { rating: number, setRating: (rating: number) => void }) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-8 w-8 cursor-pointer transition-colors",
            star <= (hoverRating || rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-muted-foreground/50"
          )}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ))}
    </div>
  );
}

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (rating === 0) {
      toast({
        variant: "destructive",
        title: "Puntuación requerida",
        description: "Por favor, selecciona al menos una estrella.",
      });
      return;
    }
    
    setIsLoading(true);
    try {
      await sendFeedback({ rating, comment });
      toast({
        title: "¡Gracias por tu feedback!",
        description: "Hemos recibido tu opinión. Nos ayuda a mejorar.",
      });
      setRating(0);
      setComment("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error al enviar",
        description: "No se pudo enviar tu feedback. Por favor, inténtalo de nuevo más tarde.",
      });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">
        Feedback y Soporte
      </h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            <MessageSquarePlus className="h-6 w-6" />
            Tu opinión nos importa
          </CardTitle>
          <CardDescription>
            ¿Cómo valorarías tu experiencia con la aplicación? Tu feedback es
            esencial para mejorar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Puntuación General</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <div className="space-y-2">
            <label htmlFor="comment" className="text-sm font-medium">
              Sugerencias, fallos o comentarios
            </label>
            <Textarea
              id="comment"
              placeholder="Escribe aquí tus comentarios..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
              disabled={isLoading}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} disabled={isLoading} className="w-full md:w-auto ml-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar Feedback
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}