import React,{useState, useRef} from 'react'
import "./style.css"
export default function Todo() {
    const [data, setData] = useState([])
    const [editeIndex, setEditeIndex] = useState(null);

    const commentRef = useRef();
    const dateRef = useRef();
    const statusRef = useRef();

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
    function searchData(){
        let date = document.getElementById("dateTwo").value;
        console.log(date)
        let newData = data.filter((val,index)=>{
            if (val.date == date){
                return true;
            }else{
                return false
                
            }
        })
        setData(newData)
    }

    function editComment(i){
        console.log(i)
        setEditeIndex(i);
        let filterData = data.filter((val,index)=>{
            if (index==i){
                return true;
            }
        })
        console.log(filterData);

        commentRef.current.value="";
        dateRef.current.value = "";
        statusRef.current.value = "";
    }
    function updateData (event){
        event.preventDefault()
        let newInfo = data.map((val, index)=>{
            if(index==editeIndex){
                console.log(val);
                val.comment=commentRef.current.value;
                val.date=dateRef.current.value;
                val.status = statusRef.current.value;
            }
            return val;
        })
        setData(newInfo);
        commentRef.current.val="";
        dateRef.current.value = "";
        statusRef.current.value = "";
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
       Enter your comment :  <input type="text" className="input-group mb-3" name="comment" id="comment" ref={commentRef}/>
       Select the date :  <input type="date" className="input-group mb-3" name="date" id="date" ref={dateRef} />
       Selecte the option : <select name="status" className="input-group mb-3" id="" ref={statusRef}>
            <option value="select">Select option</option>
            <option value="complited">Complited</option>
            <option value="Incomplited">Incomplited</option>
        </select>
        
        {editeIndex != null ? <button type='button' className="btn btn-primary" onClick={updateData}>Update</button> : <button className='btn btn-primary'>Add comment</button> }
        
        </form>

        Enter the date to search the comment : <input type="date" name="search" className="input-group mb-3" id='dateTwo' />
        <button type='button' className='btn btn-primary' onClick={searchData} >Search</button>

        {
            data.map((val,index)=>{
                return <ul>
                    <li id='lisiOne' className="list-group-item">{val.comment} {"  "} <br /> {val.date}{"  "} <br /> {val.status}{"  "} <br/>
                    <button className="btn btn-primary" onClick={()=>editComment(index)}>Edit</button>
                    {"  "} <br /><button type='button' className="btn btn-primary" onClick={()=>deleteComment(index)}>Delete</button> </li>
                </ul>
            })
        }
    </div>
  )
}
