import React from 'react'
import {Link} from 'react-router-dom'

function Topbar() {
  return <div className="d-flex justify-content-center mt-4">
   <ul className="nav nav-underline">
              <li className="nav-item">
                 <Link to ="all"className="nav-link"hrfe="#">ALL</Link>
             </li>
                 <li className="nav-item">
                   <Link to="fullstackdevelopment"className="nav-link"hrfe="#">FULL STACK DEVELOPMENT</Link>  
             </li>
                  <li className="nav-item">
                    <Link to="Data science"className="nav-link"hrfe="#">DATA SCIENCE</Link>
             </li>
                  <li className="nav-item">
                   <Link to="cybersecurity"className="nav-link"hrfe="#">CYBER SECURITY</Link>
             </li>
                  <li className="nav-item">
                   <Link to="career"className="nav-link"hrfe="#">CAREER</Link>
             </li>
         </ul>
    </div>
 
}

export default Topbar
