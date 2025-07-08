import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">Perfil de Usuario</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="https://placehold.co/100x100.png" alt="Árbitro" data-ai-hint="person portrait" />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-headline">Árbitro Ejemplo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                    <p className="font-medium text-muted-foreground">DNI</p>
                    <p>12345678X</p>
                </div>
                <div className="space-y-1">
                    <p className="font-medium text-muted-foreground">Correo Federativo</p>
                    <p>arbitro@ffrm.es</p>
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
            <div className="pt-4 flex justify-end">
                <Button variant="outline">Editar Perfil</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
