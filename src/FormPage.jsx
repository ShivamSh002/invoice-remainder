import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormPage = () => {
  return (
    <div>
      <h1>Invoice Remainder</h1>
      <div><h2>Email :</h2><TextField id="outlined-basic" label="Email" variant="outlined" /></div>
      <div><h2>Message :</h2><TextField id="outlined-basic" label="Message" variant="outlined" /></div>
      <div><h2>Date :</h2><TextField id="outlined-basic" label="Date" variant="outlined" /></div>
      <div><h2>Amount :</h2><TextField id="outlined-basic" label="Amount" variant="outlined" /></div>
      <br/>
      <div><Button variant="contained">Submit</Button></div>
    </div>
  )
}

export default FormPage