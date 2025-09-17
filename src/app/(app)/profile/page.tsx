// src/app/(app)/profile/page.tsx
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!user || !user.email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo encontrar el correo del usuario.",
      });
      return;
    }

    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, user.email);
      toast({
        title: "Correo enviado",
        description: "Revisa tu bandeja de entrada (y la carpeta de spam) para cambiar la contraseña.",
      });
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast({
        variant: "destructive",
        title: "Error al enviar el correo",
        description: "No se pudo enviar el correo de restablecimiento. Inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">Perfil de Usuario</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={user?.photoURL || "https://placehold.co/100x100.png"} alt="Árbitro" data-ai-hint="person portrait" />
                <AvatarFallback>{user?.email?.charAt(0).toUpperCase() || 'A'}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-headline">{user?.displayName || "Árbitro Ejemplo"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                    <p className="font-medium text-muted-foreground">DNI</p>
                    <p>12345678X</p>
                </div>
                <div className="space-y-1">
                    <p className="font-medium text-muted-foreground">Correo Federativo</p>
                    <p>{user?.email || "cargando..."}</p>
                </div>
                <div className="space-y-1">
                    <p className="font-medium text-muted-foreground">Categoría</p>
                    <p>Tercera División</p>
                </div>
                 <div className="space-y-1">
                    <p className="font-medium text-muted-foreground">Comité</p>
                    <p>Murcia</p>
                </div>
            </div>
            <div className="pt-4 flex flex-wrap justify-end gap-2">
                <Button variant="outline" disabled>Editar Perfil</Button>
                 <Button onClick={handlePasswordReset} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : "Cambiar Contraseña"}
                </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
