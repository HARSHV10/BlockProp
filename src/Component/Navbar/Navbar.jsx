import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className=' mt-7 flex navbar ml-80 bg-grey-900 w-1/2 border rounded-xl p-5'>
    <div>
    <Link to='/'>Home</Link>
    </div>
    <div>
    <Link to='/addNominee'>Add Nominee</Link>
    </div>
    <div>
    <Link to='/getProperty'>Get Property</Link>
    </div>
    <div>
    <Link to='/changeStaus'>Change Status</Link>
    </div>
    </div>
  )
}
