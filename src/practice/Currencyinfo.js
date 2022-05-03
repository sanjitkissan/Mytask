import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function Currencyinfo() {
    const [output, setOutput] = useState([]);

    useEffect(()=>{
        axios.get("https://api.coinbase.com/v2/currencies")
        .then((res)=>{
            let data = res.data;
            setOutput(data.data)
        })
    },[])
  return (
    <div>
        <table border="3">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>MIN_SIZE</th>
            </tr>
            {
                output.map((val)=>{
                    return( <tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.min_size}</td>
                    </tr>)
                })
            }
        </table>
    </div>
  )
}
