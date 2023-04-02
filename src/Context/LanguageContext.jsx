import { createContext } from "react";
import { languages } from "../utils/language/languages";
import { useState } from "react";


export const LanguageContext = createContext();

const LanguageProvider = ({children}) =>{
    const [language, setLanguage] = useState(languages[0]);

    const changeLanguage = (e) =>{
        setLanguage(languages[e.target.value]);
    } 

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;