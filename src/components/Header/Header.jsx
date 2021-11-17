import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>

            <NavLink to='/feed'>
                <div className={style.feed_button}>
                    <div>Feed</div>
                </div>
            </NavLink>
            <NavLink to='/profile'>
                <div className={style.profile_button}>
                    <p>Profile</p>
                </div>
            </NavLink>
        </div>
    );
}

export default Header;