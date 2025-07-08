import { manuals } from "@/lib/data";
import { DocumentListPage } from "@/components/document-list-page";

export default function ManualsPage() {
  return (
    <DocumentListPage title="Manual de Actas" documents={manuals} />
  );
}
