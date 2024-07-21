import { createContext , useState} from "react";

export const MenuMobileContext = createContext();

export const MenuMobileProvider = ({children})=>{
    const [menuVisible, setMenuVisible] = useState(false);

    const menuToggle = () =>{ 
        setMenuVisible(!menuVisible);
    }
    return(
        <MenuMobileContext.Provider value={{menuVisible, menuToggle}}>
            {children}
        </MenuMobileContext.Provider>
    )
}