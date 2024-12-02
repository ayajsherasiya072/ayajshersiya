import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Detailfaculty() {
    const faculty=[
        {
        name:"Dr. Nilesh Gambhava",
        designation:"Professor",
        department:"Computer Science",
        image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
        },
        {
          name:"Dr. Pradyumansinh Jadeja",
          designation:"Professor",
          department:"Computer Science",
          image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
        },
        {
          name:"Dr. Nilesh Gambhava",
          designation:"Professor",
          department:"Computer Science",
          image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
          },
          {
            name:"Dr. Pradyumansinh Jadeja",
            designation:"Professor",
            department:"Computer Science",
            image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
          },
          {
            name:"Dr. Nilesh Gambhava",
            designation:"Professor",
            department:"Computer Science",
            image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg",
            },
            {
              name:"Dr. Pradyumansinh Jadeja",
              designation:"Professor",
              department:"Computer Science",
              image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
            }
    ]
    const {id}=useParams()
  return (
    <>
    <div className="container-fluid vh-100 ">
        <div classname="row vw-100">
            <div className='col'>
            <h1 className='card-text'>{faculty[id].name}</h1>
            <p className='card-text'>{faculty[id].designation}</p>
            <p className='card-text'>{faculty[id].department}</p>
            <Link to={"/faculty"} className='btn btn-secondary'>Back</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Detailfaculty