export type Document = {
  id: string;
  title: string;
  category: 'competitions' | 'protocols' | 'manuals';
  updatedAt: string;
  content: string;
};
