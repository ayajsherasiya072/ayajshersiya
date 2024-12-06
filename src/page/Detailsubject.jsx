import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

function Detailsubject() {
    // const [data, setData] =useState([])
    const {id} = useParams()
    const data = useLoaderData()

    // useEffect(()=>{
        
    // },[])
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

export const fetchData = async({params})=>{
;
  const { id } = params
  console.log(id)
  const response = await fetch("https://65f80bc2b4f842e80886b65e.mockapi.io/Faculty/"+id)
  const data = await response.json()
  console.log(data) 
  return data  
}