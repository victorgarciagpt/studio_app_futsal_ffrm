import { ChatPanel } from "@/components/chat/chat-panel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AssistantPage() {
  return (
    <div className="flex-1 p-4 md:p-8 pt-6 flex flex-col h-[calc(100vh-57px)] md:h-auto">
      <div className="space-y-1 mb-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Asistente IA
        </h1>
        <p className="text-muted-foreground">
          Chatea con el asistente para resolver dudas sobre reglamentos, protocolos y manuales.
        </p>
      </div>
      <Card className="flex-1 flex flex-col">
        <CardContent className="p-0 flex-1 flex flex-col">
          <ChatPanel />
        </CardContent>
      </Card>
    </div>
  );
}
