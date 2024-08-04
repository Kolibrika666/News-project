import React, { useEffect, useState } from "react";
import s from "./StartPage.module.scss";
import NewsBunner from "./NewsBunner";
import { getNews } from "./api/newsApi";
import { NewsType } from "./models/bunner";
import NewsInList from "./NewsInList";

const StartPage = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [click, setClick] = useState<string>("0");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div className={s.start}>
      <hr />
      {news.length > 0 ? (
        <NewsBunner
          id={news[0].id}
          author={news[0].author}
          image={news[0].image}
          published={news[0].published}
          title={news[0].title}
        />
      ) : null}
      <hr />
      <button onClick={() => setClick("1")}>
        <span>More news</span>
      </button>
      {click == "1"
        ? 
        <div className= {s.newsList}>
        {news.map((e) => (
            
              <NewsInList
                id={e.id}
                author={e.author}
                image={e.image}
                published={e.published}
                title={e.title}
              />
            
          ))}
          </div>
        : null}
    </div>
  );
};

export default StartPage;
