// import React,  { useState } from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_PET } from "../../utils/mutations";
// import { QUERY_PETS } from "../../utils/queries";

// // import { Link } from 'react-router-dom';
// // import { Form, Button, Alert } from "react-bootstrap";

// // import { useMutation } from '@apollo/client';
// // import { ADD_PET } from '../utils/mutations';
// // import { QUERY_PETS } from '../../utils/queries';
// const PetForm = () => {
//   const [dogName,  setdogName] = useState ('');
  
//   const handleForm = async (e) => {
//     e.preventDefault();
//     console.log("hello")
//     const [addPet, { error }] = useMutation(ADD_PET, {
//       update(cache, { data: { addPet }}) {
//         try {
//           const { pets } = cache.readQuery({ query: QUERY_PETS });
//           Cache.writeQuery({
//             query: QUERY_PETS,
//             data: {pets: [addPet,  ...pets]},
//           });
    
//         } catch (e) {
//           console.error(e);
//         }
//       }
//     })
    
//   try {
//     const { data } = await addPet({
//       variables: {
//         dogName,
//         // dogBreed,
//         // dogGender,
//         // dogAge
//       }
//     })
//     setdogName('')
//   } catch (err) {
//     console.error(err);
//   }
// } 

// function handleChange(e) {
//   const { value } = e.target;
//   setdogName(value)
//   console.log(dogName)
// }

//   return (
//     <form onSubmit={handleInput}>
//       <input className="dogName" id="dogName" placeholder="dog name" value={dogName} onChange={handleChange}></input>
//       <input className="dogBreed" id="dogBreed" placeholder="dog breed"></input>
//       <input
//         className="dogGender"
//         id="dogGender"
//         placeholder="dog gender"
//       ></input>
//       <input className="dogAge" id="dogAge" placeholder="dog age"></input>
//       <button className="submit" id="submit" type="submit">Add Pet</button>
//     </form>
//   );
// };
// export default PetForm;


