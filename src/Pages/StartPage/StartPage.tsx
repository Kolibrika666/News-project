import React from 'react';
import s from './StartPage.module.scss'
import NewsBunner from './NewsBunner';

const StartPage = () => {
    return (
        <div className={s.start}>
            <hr/>
            <NewsBunner img='' publish='' title=''/>
            <hr/>
        </div>
    );
};

export default StartPage;