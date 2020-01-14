// import React, { useState, useEffect } from "react";

// import "./addOperator.scss"

// import { useDispatch } from "react-redux";

// import {addOp} from '../actions/accountAction'





// const AddOperator = props => {
//   const [operator, setOperator] = useState([]);

//   const handleChange = event => {
//     setOperator({ ...operator, [event.target.name]: event.target.value });
//   };

 

//   const dispatch = useDispatch();

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(addOp(operator));
//   };


//   const openForm = () => {
//     document.getElementById("popDiv").style.display = "block";
//   }

//   const closeForm = () => {
//     document.getElementById("popDiv").style.display = "none";
//   }


//   return (
//     <>
//     <div>
//     <div className="sheet">
//     <div className="headName">Operator</div>
//     <button className="button-Operator" onClick={openForm}>+ Operator</button>
    
//       <div id="popDiv" className="popBox-container">
//         <div className="topCreate">
//           <h1>Create Operator</h1>
//           <div className="closeButton">
//             <button onClick={closeForm}>x</button>
//           </div>
//         </div>
//         <div className="popBox">
//           <div className="type">
//             <div className="title">
//               <label for="Name">First Name</label>
//             </div>
//             <div className="box">
//               <input
//                 type="text"
//                 id="first_name"
//                 placeholder="first name"
//                 name="first_name"
//                 value={operator.first_name}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="type">
//             <div className="title">
//               <label for="Name">Last Name</label>
//             </div>
//             <div className="box">
//               <input
//                 type="text"
//                 id="last_name"
//                 placeholder="last_name"
//                 name="last_name"
//                 value={operator.last_name}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="type">
//             <div className="title">
//               <label for="Email">Email</label>{" "}
//             </div>
//             <div className="box">
//               {" "}
//               <input
//                 type="email"
//                 name="email"
//                 id="Email"
//                 placeholder="email"
//                 value={operator.email}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="type">
//             <div className="title">
//               <label for="Password">Password</label>
//             </div>
//             <div className="box">
//               <input
//                 type="password"
//                 name="password"
//                 id="Password"
//                 placeholder="password"
//                 value={operator.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="type">
//             <div className="title">
//               <label for="Password">Mobile Number</label>
//             </div>
//             <div className="box">
//               <input
//                 type="string"
//                 name="mobile_number"
//                 id="mobile_number"
//                 placeholder="mobile_number"
//                 value={operator.mobile_number}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="CreateAccount">
//           <button type="Submit" onClick={handleSubmit}>
//             Create Operator
//           </button>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>
//     </>
//   );
// };
// export default AddOperator;