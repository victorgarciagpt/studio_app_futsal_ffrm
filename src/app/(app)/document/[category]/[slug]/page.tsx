import { notFound } from "next/navigation";
import Link from "next/link";
import { getDocument } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";

type DocumentPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export default async function DocumentPage({ params }: DocumentPageProps) {
  const doc = getDocument(params.category, params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <Button asChild variant="outline" size="sm" className="mb-4">
        <Link href={`/${doc.category}`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a {doc.category.charAt(0).toUpperCase() + doc.category.slice(1)}
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight font-headline">{doc.title}</CardTitle>
          <CardDescription>
            Última actualización: {format(new Date(doc.updatedAt), "d 'de' MMMM 'de' yyyy", { locale: es })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
