import React from 'react';
import s from './NewsBunner.module.scss'
import { today } from '../../constant/constant';
import { NewsType } from './models/bunner';
import { formatTimeAgo } from '../../helpers/formatDate';

const NewsBunner = (props: NewsType) => {
    return (
        <div className={s.bunner}>
            <picture>{props.img}</picture>
            <article>
            <h2>{props.img}</h2>
            <p>{formatTimeAgo(props.publish)}</p>
            </article>
        </div>
    );
};

export default NewsBunner;