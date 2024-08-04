import React from 'react';
import s from './StartPage.module.scss'
import NewsBunner from './NewsBunner';

const StartPage = () => {
    return (
        <div className={s.start}>
            <hr/>
            <NewsBunner img='dd' publish='dd' title='dd' author='dg'/>
            <hr/>
        </div>
    );
};

export default StartPage;