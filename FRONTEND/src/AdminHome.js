import './App.css';
import NavBar from './NavBar1'
import SideBar from './SideBar1';
import "./AdminHome.css"
import Admin from '../src/images/admin.jpeg'


function UserHome() {
  return (
    <div className='pic'>
    <div>
    <img src={Admin} width={1520} height={720}/>
    <NavBar />
    <SideBar/>
    </div>
    </div>
     );
  }
  
  export default UserHome;
