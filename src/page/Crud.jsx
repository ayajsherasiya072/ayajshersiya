import React, { useState } from 'react'

function Crud() {
    const [data, setData]=useState([{}])
    const [name,setName]=useState({
        name:"",
        rollno:"",
        city:""
    })
    
    return (
        <>
        <table>
            <tr>
                <td>Name</td>
                <td><input type='text' value={name.name} onChange={(e)=>setName({...name,name:e.target.value})}/></td>
            </tr>
            <tr>
                <td>rollno</td>
                <td><input type='text' value={name.rollno} onChange={(e)=>setName({...name,rollno:e.target.value})}/></td>
            </tr>
            <tr>
                <td>city</td>
                <td><input type='text' value={name.city} onChange={(e)=>setName({...name,city:e.target.value})}/></td>
            </tr>
            <tr>
                <td colSpan={4}>
                    <button className='btn btn-primary' onClick={()=>{
                        setData([...data,name])
                        setName({
                            name:"",
                            rollno:"",
                            city:""
                        })
                    }}>Save</button></td>
            </tr>
        </table>
        
        <table className='table'>
        {
            data.map((item,id)=>(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.rollno}</td>
                    <td>{item.city}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{
                            const name2=data.filter((item,index)=>index!=id);
                            setData(name2)
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