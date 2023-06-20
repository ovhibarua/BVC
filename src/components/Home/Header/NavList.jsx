import React from 'react'

function NavList() {
  return (
    <nav className='bg-white'>
        <div className='container mx-auto py-2 xl:py-4'>
            <ul className='flex justify-between items-center'>
                <li><h3>Data Science</h3></li>
                <li><h3>Network & Security</h3></li>
                <li><h3>Programming</h3></li>
                <li><h3>Web & Mobile Development</h3></li>
                <li><h3>Software Testing</h3></li>
                <li><h3>Database</h3></li>
                <li><h3>Software Engineering</h3></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavList