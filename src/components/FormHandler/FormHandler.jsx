import React from 'react'
import './FormHandler.css'

const FormHandler = () => {

    //Handling form submit, prevent deafault and for onsubmit event
    const handleSubmit = (e) =>{
e.preventDefault();
alert('Form submitted successfully')
    }
  return (
    <div className='wrapper'>

    <p>Buy some Mangoes</p>

    <form action="" onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="">
                <p>Name: </p>
                <input type="text" name='name' placeholder='Type of Mango' />
            </label>
        </fieldset>

        <button type='submit'>Submit</button>
    </form>

    </div>
  )
}

export default FormHandler