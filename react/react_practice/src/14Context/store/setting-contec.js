import {createContext, useState} from "react";



//Context생성
//createContext() : Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
const MyContext = createContext({
    language:"",
    thema:"",
    setLanguage: () => {},
    setThema: () => {}
});

//provider
export function SettingProvider({children}) {
    const [language, setLanguage] = useState("Korean")
    const [thema, setThema] = useState("dark")

    return <MyContext.Provider value={{language, setLanguage, thema, setThema}}>{children}</MyContext.Provider>
}

export default MyContext;