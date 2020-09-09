import React,{useEffect,useState} from "react";
import "./style.css";

export default function App() {
  const [showLoading, setShowLoading] = useState(false)
      
     useEffect(
        () => {
         
         
          let timer1 = setTimeout(() => setShowLoading(true), 5000) //1
          //let timer1 = setTimeout(() => setShowLoading(!showLoading), 5000)  //2
          // this will clear Timeout when component unmount like in willComponentUnmount
          return () => {
            clearTimeout(timer1)
          }
        },
        
        [] //useEffect will run only one time //1 //rerun 2 veces
           //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
           // [showLoading]   //2 //rerun loop infinito 
      )
    console.log('rerun');
 return showLoading && <div>I will be visible after ~5000ms</div>
}


