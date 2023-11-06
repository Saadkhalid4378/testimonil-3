import React , {useState , useEffect} from 'react'

const FunctionalClock = () => {
    const [date , setDate]= useState (new Date());
    useEffect (() => {
       const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);
       
        return () => clearInterval (timerID);
    } , []);

  return (
    <div>
        <h1>{date.toLocaleTimeString()}
        </h1>
    </div>
  )
}

export default FunctionalClock