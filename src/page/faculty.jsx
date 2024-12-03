import React from 'react'
import { Link } from 'react-router-dom'

function Faculty() {
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
  return (
    <>
     <div className='container-fluid m-3 '>
    <div className='row'>
    {
      faculty.map((faculty, id) => (
        <div key={id} className='col-12 col-sm-4 col-md-4 col-lg-4'>
          <div className='card m-2'>
            <img src={faculty.image} alt={faculty.name} className='card-img-top' />
            <div className='card-body'>
              <h5 className='card-title'>{faculty.name}</h5>
              <Link to={"/faculty/"+id} className='btn btn-primary'>View Detail</Link>
            </div>
          </div>
        </div>
      ))
    }
  </div>
  </div>
    </>
  )
}

export default Faculty