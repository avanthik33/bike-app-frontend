import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewBike = () => {
  const [data,setData] = new useState([])
  const read=()=>{
    axios.get("http://localhost:3000/bike/view").then((response)=>{
      setData(response.data)
    })
  }
  useEffect(()=>{read()},[])
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Bike ID</th>
                <th scope="col">Bike Name</th>
                <th scope="col">Bike Price</th>
                <th scope="col">Bike Color</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value,index)=>{
                  return <tr>
                  <td>{value.bikeId}</td>
                  <td>{value.bikeName}</td>
                  <td>{value.bikePrice}</td>
                  <td>{value.bikeColor}</td>
                </tr>
                })
              }
            </tbody>
          </table>


          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBike