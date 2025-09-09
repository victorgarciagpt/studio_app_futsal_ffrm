import { manuals } from './manuals';
import type { Document } from '@/lib/types';

export const allDocuments: Document[] = [...manuals];

export function getDocument(category: string, slug: string): Document | undefined {
  return allDocuments.find(doc => doc.category === category && doc.id === slug);
}
