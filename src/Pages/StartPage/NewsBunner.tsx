import React from "react";
import s from "./NewsBunner.module.scss";
import { NewsType } from "./models/bunner";
import { formatTimeAgo } from "../../helpers/formatDate";
import Image from "./Image";

const NewsBunner = (props: NewsType) => {
  return (
    <div key={props.id} className={s.bunner}>
      <Image image={props.image} />
      <article>
        <h2>{props.title}</h2>
        <p>
          {formatTimeAgo(props.published)} by {props.author}
        </p>
      </article>
    </div>
  );
};

export default NewsBunner;
