export type NewsType = {
  id: string;
  title: string;
  description?: string;
  url?: string;
  author: string;
  image: string | null;
  language?: string;
  category?: string[];
  world?: string;
  published: string;
};
