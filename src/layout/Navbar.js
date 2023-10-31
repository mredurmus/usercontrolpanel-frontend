import React from 'react';
import { Link } from 'react-router-dom';
const btn = document.getElementById('btnSwitch');

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Kullanıcı Yönetim Paneli</Link>
                <Link className="btn btn-light" to="/adduser">Kullanıcı Ekle</Link>
            </nav>
        </div>
    )
};

