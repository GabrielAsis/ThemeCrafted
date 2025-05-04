import React from 'react'
import "./MyGigs.scss"
import { Link } from 'react-router-dom'

import { sampleTheme2, sampleTheme3 } from '../../assets'

import { Trash2, Plus, ArrowUpRight, PencilLine } from 'lucide-react'

const MyGigs = () => {


  return (
    <div className='my-gigs'>
      <div className="container">
        <div className="title">
          <h1>My Themes</h1>
          <Link className='link' to="#">
            <button className='primary-btn'><Plus /> Add New Theme</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Details</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>
              <img src={sampleTheme3} alt="" className='img' />
            </td>
            <td>
              <div className="details">
                <h4>Theme1</h4>
                <p>April 14, 2025</p>
                <Link className='view'>View <ArrowUpRight size="1.1rem" /></Link>
              </div>
            </td>
            <td>$20.00</td>
            <td>123</td>
            <td>
              <div className="buttons">
                <button className='outline-btn edit'>
                  <PencilLine />
                  Edit
                </button>
                <button className='primary-btn delete'>
                  <Trash2/>
                  Remove
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs