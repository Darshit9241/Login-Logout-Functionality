import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  const handlelogout = () => {
    localStorage.removeItem("loggin");
    navigate("./login");
  };
  const handlelogin = () => {
    localStorage.setItem("token", "");
    navigate("./login");
  };
  return (
    <div>
      <div className="flex justify-between">
        <div className="px-10 py-5">
          <button variant="contained" className='bg-black py-3 px-8 text-white rounded-lg' onClick={handlelogin}>
            Login
          </button>
        </div>
        <div className="px-10 py-5">
          <button variant="contained" className='bg-black py-3 px-8 text-white rounded-lg' onClick={handlelogout}>
            logout
          </button>
        </div>
      </div>
    </div>
  )
}
