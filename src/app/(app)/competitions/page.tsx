import { competitions } from "@/lib/data";
import { DocumentListPage } from "@/components/document-list-page";

export default function CompetitionsPage() {
  return (
    <DocumentListPage title="Competiciones" documents={competitions} />
  );
}
