import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.scss"
import { today } from '../../constant/constant';

const Header = () => {

    return (
        <div className={s.header}>
            <article>
            <h1>NEWS REACTIFY</h1>
            <p>{today}</p>
            </article>
            <NavLink className={({isActive}) => (isActive ? s.active : "")} to = '/'>главная</NavLink>
        </div>
    );
};

export default Header;






// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import s from "./Header.nodule.scss"

// const Header = () => {

//     // const isActiveStyle = (isActive: boolean) => (isActive ? s.yellow : "")

//     return (
// <div className={s.header}>
//         <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/'></NavLink>
// </div>
//     );
// };

// export default Header;