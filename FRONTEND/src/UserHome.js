import './App.css';
import NavBar from './NavBar'
import SideBar from './SideBar';
import Student from '../src/images/student.jpg'
import './UserHome.css'

function UserHome() {
  return (
    <div className='pic'>
    <div>
    <img src={Student}/>
    <NavBar />
    <SideBar/>
    </div>
    </div>
     );
  }
  
  export default UserHome;
