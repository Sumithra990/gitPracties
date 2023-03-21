import React,{useState} from 'react'
import  './basicform.css'
const BasicformValidation = (props) => {
  const{label,errorMessage,onChange,...inputProps}=props
  const [focused,setFocused]=useState(false)
 const handleBlur=()=>{
  setFocused(true)
 }
  return (
    <div className='form_container' >
      <label>{label}</label>
     {inputProps.name==='Gender'?
   <select name="Gender" {...inputProps} onChange={onChange} onBlur={handleBlur} focused={focused.toString()}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="orther">Orther</option>
  </select>
  : <input {...inputProps} onChange={onChange} onBlur={handleBlur} onFocus={()=>inputProps.name==='ConfirmPassword' &&setFocused(true)} focused={focused.toString()}/>
  }
   <span>{errorMessage}</span>
    </div>
  )
}

export default BasicformValidation