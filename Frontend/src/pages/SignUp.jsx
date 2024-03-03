import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from "axios"

const SignUp = () => {

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
      <div className='rounded-lg bg-white w-96 text-center p-2 h-max px-4'>
        <Heading heading="Sign Up"/>
        <SubHeading SubHeading="Enter your information to create an account"/>
        <InputBox onChange = {(e)=>{setFirstName(e.target.value)}} inputlabel="First Name" placeholder="Sujin"/>
        <InputBox onChange = {(e)=>{setLastName(e.target.value)}} inputlabel="Last Name" placeholder="A S"/>
        <InputBox onChange = {(e)=>{setUsername(e.target.value)}} inputlabel="Email" placeholder="Sujin@gmail.com"/>
        <InputBox onChange = {(e)=>{setPassword(e.target.value)}} inputlabel="Password" placeholder="12345"/>
        <Button onPress={async()=>{
          const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            firstName,
            lastName,
            username,
            password
          })
        }} buttonlabel="Sign Up"/>
        <BottomWarning bottomwarning="Already have an account?" buttontext="Sign In" to="/Signin"/>
      </div>
    </div>
  )
}

export default SignUp
