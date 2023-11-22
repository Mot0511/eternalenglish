import themes from '../themes.json'
import {useState} from "react";
import './themes.css'
import Allowbutton from "../components/allowbutton/allowbutton.tsx";

const Themes = () => {

    const [theme, setTheme] = useState<string>(themes.themes[Math.floor(Math.random() * themes.themes.length)])

    return (
        <div className={'page win'}>
            <h1 className={'theme'}>{theme}</h1>
            <Allowbutton onClick={() => setTheme(themes.themes[Math.floor(Math.random() * themes.themes.length)])}>Сгенерировать тему</Allowbutton>
        </div>
    );
};

export default Themes;