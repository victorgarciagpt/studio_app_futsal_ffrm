import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FfrmLogo } from "@/components/icons/ffrm-logo";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="space-y-4 text-center">
            <FfrmLogo className="w-20 h-20 mx-auto" />
          <CardTitle className="text-2xl font-headline">Acceso Árbitros</CardTitle>
          <CardDescription>
            Introduce tu DNI o correo federativo y tu PIN para acceder.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-id">DNI o correo federativo</Label>
              <Input id="user-id" type="text" placeholder="Tu identificador" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="pin">PIN de 6 dígitos</Label>
              </div>
              <Input id="pin" type="password" placeholder="••••••" required maxLength={6} />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/competitions">Entrar</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
