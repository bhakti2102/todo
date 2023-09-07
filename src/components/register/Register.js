import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from './RegisterActions';

function Register() {

const usernameformate = /^[a-z0-9_-]{3,16}$/;
const passwordformate = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const [data, setData] = useState({ username: "", password: "" });
const [error, seterror] = useState({ username: false, password: false });
const [gender, setGender] = useState("");
const [genErr , setGenErr] = useState(false);
const {username, password} = data;
const dispatch = useDispatch();
const navigate = useNavigate();


const changeAuthMode = () => {
  navigate("/");
};

const handleGender = (e) => {
  let gender = e.target.value
  setGender(gender);

};

const handleChange = (e) => {
  setData(prevdata => {
    return {...prevdata, [e.target.name]:e.target.value}
  });
}

function checkField(e) {
  

  if (!username.match(usernameformate) && e.target.name === "username") {
    seterror({
      ...error,
      [e.target.name]: true,
    });
  } else if (username.match(usernameformate)) {
    seterror({
      ...error,
      [e.target.name]: false,
    });
  }

  if (!password.match(passwordformate) && e.target.name === "password") {
    seterror({
      ...error,
      [e.target.name]: true,
    });
    console.error(error);
  } else if (password.match(passwordformate)) {
    seterror({
      ...error,
      [e.target.name]: false,
    });
  }
}

const payload = {
  userid: username,
  password: password,
  gender: gender
}

const handleClick = (e) =>
{ 
  e.preventDefault();
  if (username.match(usernameformate)) {
    seterror(false);
  } else {
    seterror(true);
  }

  if (password.match(passwordformate)) {
    seterror(false);
  } else {
    seterror(true);
  }
    let a = document.getElementById("radio1")
    let b = document.getElementById("radio2")
    
    if(!a.checked && !b.checked)
    {
      setGenErr(true);
    }
    else{
    setGenErr(false);
    dispatch(signupUser(payload));
    
    }
  
};

  
  return (
    <div className='auth-container'>
        <form>
        <h4> Welcome </h4>
        <h3> Register Your Self !! </h3>
        <div>
            Already Registered ?{" "}
            <span id='change'  onClick={changeAuthMode}>
            Log In
            </span>
          </div>
          <br></br>
        <div className='auth-form'>
            <input
                type="text"
                placeholder='Enter Username'
                name='username'
                onChange={handleChange}
                onBlur={checkField}
                value={username}
                />
        </div>
        {error.username ?<span>Please Enter Valid Username</span> : ""}
        <div className='auth-form'>
            <input
                type="password"
                placeholder='Password'
                name='password'
                onChange={handleChange}
                onBlur={checkField}
                value={password}
                />
        </div>
        {error.password ? (<span>Invalid password</span>) : (" ")}
        <div>
            <label>Gender</label>
          </div>
          <br></br>
          <div  onChange={handleGender}>
            <input id="radio1"
            type="radio" 
            value="Male" 
            name="Male"
            className="btn" 
           />{" "}
            Male
            <input id="radio2"
              type="radio"
              value="Female"
              name="Female"
              className="btn"
            />{" "}
            Female
          </div>
          {genErr ? <span >Please Select the Gender</span> : ""}
          <br></br>
        <div className="auth-form">
            <button
              type="submit"
              onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
    </div>
  )
}


export default Register
