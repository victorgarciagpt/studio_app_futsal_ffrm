import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Trophy, FileText, BookOpenCheck, MessageCircle } from "lucide-react";

const menuItems = [
  {
    title: "Competiciones",
    description: "Normativas específicas por categoría.",
    href: "/competitions",
    icon: Trophy,
  },
  {
    title: "Protocolos",
    description: "Actuación ante violencia y otros incidentes.",
    href: "/protocols",
    icon: FileText,
  },
  {
    title: "Manual de Actas",
    description: "Guía completa para la redacción de actas.",
    href: "/manuals",
    icon: BookOpenCheck,
  },
  {
    title: "Asistente IA",
    description: "Resuelve tus dudas sobre Redacciones de actas, Competiciones o Protocolos.",
    href: "/assistant",
    icon: MessageCircle,
  },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <h1 className="text-3xl font-bold tracking-tight font-headline">
        Panel Principal
      </h1>
      <p className="text-muted-foreground">
        Bienvenido al portal del árbitro. Aquí encontrarás todas las herramientas necesarias.
      </p>
      <div className="grid gap-6 pt-4 md:grid-cols-2 lg:grid-cols-2">
        {menuItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <Card className="h-full flex flex-col hover:border-primary transition-colors duration-200 group">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold font-headline tracking-tight">
                  {item.title}
                </CardTitle>
                <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
