import React from "react";
import s from "./NewsBunner.module.scss";
import { NewsType } from "./models/bunner";
import { formatTimeAgo } from "../../helpers/formatDate";
import Image from "./Image";

const NewsBunner = (item: NewsType) => {
  return (
    <div key={item.id} className={s.bunner}>
      <Image image={item.image} />
      <article>
        <h2>{item.title}</h2>
        <p>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </article>
    </div>
  );
};

export default NewsBunner;
