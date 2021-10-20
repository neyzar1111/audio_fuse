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
// formatting duration of songs example: 216699 -> '3:36'
export const formatDuration = ms => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor(((ms % 60000) / 1000));
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}