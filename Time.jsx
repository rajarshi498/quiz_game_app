import { useState,useEffect } from "react";
function Timer({setStop,questionNo}){
    const [timer,setTimer]= useState(30);
    useEffect(()=>{
        if(timer===0) return setStop(true);
        const interval=setInterval(()=>{
            setTimer((c) => c-1);
        },1000);
        return ()=> clearInterval(interval);
    },[setStop,timer]);
    useEffect(()=>{
        setTimer(30);
    },[questionNo]);
    return timer;
}
export default Timer