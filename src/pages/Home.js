import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';



export default function Home() {
    const [users,setUsers]= useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers=async() => {
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
      };

  return (
    <div className='container'>
        <div className='py-4'>
            <div className="table-responsive">
                <table className="table table-dark table-striped border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">İsim</th>
                            <th scope="col">Kullanıcı Adı</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Eylem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr className="">
                            <td scope="row" key={index}>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/viewuser/${user.id}`}  className="btn btn-info mx-2">Göster</Link>
                                <Link to={`/edituser/${user.id}`} className="btn btn-success mx-2">Düzenle</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-danger mx-2">Sil</button>
                            </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
