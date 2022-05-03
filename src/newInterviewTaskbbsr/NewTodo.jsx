import React,{useState} from 'react'

export default function NewTodo() {
    const [inputData, setInputData] = useState("")
    const [data, setData] = useState([])
    const [toggleSubmit,setToggleSubmit] = useState(true);
    const [edit, setEdit] = useState(null)
    function submit(event){
        event.preventDefault()
        let details = {
            comment:event.target.comment.value,
            date:event.target.date.value,
            status:event.target.status.value
            
        }
        let newComment = [...data,details]
        console.log(newComment)
        setData(newComment)

    }

    function deleteComment(index){
        let newCooment = [...data];
        delete newCooment[index];
        let modifiedComment = newCooment.filter((item)=>item);
        setData(modifiedComment)
    }
    function deleteComment(index){
        let newCooment = [...data];
        delete newCooment[index];
        let modifiedComment = newCooment.filter((item)=>item);
        setData(modifiedComment)
    }

  return (
    <div>
        <form id='formOne' onSubmit={submit}>
        <input type="text" class="input-group mb-3" name="comment" id="comment" />
        <input type="date" class="input-group mb-3" name="date" id="date" />
        <select name="status" class="input-group mb-3" id="">
            <option value="select">Select option</option>
            <option value="complited">Complited</option>
            <option value="uncomplited">Uncomplited</option>
        </select>
        <button class="btn btn-primary">Add Comment</button>
        <br />
        
        </form>

       
        {
            data.map((val,index)=>{
                return <ul>
                    <li id='lisiOne' class="list-group-item">{val.comment} {"  "} <br /> {val.date}{"  "} <br /> {val.status}{"  "} <br /><button class="btn btn-primary">Edit</button>{"  "} <br /><button type='button' class="btn btn-primary" onClick={()=>deleteComment(index)}>Delete</button> </li>
                </ul>
            })
        }
    </div>
  )
}
