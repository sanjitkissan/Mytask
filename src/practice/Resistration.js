import React, {useState} from 'react'

export default function Resistration() {
    const [value, setValue] = useState([])
    function submit(e){
        e.preventDefault();
        let nameOb = e.target.name.value;
        let phoneOb = e.target.phone.value;
        let emailOb = e.target.email.value;
        let passwordOb = e.target.password.value;

        setValue([nameOb,phoneOb,emailOb,passwordOb]);
    }
  return (
    <>
        <form onSubmit={submit}>
            enter name : <input type="text" name="name" id="name" />
            enter number : <input type="number" name="phone" id="phone" />
            enter email : <input type="email" name="email" id="email" />
            enter password : <input type="password" name="password" id="password" />
            <button>SUBMIT</button>
        </form>
        <table border="2">
            <tr>
                <th>NAME</th>
                <th>PHONE NO.</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
            </tr>
            <tr>
                {
                    value.map((val)=>{
                        return <td>{val}</td>
                    })
                }
            </tr>
        </table>
    </>
  )
}
