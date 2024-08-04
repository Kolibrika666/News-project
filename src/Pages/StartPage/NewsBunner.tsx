import React from 'react';
import s from './NewsBunner.module.scss'
import { NewsType } from './models/bunner';
import { formatTimeAgo } from '../../helpers/formatDate';
import Image from './Image';

const NewsBunner = (props: NewsType) => {
    return (
        <div className={s.bunner}>
            <Image image = {props.img}/>
            <article>
            <h2>{props.img}</h2>
            <p>{formatTimeAgo(props.publish)} by {props.author}</p>
            </article>
        </div>
    );
};

export default NewsBunner;