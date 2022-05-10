import React, { useState, useEffect } from "react";

//styles import
import "./FileNamer.css";

const FileNamer = () => {
  const [name, setNmae] = useState();
  const [alert, setAlert] = useState(false);

  /*Handling inputddefault with preventdefault and also to also checking if * is used*/

  const validate = (e) => {
    if (/\*/.test(name)) {
      e.preventDefault();
      setAlert(true);
      return;
    }

    setAlert(false);
  };


  /*Handling the window events on the alert using useEffect */
  useEffect(() => {
    const handleWindowClick =()  => setAlert(false)

    if (alert) {
      window.addEventListener('click', handleWindowClick);
      
    } 
    else{
      window.removeEventListener('click', handleWindowClick)
    }
      
    
    return () => window.removeEventListener('click', handleWindowClick)
    
    
  }, [alert, setAlert]);

  return (
    <div className="wrapper">
      <div className="preview">
        <h1>Preview: {name} </h1>
      </div>

      <form action="">
        <label htmlFor="">
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="name"
            autoComplete="off"
            onChange={(e) => setNmae(e.target.value)}
            onFocus={() => setAlert(true)}
            onBlur={() => setAlert(false)}
          />

          <input
            type="text"
            name="name"
            placeholder="name"
            autoComplete="off"
            onChange={(e) => setNmae(e.target.value)}
            
          />
        </label>

        {/* Alert message on focus*/}

        <div className="info__wrapper">
          <buton className="info"
          onClick={() =>setAlert(true)}
          >
          More information
          </buton>


          {alert && (
          <div className="popup">
            <span role="img" aria-label="allowed">
              ✅
            </span>{" "}
            Alphanumeric are allowed and
            <span role="img" aria-label="not-allowed">
              ⛔
            </span>{" "}
            * is not allowed
          </div>
        )}
        </div>
      

        <div className="button">
          <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default FileNamer;
