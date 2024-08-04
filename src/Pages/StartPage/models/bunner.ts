export type NewsType = {
  id: string;
  title: string;
  description?: string;
  url?: string;
  author: string;
  image: ImageType;
  language?: string;
  category?: string[];
  world?: string;
  published: string;
};

export type ImageType = {image: string}