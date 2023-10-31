import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

  let navigate=useNavigate()

  const [user,setUser] = useState({
    name:"",
    userName:"",
    email:""
  })

  const{name,userName,email}=user

  const onInputChange=(e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/")
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
              <h2 className='text-center m-4 '>Kullanıcı Ekleme Formu</h2>
              <form onSubmit={(e)=>onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                  İsim
                </label>
                <input type={"text"}
                className='form-control'
                placeholder='Kullanıcının ismini giriniz'
                name="name"
                value={name}
                onChange={(e)=> onInputChange(e)}/>
              </div>
              <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>
                  Kullanıcı Adı
                </label>
                <input type={"text"}
                className='form-control'
                placeholder='Kullanıcı adını giriniz'
                name="userName"
                value={userName}
                onChange={(e)=> onInputChange(e)}/>
              </div>
              <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                  E-mail
                </label>
                <input type={"text"}
                className='form-control'
                placeholder='Kullanıcının e-mailini giriniz'
                name="email"
                value={email}
                onChange={(e)=> onInputChange(e)}/>
              </div>
              <button type="submit" className='btn btn-primary'>Onayla</button>
              <Link className='btn btn-danger mx-2' to="/">İptal</Link>
              </form>
            </div>
        </div>
    </div>
  )
}
