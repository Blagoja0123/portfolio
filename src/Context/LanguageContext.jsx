import { createContext } from "react";
import { languages } from "../utils/language/languages";
import { useState } from "react";
import { useForceUpdate } from "framer-motion";


export const LanguageContext = createContext();

const LanguageProvider = ({children}) =>{


    const [language, setLanguage] = useState(localStorage.getItem("languageIndex") ? () => languages[parseInt(localStorage.getItem("languageIndex"))] : () => languages[0]);
    localStorage.setItem("languageIndex", language[0].index);
    const changeLanguage = (e) =>{
        setLanguage(languages[e.target.value]);
        localStorage.setItem("languageIndex", language[0].index);
        window.location.reload();
    } 
    return (
        <LanguageContext.Provider value={{language, changeLanguage}} language={language}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;