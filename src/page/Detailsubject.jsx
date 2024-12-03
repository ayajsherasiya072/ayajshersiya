import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Detailsubject() {
    const [data, setData] =useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/"+id)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])
  return (
    <>
    <h1>{data.id}</h1>
    <h1>{data.subjectCode}</h1>
    <h1>{data.subjectFaculty}</h1>
    <Link to="/fetch" className='btn btn-secondary'>Back</Link>
    </>
  )
}

export default Detailsubject