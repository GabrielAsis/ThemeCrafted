import React from 'react'
import "./Orders.scss"
import { Link } from 'react-router-dom'

import { sampleTheme2, sampleTheme3 } from '../../assets'

import { MessageCircleMore, Mail } from 'lucide-react'

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  }

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Details</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
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
              </div>
            </td>
            <td>$20.00</td>
            <td>John Doe</td>
            <td>
              <div className="buttons">
                <Link to="#">
                  <button className='primary-btn email'><Mail /></button>
                </Link>
                <Link to="#">
                  <button className='outline-btn message'><MessageCircleMore /></button>
                </Link>

              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders