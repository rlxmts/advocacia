import { useEffect, useState } from "react";

export const usePageWidth = ()=> {
    const [widthPage, setWidthPage] = useState('');  

    useEffect( ()=> {
        window.addEventListener('resize', setWidthPage(window.innerWidth));
        return() => window.removeEventListener('resize', setWidthPage(window.innerWidth));
    }, []) 

    return widthPage;
}