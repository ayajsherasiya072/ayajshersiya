import React, { useCallback, useEffect, useRef, useState } from 'react'

function Passwordgenrator() {
    const [length,setLength]=useState(8)
    const [numallow,setNumallow]=useState(false)
    const [charallow,setCharallow]=useState(false)
    const [Password,setPassword]=useState("")

    const passwordRef= useRef(null)
    const copypasswordclipboard=useCallback(()=>{
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(Password)
    },[Password])

    const Passwordgenrator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numallow)
        {
            str+="0123456789"
        }
        if(charallow)
        {
            str+="!@#$%^&*{}[]"
        }
        for (let i=1; i<=length;i++) {
            let char=Math.floor(Math.random() * str.length + 1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    },
    [length,numallow,charallow,setPassword])

    useEffect(()=>{
        Passwordgenrator()
    },[length,numallow,charallow,Passwordgenrator])
  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
    px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type='text' value={Password} className='outline-none 
            w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
            <button className='bg-blue-700' onClick={copypasswordclipboard}>copy</button>
        </div>
        <div>
            |<input type='range' min={8} max={12} value={length}  
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>length:{length}</label>
        </div>
        <div>
            |<input type='checkbox' defaultChecked={numallow} id="numberinput"  
            onChange={()=>{
                setNumallow((prev)=>!prev);
            }}/>
            <label htmlFor='numberinput'>numbers</label>
        </div>
        <div>
            |<input type='checkbox' defaultChecked={charallow} 
            id="charinput"  
            onChange={()=>{
                setCharallow((prev)=>!prev);
            }}/>
            <label htmlFor='charinput'>character</label>
        </div>
    </div>
    </>
  )
}

export default Passwordgenrator
