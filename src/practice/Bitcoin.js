import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function Bitcoin() {
    const [output, setOutput] = useState()


    useEffect(() => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res)=>{
            let data = res.data;
            console.log(data)
            setOutput(data.bpi.EUR.rate)
        })
    })
    
  return (
    <>
        <h1>{output}</h1>
    </>
  )
}
