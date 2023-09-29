import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Toasitify code
  const notify = ()=>{
    toast.success('🦄 Successfully Login!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }


  // End toasrify
  const [inputF, setinputF] = useState('');
  const getUsers = async () =>{
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    setusers(data);
  }
  const [users, setusers] = useState([]);
  useEffect(() => {
    getUsers();
  
  },[])
  const [navdata, setnavdata] = useState('GameEngine')
  return (
    <>
    <Navbar title={navdata}/>
      <h1 className='heading'>Enter your name: </h1>
      <input type="text" className='inputBlock' value={inputF} onChange={
        (e)=>{
          setinputF(e.target.value)
        }
      }/>
      <br />
      <button id='btn' onClick={getUsers}>Click here</button>

      {/* This button is used for Toastify */}
      <button id='btn' onClick={notify}>Toastify</button>
      <ToastContainer/>

      <div className="container">
          {users.map((e)=>{
              return (
              <>
              <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{e.username}</h4>
                  <ul className='Ulist'>
                  <li><h5>Name: {e.name}</h5></li>
                  <li><h5>Ph# {e.phone}</h5></li>
                  <li><h5>Address: {e.address.city}</h5></li>
                  <li><h5>Website: {e.website}</h5></li>
                  <li><h5>Company: {e.company.bs}</h5></li>
                  <li><h5>Gmail: {e.email}</h5></li>
                  </ul>
                </div>
              </div>
              </>
          )})}
      </div>
    </>
  );
}

export default App;
