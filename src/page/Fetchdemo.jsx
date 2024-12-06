import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Fetchdemo() {
    const [data, setData] =useState([])
    const [isUpdate,setIsUpdate] = useState(false)
    const [idupdate,setIdUpdate]=useState(0)

    useEffect(()=>{
        console.log("API Called");
        fetch("https://65f80bc2b4f842e80886b65e.mockapi.io/Faculty")
        .then(res=>res.json())
        .then(res=>setData(res));
    },[isUpdate]);

    const apiurl="https://65f80bc2b4f842e80886b65e.mockapi.io/Faculty/"
    const navigate=useNavigate();
    const [subject, setSubject] = useState({
        subjectName:"",
        subjectCode:"",
        subjectFaculty:""
    })

    return (
        <>
        <table>
                <tr>
                    <td>Enter Subject Name</td>
                    <td><input value={subject.subjectName} type='text' onChange={(e)=>{
                        setSubject({...subject, subjectName:e.target.value});
                    }} /></td>
                </tr>
                <tr>
                    <td>Enter Subject Code</td>
                    <td><input value={subject.subjectCode} type='text' onChange={(e)=>{
                        setSubject({...subject, subjectCode:e.target.value});
                    }} /></td>
                </tr>
                <tr>
                    <td>Enter Subject Fac</td>
                    <td><input value={subject.subjectFaculty} type='text' onChange={(e)=>{
                        setSubject({...subject, subjectFaculty:e.target.value});
                    }} /></td>
                </tr>
                <tr>
                    <td colSpan={2}><button className='btn btn-primary' onClick={()=>{
                        fetch(apiurl,{
                            method:"POST",
                            body:JSON.stringify(subject),
                            headers:{
                              "Content-Type":"application/json"  
                            }
                        })
                        .then(res=>res.json())
                        .then(res=>{
                            setIsUpdate(!isUpdate);
                            setSubject({subjectCode:"",subjectName:"",subjectFaculty:""})
                        });
                    }}>Add</button></td>
                    <td colSpan={2}><button className='btn btn-primary' onClick={()=>{
                        fetch(apiurl+idupdate,{
                            method:"PUT",
                            body:JSON.stringify(subject),
                            headers:{
                              "Content-Type":"application/json"  
                            }
                        })
                        .then(res=>res.json())
                        .then(res=>{
                            setIsUpdate(!isUpdate);
                            setSubject({subjectCode:"",subjectName:"",subjectFaculty:""})
                        });
                    }}>Edit</button></td>
                </tr>
            </table>
        <table className='table'>
           {
                data.map((item)=>(
                    <tr>
                        <td>{item.subjectName}</td>
                        <td><Link to={"/fetch/"+item.id} className='btn btn-primary'>View Detail</Link></td>
                        <td><button className='btn btn-danger' onClick={()=>{
                            fetch(apiurl+item.id,{method:"DELETE"})
                            .then(res=>res.json())
                            .then(res=>{
                                setIsUpdate(!isUpdate);
                            })
                        }}>Delete</button></td>
                        <td><button className='btn btn-secondary' onClick={()=>{
                            setIdUpdate(item.id);
                            fetch(apiurl+idupdate)
                            .then(res=>res.json())
                            .then(res=>setSubject(res))
                        }}>Edit</button></td>
                    </tr>
                ))
            }
            
            
        </table>
        </>
    )
}

export default Fetchdemo