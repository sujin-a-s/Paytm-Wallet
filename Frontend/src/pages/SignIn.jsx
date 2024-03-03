import React from 'react'
import InputBox from '../components/InputBox'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const SignIn = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>
        <div className='p-2 px-3 rounded-lg bg-white w-96 text-center h-max'> 
            <Heading heading="Sign In"/>
            <SubHeading SubHeading="Enter your credentials to access your account"/>
            <InputBox inputlabel="Email" placeholder="sujin@gmail.com"/>
            <InputBox inputlabel="Password" placeholder="12345"/>
            <Button buttonlabel="Sign In"/>
            <BottomWarning bottomwarning="Have you not registered yet?" buttontext="Sign Up" to="/signup"/>
        </div>
    </div>
  )
}

export default SignIn