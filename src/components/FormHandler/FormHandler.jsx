import React, { useReducer, useState } from "react";
import "./FormHandler.css";


//form reducer function to spread state and control event.target

const formReducer = (event, state) =>{

    if (event.reset) {
        return {
            count: 0,
            name: '',
            mango: '',
            'gift-wrap': false

        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

const FormHandler = () => {
    const [formData, setFormData] = useReducer(formReducer, {count:100})
  const [submitting, setSubmitting] = useState(false);

  //Handling form submit, prevent deafault and for onsubmit event
  const handleSubmit = (e) => {
    e.preventDefault();
    //set submission status text true when button is clicked
    setSubmitting(true);

    //set timeout for submission text to disappear

    setTimeout(() =>{
        setSubmitting(false);
        setFormData({
            reset: true
        })
    }, 5000);

    // alert("Form submitted successfully");
  };


  //function to handle onChange event and store data in the setFormData function as an object

  const handleChange = event =>{
      const isCheckbox = event.target.type === 'checkbox';
      setFormData({
          name:event.target.name,
          value:isCheckbox ? event.target.checked : event.target.value
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
                       <strong>{name}</strong>:
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
            <p>Name </p>
            <input 
            type="text" 
            name="me" 
            placeholder="Type of Mango" 
            onChange={handleChange}
            value={formData.me || ''}

            />
          </label>
        </fieldset>

        <fieldset>
            <label htmlFor="">
                <p>Mango type</p>
                <select name="mango" id="" onChange={handleChange} value={formData.mango || ''}>
                <option value="">Please choose a value</option>
                    <option value="milli">milli</option>
                    <option value="nzefe">nzefe</option>
                    <option value="asong">asong</option>
                </select>
            </label>

            <label htmlFor="">
            <p>count</p>
                <input type="number" name="count" onChange={handleChange} value={formData.count || ''}/>
            </label>

            <label htmlFor="">
                <p>gift-wrap</p>
                <input type="checkbox" name="gift-wrap" id=""  onChange={handleChange} checked={formData['gift-wrap'] || false} disabled={formData.mango !== 'milli'}/>
            </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandler;
