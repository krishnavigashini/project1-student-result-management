import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//   const deleteUser = async (id) => {
//     await axios.delete(`http://localhost:8080/delete/${id}`);
//     loadUsers();
 //};

const Navbar = () => {
    const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result =  axios.get("http://localhost:9090/");
    setUsers(result.data);
  };

    return (
            <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
                <div className="container-fluid">
                    
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/ResultManage" className="nav-link active" aria-current="page" href="#">HOME</Link>
                            </li>

                            <li className="nav-item">
                                <Link  to="/addProduct" className="nav-link active" aria-current="page" href="#">POST</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
    )
}

export default Navbar;