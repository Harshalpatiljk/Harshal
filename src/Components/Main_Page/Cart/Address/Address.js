import React, { useState } from 'react';
import "./address.css"

function Address() {
  let data={
    customerName: "", ph_no: "", address: "", landmark: "", pincode: ""
  }
  const [User, setUser] = useState(
    data
  );
  const getData = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...User, [name]: value
    });

  }


  const submitDataHandler = () => {
    localStorage.setItem("AddressCredentials",JSON.stringify(User))

  }

  return (
    <div className='cartContainer'>
      <h3>Address</h3><hr></hr>
      <h5>Enter some basic details</h5>
      <form action="" className="" onSubmit={(e) => {
        e.preventDefault()
      }}>
        <label for="">Name:</label>
        <input type="text" className="data" name='customerName'placeholder='enter your name...' value={User.name} onChange={getData} /><br />
        <label for="">Ph No:</label>
        <input type="number" className="data" name='ph_no'placeholder='enter your ph no....' value={User.ph_no} onChange={getData} /><br />
        <label for="">Address:</label>
        <input type="text" className="data" name='address'placeholder='enter your address...' value={User.address} onChange={getData} /><br />
        <label for="">Village/City:</label>
        <input type="text" className="data" name='area' placeholder='enter your city/village-state...'value={User.area} onChange={getData} /><br />
        <label for="">Landmark:</label>
        <input type="text" className="data" name='landmark' placeholder='enter your landmark...'value={User.landmark} onChange={getData} /><br />
        <label for="">PinCode:</label>
        <input type="number" className="data" name='pincode'placeholder='enter your pincode...' value={User.pincode} onChange={getData} /><br />
        

        <button type="submit" id='checkOut' onClick={submitDataHandler} >Save Address</button>

      </form>

    </div>
  )
}

export default Address