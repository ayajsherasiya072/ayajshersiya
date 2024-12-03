import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
        <img class="navbar-brand" src='https://darshan.ac.in/Content/media/DU_Logo.svg' style={{height:"50px"}}/>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto  mb-2 mb-lg-0 position-absolute top-3 end-0 ">
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/about">About</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/contact">Contact</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/faculty">Faculty</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/calc">Calc</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/state">State</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/crud">Crud</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active fs-5" aria-current="page" to="/fetch">Fetch</Link>
            </li>
        </ul> 
        </div>
        </div>
    </nav>
    </>
  )
}

export default Menu