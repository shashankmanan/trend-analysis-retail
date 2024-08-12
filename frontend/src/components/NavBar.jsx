import React from 'react'

export default function NavBar() {
  return (
    <div className='navbar navbar-expand-sm bg-primary navbar-dark p-3'>
            <a href="#/" className="navbar-brand">TrendsX</a>
            <div>
                <ul className='navbar-nav'>
                    <li>
                        <a href="#/search" className='nav-link'>Search</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Products</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Supplier</a>
                    </li>
                </ul>
            </div>
    </div>
  )
}
