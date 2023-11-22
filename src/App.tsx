import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Worder from "./pages/worder.tsx";
import Nav from "./components/nav/nav.tsx";
import Themes from "./pages/themes.tsx";
const App = () => {
    return (
        <BrowserRouter>
            <div className="main">
                <div className="content">
                    <Nav />
                    <Routes>
                        <Route path={'/'}  element={<Worder />}/>
                        <Route path={'/themesGenerator'}  element={<Themes />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;