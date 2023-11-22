"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var words_json_1 = require("./words.json");
var react_1 = require("react");
var allowbutton_1 = require("./components/allowbutton/allowbutton");
var rejectbutton_1 = require("./components/rejectbutton/rejectbutton");
var App = function () {
    var wordsCount = 50;
    console.log(words_json_1.default);
    var _a = (0, react_1.useState)(words_json_1.default.engwords[Math.floor(Math.random() * wordsCount)]), engword = _a[0], setEngword = _a[1];
    var _b = (0, react_1.useState)(words_json_1.default.engwords[Math.floor(Math.random() * wordsCount)]), rusword = _b[0], setRusword = _b[1];
    var _c = (0, react_1.useState)([]), words = _c[0], setWords = _c[1];
    var _d = (0, react_1.useState)(false), isRus = _d[0], setIsRus = _d[1];
    (0, react_1.useEffect)(function () {
        document.getElementById('engword').addEventListener('mouseenter', function () { return setIsRus(true); });
        document.getElementById('engword').addEventListener('mouseleave', function () { return setIsRus(false); });
    }, []);
    var next = function () {
        var wordNumber = Math.floor(Math.random() * wordsCount);
        setEngword(words_json_1.default.engwords[wordNumber]);
        setRusword(words_json_1.default.ruswords[wordNumber]);
    };
    var addDict = function () {
        setWords(__spreadArray(__spreadArray([], words, true), [[engword, rusword]], false));
        next();
    };
    console.log(words_json_1.default);
    return (<div className='main'>
            <div className="content">
                <div className="word-block">
                    <div className="word">
                        <h1 className="engword" id={'engword'} onMousemove={function () { return setIsRus(true); }}>{engword}</h1>
                        {isRus && <p className="rusword">{rusword}</p>}
                        <div className="btns">
                            <allowbutton_1.default fullwidth={false} type={'allow'} onClick={next}>Знаю</allowbutton_1.default>
                            <rejectbutton_1.default fullwidth={false} type={'reject'} onClick={addDict}>Не знаю</rejectbutton_1.default>
                        </div>
                    </div>
                </div>
                <div className="words">
                    <p className={'words__heading'}>Слова для заучивания:</p>
                    {words.map(function (word) { return <div className="word-item">{word[0]} - {word[1]}</div>; })}
                </div>
            </div>
        </div>);
};
exports.default = App;
//# sourceMappingURL=App.js.map