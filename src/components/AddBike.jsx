import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddBike = () => {
  const [input,setInput] = new useState([
    {
      "bikeId":"",
      "bikeName":"",
      "bikeColor":"",
      "bikePrice":""
    }
  ])
  const handler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }
  const add=()=>{
    axios.post("http://localhost:3000/bike/add",input).then((response)=>{
      console.log(response.data)
      if(response.data.status === "success"){
        alert("successfully added")
        setInput({
          "bikeId":"",
          "bikeName":"",
          "bikeColor":"",
          "bikePrice":""
        })
      }else{
        alert("somthing went wrong")
      }
    })
  }
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Bike ID</label>
                <input type="text" className="form-control" name='bikeId' value={input.bikeId} onChange={handler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Bike Name</label>
                <input type="text" className="form-control" name='bikeName' value={input.bikeName} onChange={handler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Bike Color</label>
                <input type="text" className="form-control" name='bikeColor' value={input.bikeColor} onChange={handler} />


              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

              <label htmlFor="" className="form-label">Bike Price</label>
                <input type="text" className="form-control" name='bikePrice' value={input.bikePrice} onChange={handler} />


              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <button className="btn btn-success" onClick={add}>Add</button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBike