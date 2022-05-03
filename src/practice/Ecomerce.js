import React from 'react'
import { useState } from 'react'
export default function Ecomerce() {
    const [value, setValue] = useState([])

    function add(e){
        e.preventDefault()
        let details = {
            name: e.target.product.value,
            price: e.target.price.value,
            status : e.target.status.value
        }
        let newProduct = [...value,details];
        console.log(newProduct)
        setValue(newProduct)
    }
    function clearAll(){
        setValue([])
    }
    function deletePro(index){
        let newProduct = [...value];
        delete newProduct[index];
        let modifiedProduct = newProduct.filter((item)=>item);
        setValue(modifiedProduct)
    }

    return (
    <>
    <form onSubmit={add}>
        <h2>
            enter the product : <input type="text" name="product" id="product" /> <br /><br />
            enter the price : <input type="number" name="price" id="price" /> <br /> <br />
            select option : <select name="status" id="statuse">
                <option value="select">select option</option>
                <option value="avalable">Avalable</option>
                <option value="unavalable">Unavalable</option>
            </select>
            <button>Add</button>
            <button type='button' onClick={clearAll}>Clear All</button>
        </h2>
    </form>
    <table border="3">
        <tr>
            <th>NAME</th>
            <th>PRICE</th>
            <th>STATUS</th>
            <th>DELETE</th>
        </tr> 
        {
            value.map((val,index)=>{
                return <tr>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.status}</td>
                    <td> <button type='button' onClick={()=>deletePro(index)}>Delete</button> </td>
                </tr>
            })
        }
    </table>
    </>
  )
}
