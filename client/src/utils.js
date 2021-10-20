//Higher-order function for async/await error handling
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export const catchErrors = fn =>{
    return function (...args){
        return fn( ...args).catch((err)=>{
            console.error(err)
        })
    }
}
export function ScrollToTop(){
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname]);
    return null;
}