import React, { useState } from 'react'

function Fetchdemo() {
    const [data, setData] =useState("")
    fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/")
    .then(res=>res.json())
    .then(res=>setData(res))
    return (
        <>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Subject Name</th>
                    <th>Subject Code</th>
                    <th>Subject Faculty</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((item)=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.subjectName}</td>
                        <td>{item.subjectCode}</td>
                        <td>{item.subjectFaculty}</td>
                    </tr>
                ))
            }
            </tbody>
            
        </table>
        </>
    )
}

export default Fetchdemo