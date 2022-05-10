import React, { useState } from 'react'

//styles import
import './FileNamer.css'

const FileNamer = () => {
const [name, setNmae] = useState();
const [alert, setAlert] = useState(false);


/*Handling inputddefault with preventdefault and also to also checking if * is used*/ 

const validate = e =>{
  if(/\*/.test(name)){
    e.preventDefault();
    setAlert(true);
    return;
  }

  setAlert(false)
}

  return (
    <div className='wrapper'>
    <div className='preview'>
      <h1>Preview: {name} </h1>
    </div>

    <form action="">
      <label htmlFor="">
      <p>Name</p>
        <input type="text" name='name' placeholder='name' 
        autoComplete='off'
        onChange={e => setNmae(e.target.value)}
          onFocus={() =>setAlert(true)}
        />
      </label>

{/* Alert message on focus*/}
      {alert && 
      <div>
        <span role='img' aria-label='allowed'>✅</span> Alphanumeric are allowed and
        <span role='img' aria-label="not-allowed">⛔</span> * is not allowed
      </div>
      }

      <div className="button">
      <button onClick={validate}>Save</button>
    </div>
    </form>

   

    </div>
  )
}

export default FileNamer