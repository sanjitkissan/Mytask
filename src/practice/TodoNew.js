import React, {useState} from 'react'

export default function TodoNew() {
    const [todo, setTodo] = useState([])

    function add(e){
        e.preventDefault();
        let details = {
            name:e.target.name.value,
            status: e.target.status.value
        }
        let newTodo =[...todo,details];

        console.log(todo);
        setTodo(newTodo)
    }
    function clearall(){
        setTodo([]);
    }

    function deleteTodo(index){
        
        let newTodo = [...todo];
        delete newTodo[index]
        let deleteNewTodo = newTodo.filter((item)=>item)
        setTodo(deleteNewTodo)
        console.log(deleteNewTodo)
    }

  return (
    <>
        <form onSubmit={add}>
            enter the value : <input type="text" name="name" id="name" /> <br /><br />
            select the option :
            <select name="status" id="status">
                <option value="select">select</option>
                <option value="complit">Complite</option>
                <option value="pending">Pending</option>
            </select>
                <button>add</button>
                <button onClick={clearall}>Clear All</button>
        </form>
        <table border="3">
            <tr>
                <th>NAME</th>
                <th>STATUS</th>
                <th>DELETE</th>
            </tr>
            {
                todo.map((val,index)=>{
                    return <tr>
                        <td>{val.name}</td>
                        <td>{val.status}</td>
                        <td> <button type='button' onClick={ () => deleteTodo(index)}>Delete</button> </td>
                    </tr>
                })
            }
        </table>
    </>
  )
}
