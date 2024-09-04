import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        // .then((res)=>console.log(typeof(res))) //self
        .then((res) => res.json()) /*Calls res.json() on the Response object, returning a promise.
         The promise resolves with the parsed JSON data.*/
        .then((res) => setData(res[currency]))  /*Receives the resolved value of the res.json() promise (the parsed JSON data).
        Accesses the property specified by currency from this JSON data object.*/ 
        console.log(data); 
        

    }, [currency])
    // return [data, setData]
    return data

}


export default useCurrencyInfo;