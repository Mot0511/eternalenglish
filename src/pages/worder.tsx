import './worder.css'
import dict from '../words.json'
import {useEffect, useState} from "react";
import Allowbutton from "../components/allowbutton/allowbutton";
import Rejectbutton from "../components/rejectbutton/rejectbutton";

const App = () => {

    const wordsCount = 2000

    const [stage, setStage] = useState(0)
    const [knows, setKnows] = useState(0)

    const wordNumber = Math.floor(Math.random() * wordsCount);
    const [engword, setEngword] = useState<string>(dict.words[wordNumber][0])
    const [rusword, setRusword] = useState<string>(dict.words[wordNumber][1])

    const [words, setWords] = useState<string[][]>([])
    const [isRus, setIsRus] = useState(false)

    useEffect(() => {
        const engword = document.getElementById('engword')

        if (engword) {
            engword.addEventListener('mouseenter', () => setIsRus(true))
            engword.addEventListener('mouseleave', () => setIsRus(false))
        }
    }, []);

    const next = () => {
        const wordNumber = Math.floor(Math.random() * wordsCount);
        const wordsNumber = Math.floor(Math.random() * 10);
        if (stage == 0){
            setEngword(dict.words[wordNumber][0])
            setRusword(dict.words[wordNumber][1])
        } else {
            setEngword(words[wordsNumber][0])
            setRusword(words[wordsNumber][1])
        }
    }
    const addDict = () => {
        if (stage == 0){
            if (words.length == 9){
                setStage(1)
            }
            setWords([...words, [engword, rusword]])
        } else {
            setKnows(0)
        }
        next()
    }
    const know = () => {
        if (stage == 1){
            if (knows == 29){
                setWords([])
                setStage(0)
            } else {
                setKnows(knows + 1)
            }
        }
        next()
    }
    return (
        <div className="page">
            <div className="word-block">
                <p className="stage">{stage == 0 ? 'Поиск слов' : 'Заучивание'}</p>
                <div className="word">
                    <h1 className="engword" id={'engword'}>{engword}</h1>
                    {
                        isRus && <p className="rusword">{rusword}</p>
                    }
                    <div className="btns">
                        <Allowbutton fullwidth={false} type={'allow'} onClick={know}>Знаю</Allowbutton>
                        <Rejectbutton fullwidth={false} type={'reject'} onClick={addDict}>Не знаю</Rejectbutton>
                    </div>
                </div>
            </div>
            <div className="words">
                <p className={'words__heading'}>Слова для заучивания:</p>
                {
                    words.map(word => <div className="word-item">{word[0]} - {word[1]}</div>)
                }
            </div>
        </div>
    );
};

export default App;