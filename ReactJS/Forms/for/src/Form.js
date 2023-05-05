// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "",
//             lastName: "",
//             email: "",
//             comments: "",
//             isFriendly: true,
//             employment:""
//         }
//     )
//     /**
//      * Challenge: add an email field/state to the form
//      */
//     /**
//    * Challenge: Add a textarea for "comments" to the form
//    * Make sure to update state when it changes.
//    */
//     console.log(formData)

//     function handleChange(event) {
//         const { name, value, type, checked } = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }
     
//     function handleSubmit(event) {
//         event.preventDefault()
//         // submitToApi(formData)
//         console.log(formData)
//     }
    

//     return (
//         <form className="form" onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea className="text"
//                 type="text"
//                 placeholder="comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments} />
//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly"
//             />
//             <label htmlFor="isFriendly">Are you friendly?</label>
//             <fieldset>
//                 <legend>Current employment status</legend>

//                 <input
//                     type="radio"
//                     id="unemployed"
//                     value="unemployed"
//                     name="employment"
//                     checked={formData.employment === "unemployed"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />

//                 <input
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     checked={formData.employment === "part-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <br />

//                 <input
//                     type="radio"
//                     id="full-time"
//                     name="employment"
//                     value="full-time"
//                     checked={formData.employment === "full-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//                 <br />

//             </fieldset>
//             <label htmlFor="favColor">What is your favorite color?</label>
//             <br />
//             <select id="favColor">
//                 <option value="red">--choose--</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//             <input  className="submit" type ="submit"value="submit"/>
//         </form>
//     )
// }
