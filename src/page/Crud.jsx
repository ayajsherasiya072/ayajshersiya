import React, { useState } from 'react'

function Crud() {
    const [name,setName]=useState([])
    const [data, setData]=useState("")
    return (
        <>
        <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
        <button onClick={()=>{
            setName([...name,data])
            setData("")
        }}>Save</button>
        <table>
        {
            name.map((item,id)=>(
                <tr>
                    <td>{item}</td>
                    <td>
                        <button onClick={()=>{
                            const name2=name.filter((item,index)=>index!=id);
                            setName(name2)
                        }}>Delete</button>
                    </td>
                </tr>
            ))
        }
        </table>
        </>
    )
}

export default Crud