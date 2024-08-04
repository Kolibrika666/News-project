import React from "react";
import s from "./NewsInList.module.scss";
import { NewsType } from "./models/bunner";
import { formatTimeAgo } from "../../helpers/formatDate";
import Image from "./Image";

const NewsInList = (item: NewsType) => {
  return (
    <div key={item.id} className={s.news}>
      <Image image={item.image} />
      <article>
        <h4>{item.title}</h4>
        <p>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </article>
    </div>
  );
};

export default NewsInList;
