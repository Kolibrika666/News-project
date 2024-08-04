import React, { useEffect } from "react";
import s from "./StartPage.module.scss";
import NewsBunner from "./NewsBunner";
import { getNews } from "./api/newsApi";

const StartPage = () => {
  useEffect(() => {
    
    const fetchNews = async () => {
      try {
        const news = await getNews()
        console.log('ok')
        console.log(news)
      } catch (error) {
        console.log(error);
      }
    }
      fetchNews()
  }, []);
  return (
    <div className={s.start}>
      <hr />
      <NewsBunner id="" image="dd" published="dd" title="dd" author="dg" />
      <hr />
    </div>
  );
};

export default StartPage;
