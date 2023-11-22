import cl from './nav.module.css'
import Mybutton from "../mybutton/mybutton.tsx";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={cl.nav}>
            <h1 className={cl.logo}>EternalEnglish</h1>
            <Link to={'/'}><Mybutton fullwidth={true} style={{marginLeft: '20px'}}>Изучение слов</Mybutton></Link>
            <Link to={'/themesGenerator'}><Mybutton fullwidth={true} style={{marginLeft: '20px'}}>Генератор тем для монологов</Mybutton></Link>
        </div>
    );
};

export default Nav;