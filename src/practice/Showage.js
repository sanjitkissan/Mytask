import axios from 'axios';
import React,{useState} from 'react'
// import image from "./image"

export default function Showage() {
    const [outpt, setOutpt] = useState([])
    const [loading, setLoading] = useState(false)
    function show(e){
        e.preventDefault()
        let nameOb = e.target.name.value;
        setLoading(true);

        axios.get("https://api.agify.io?name="+nameOb)
        .then((res)=>{
            let data= res.data
            setOutpt(`the age of ${nameOb} is ${data.age}`)
        }).finally(()=>{
            setLoading(false)
        },[5000])
    }

  return (
    <div>
        <form onSubmit={show}>
            Enter name : <input type="text" name="name" id="name" />
            <button>Show</button>
        </form>
        {loading ? <img src="https://i.gifer.com/Q8x8.gif" />:""}
        <h1>{outpt}</h1>
    </div>
  )
}
