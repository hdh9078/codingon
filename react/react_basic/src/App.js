import {Outlet} from "react-router-dom"
import { useState } from 'react';


import LifeCycleFunc from "./08Lifecycle/LifeCycleFunc"
import RefSampleClass1 from "./09Ref/RefSampleClass1";
import RefSampleClass2 from "./09Ref/RefSampleClass2";
import RefSampleFunc1 from "./09Ref/RefSampleFunc1";
import RefSampleFunc2 from "./09Ref/RefSampleFunc2";
import UseCallback from "./10Hook/useCallback";
import UserMemo from "./10Hook/useMemo";
import Counter from "./10Hook/useReducer";
import SassComponent from "./11Style/SassComponent";
import Style from "./11Style/Style";
import StyledComponent from "./11Style/StyledComponent"
import Router from "./12Router/Router";
import Header from "./12Router/Header";
import Form from "./13Form/Form";
import MyContext, { LanguageProvider } from './14Context/store/lang-contec';
import LanguageSelector from "./14Context/store/LangSelector";


function App() {

    // const [language, setLanguage] = useState()

    return (
        <>
            {/* <LanguageProvider>
                <LanguageSelector/>
            </LanguageProvider> */}
            
            {/* <MyContext.Provider value={{language:language, setLanguage:setLanguage}}> */}
                {/* <MyContext.Consumer>
                    {(value) => {
                        return (
                            <div>
                                <h2>현재 선택된 언어: {value.language}</h2>
                                <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                                    <option value="ko">한국어</option>
                                    <option value="en">영어</option>
                                    <option value="jp">일본어</option>
                                </select>
                            </div>
                        )
                    }}
                </MyContext.Consumer> */}
                {/* <LanguageSelector/> */}
            {/* </MyContext.Provider> */}
        </>
    )    
}


export default App;
