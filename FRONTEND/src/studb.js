import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import Navbar from './NavBar1';
function App() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Phone', value: 'phone' },
    { heading: 'City', value: 'address.city' },
  ]

  return (
    <div className="App">
    <Navbar/>
      <h1 style={{marginTop:"100px"}}>Dynamic Table</h1>
      <Table data={dataTable} column={column} />
    </div>
  );
}

export default App;