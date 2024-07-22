import { useEffect, useState } from "react"

export const useScrollY = () => {
    const [scrollDown, setScrollDown] = useState(false);

    const scrollY = 10;
    const alternaScrollDown = () => {
        window.scrollY > scrollY ? setScrollDown(true) : setScrollDown(false);
    }

    useEffect( ()=> {
        window.addEventListener('scroll' , alternaScrollDown);
        return() =>{
            window.removeEventListener('scroll', alternaScrollDown);
        } 
    },[])

    return scrollDown;
}