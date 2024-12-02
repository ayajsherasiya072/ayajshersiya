import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <nav>
                    <ul style={{listStyle:"none"}}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar