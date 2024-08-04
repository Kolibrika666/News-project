import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export type DataType<T> = {
  data: T;
  links: object;
  meta: object;
};

export type DataNewsType<T> = {
    news: T[];
    status: string;
    page: number;
  };

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

export type ImageType = { image: string };

export const getNews = async () => {
  try {
    const response: DataType<DataNewsType<NewsType>> = await axios.get(
      `${BASE_URL}latest-news`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data.news;
  } catch (error) {
    console.log(error);
  }
};
