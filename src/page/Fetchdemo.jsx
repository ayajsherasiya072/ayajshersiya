import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetchdemo() {
    const [data, setData] =useState([])

    useEffect(()=>{
        fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/")
    .then(res=>res.json())
    .then(res=>setData(res))
    },[])
    return (
        <>
        <table className='table'>
           {
                data.map((item)=>(
                    <tr>
                        <td>{item.subjectName}</td>
                        <td><Link to={"/fetch/"+item.id} className='btn btn-primary'>View Detail</Link></td>
                    </tr>
                ))
            }
            
            
        </table>
        </>
    )
}

export default Fetchdemo