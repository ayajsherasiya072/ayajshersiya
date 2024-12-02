import React, { useState } from 'react'

function Calculator() {
    let [data,setData]=useState()
    
    const handle=(e)=>{
        if(data)  setData(data+=e.target.innerHTML)
        else  setData(e.target.innerHTML)
        console.log(data)
    }

    
  return (
    <>
        <table className='border border-black mt-5 bg-secondary9396552' align='center'>
            <tr>
                {/* <td colSpan={4}><input  type="text"></input></td> */}
                <h3>{data}</h3>
            </tr>
            <tr>
                <td><button className='btn bg-dark text-white' onClick={handle}>1</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>2</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>3</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>+</button></td>
            </tr>
            <tr>
                <td><button className='btn bg-dark text-white' onClick={handle}>4</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>5</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>6</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>-</button></td>
            </tr>
            <tr>
                <td><button className='btn bg-dark text-white' onClick={handle}>7</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>8</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>9</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>*</button></td>
            </tr>
            <tr>
                <td><button className='btn bg-dark text-white' onClick={handle}>0</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>/</button></td>
                <td><button className='btn bg-dark text-white' onClick={handle}>.</button></td>
                <td><button className='btn bg-dark text-white' onClick={()=>{
                    const result = eval(data)
                    setData(result)
                }}>=</button></td>
            </tr>
        </table>
    </>
  )
}

export default Calculator