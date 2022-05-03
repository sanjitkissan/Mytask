// import axios from 'axios'
import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default function InterviewTask() {
    const [output, setOutput] = useState([])

    useEffect(() => {
      axios.get("https://reqres.in/api/users?page=1")
      .then((res)=>{
          let details = res.data;
          let newData= details.data
          setOutput(newData)
      })
    },)

    function deleteItem(index){
        let newItem = [...output]
        delete newItem[index];
        let deletedItem = newItem.filter((item)=>item)
        setOutput(deletedItem);
        console.log(deletedItem)

    }
    
  return (
    <>

       
            {
                output.map((val,index)=>{
                    return <ul>
                        
                        <li>{val.first_name} {val.last_name} <button type='button' onClick={ () => deleteItem(index)} >Delete</button></li>
                       
                        
                       
                    </ul>
                })
            }
       
    </>
  )
}
