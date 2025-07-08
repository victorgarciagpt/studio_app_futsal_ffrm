import { protocols } from "@/lib/data";
import { DocumentListPage } from "@/components/document-list-page";

export default function ProtocolsPage() {
  return (
    <DocumentListPage title="Protocolos" documents={protocols} />
  );
}
