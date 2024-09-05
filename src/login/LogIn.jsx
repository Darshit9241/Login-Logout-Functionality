import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const LogIn = () => {
 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email:"",
    password:"",
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    const loginuser = JSON.parse(localStorage.getItem("user"))
    console.log("loguser",loginuser)
    if(input.email === loginuser.email && input.password === loginuser.password){
      localStorage.setItem("loggin",true)
      navigate("/")
    }else{
      alert("email and password are wrong")
    }
  }

  const handleSignUpClick = () => {
        navigate("/signup");
      };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              name="email"
              value={input.email}
              onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              name="password"
              value={input.password}
              onChange={(e)=>{setInput({...input,[e.target.name]:e.target.value})}}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white p-3 rounded-lg font-medium ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
             >
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>
         </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
             className="text-blue-600 hover:text-blue-500"
            onClick={handleSignUpClick}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LogIn;




// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LogIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post('https://react-task-cyan-nine.vercel.app/login', {
//         email,
//         password
//       });      
//       if (response.data.status) {
//          localStorage.setItem("token", response.data.token)
//         navigate("/")
//       }  
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSignUpClick = () => {
//     navigate("/signup");
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Sign In
//         </h2>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember_me"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="remember_me"
//                 className="ml-2 block text-sm text-gray-900"
//               >
//                 Remember me
//               </label>
//             </div>
//             <div className="text-sm">
//               <a href="#" className="text-blue-600 hover:text-blue-500">
//                 Forgot your password?
//               </a>
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className={`w-full bg-blue-600 text-white p-3 rounded-lg font-medium ${
//                 loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
//               } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               disabled={loading}
//             >
//               {loading ? "Logging In..." : "Log In"}
//             </button>
//           </div>
//           {error && <div className="text-red-600 text-center">{error}</div>}
//         </form>
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <button
//             onClick={handleSignUpClick}
//             className="text-blue-600 hover:text-blue-500"
//           >
//             Sign up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
