
import React,{useState} from 'react'
import BasicFormInput from './basicformValidation';
import  './basicform.css'

const initialValue={
     FirstName:"",
     LastName:"",
     Gender:"",
     MobileNumber:"",
     Email:"",
     Address:"",
     Password:"",
     ConfirmPassword:""

}

const Basicform = () => {

    const [values,setValue]=useState(initialValue);
    const inputName=[
      {
      id:1,
      name:"FirstName",
      type:"text",
      placeholder:"First Name",
      label:"First Name",
      pattern:"^[A-Za-z]{4,20}$",
      errorMessage:'Minimum 4 character to maximum 20 Character'
     },
      {
      id:2,
      name:"LastName",
      type:"text",
      placeholder:"Last Name",
      label:"Last Name",
      errorMessage:'Last Name Required'
     },
      {
      id:3,
      name:"Gender",
      type:"text",
      placeholder:"Gender",
      label:"Gender",
      errorMessage:'Gender Required'
     },
      {
      id:4,
      name:"MobileNumber",
      type:"text",
      placeholder:"Mobile Number",
      label:"Mobile Number",
      length:10,
      errorMessage:'MobileNumber must be tenDigit'
     },
      {
      id:5,
      name:"Email",
      type:"text",
      placeholder:"Email",
      label:"Email",
      errorMessage:'Invalid Email'
     },
      {
      id:5,
      name:"Address",
      type:"text",
      placeholder:"Address",
      label:"Address",
      errorMessage:'Address Required'
     },
      {
      id:6,
      name:"Password",
      type:"text",
      placeholder:"Password",
      label:"Password",
      errorMessage:'Password Required'
     },
      {
      id:7,
      name:"ConfirmPassword",
      type:"text",
      placeholder:"Confirm Password",
      label:"Confirm Password",
      errorMessage:'password not matching'
     },
  ];
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(values)
  }
  const handleChange=(e)=>{
    console.log(e.target)
    setValue({...values,[e.target.name]:e.target.value})
  }

  return (   
    <div className='form_container_main'>
      <form onSubmit={handleSubmit}>
        <h3>Register Here</h3>
      {inputName.map((input)=>(
      <BasicFormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />  
      ))}
  
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Basicform