import React, { useReducer, useState } from "react";
import "./FormHandler.css";


//form reducer function to spread state and control event.target

const formReducer = (event, state) =>{
    return {
        ...state,
        [event.name]: event.value
    }
}

const FormHandler = () => {
    const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState(false);

  //Handling form submit, prevent deafault and for onsubmit event
  const handleSubmit = (e) => {
    e.preventDefault();
    //set submission status text true when button is clicked
    setSubmitting(true);

    //set timeout for submission text to disappear

    setTimeout(() =>{
        setSubmitting(false);
    }, 5000);

    // alert("Form submitted successfully");
  };


  //function to handle onChange event and store data in the setFormData function as an object

  const handleChange = event =>{
      setFormData({
          name:event.target.name,
          value:event.target.value
      })
  }
  return (
    <div className="wrapper">
      <p>Buy some Mangoes</p>

      {/*action to load before submission */}

      {submitting &&
      
       <div>submiiting form ...
       {/*Coverting object to array and mapping to show the name and value in an li*/}
       <ul>
           {
               Object.entries(formData).map(([name, value]) => (
                   <li key={name}>
                       <strong>{name}:</strong>
                       {value.toString()}
                   </li>
               ))
           }
       </ul>
       </div>
       }

      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">
            <p>Name: </p>
            <input 
            type="text" 
            name="name" 
            placeholder="Type of Mango" 
            onChange={handleChange}

            />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandler;
