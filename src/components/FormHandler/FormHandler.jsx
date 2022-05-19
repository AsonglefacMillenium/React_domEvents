import React, { useState } from "react";
import "./FormHandler.css";

const FormHandler = () => {
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
  return (
    <div className="wrapper">
      <p>Buy some Mangoes</p>

      {/*action to load before submission */}

      {submitting && <div>submiiting form ...</div>}

      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">
            <p>Name: </p>
            <input type="text" name="name" placeholder="Type of Mango" />
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandler;
