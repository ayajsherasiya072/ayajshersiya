import React, { useState } from 'react'

function Demostate() {
    const [count,setCount] =useState(200)
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>setCount(count+10)}>Increment</button>
    <button onClick={()=>setCount(count-10)}>Decrement</button>
    <img width={count} src='https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg'/>
    </>
  )
}

export default Demostate