import React from 'react'
import "./Login.css"
import Frame from "../Photos/Frame.png"

const Login = (props) => {
    return (
        <div className='main_div'>
            <div className='left_sideDiv'>
                <div className='left_heading'>Welcome to App Name</div>
                <div className='sub_heading'>Get ahead of the curve. Join the next generation of health heroes.</div>
                <div className='img_tag'><img src={Frame} alt='broken'/></div>
            </div>
            <div className='Right_sideDiv'>
                <div className='right_heading'>Sign-in to your account</div>
                <input className='inp_field1' placeholder='Username'/>
                <input className='inp_field2' placeholder='Password'/>
                <select className='inp_field3'>
                    <option >Select Unit Name</option>
                </select>
                <a href='./doctordashboard'><button className='btn'>Sign In</button></a>
            </div>
        </div>
    )
}

export default Login
