import React, { useState ,useEffect} from "react";
import { useDispatch , useSelector} from "react-redux";
import { loginUser } from "./LoginActions";
import {useNavigate } from "react-router-dom";

function Login() {
  
  const [data, setData] = useState({ username: "", password: "" });
  const [validateError, setError] = useState({userName: false, password: false,});
  const { username, password } = data;
  const usernameformate = /^[a-z0-9_-]{3,16}$/;
  const passwordformate = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const st = useSelector((state)=>state);

  useEffect(() => {
    if(st?.Login?.user)
    {
      navigate("/todo");
    } 
  },[st])
  

  const changeAuthMode = () => {
    navigate("/register");
  };

  const handleChange = (e) => {
    setData((prevdata) => {
      return { ...prevdata, [e.target.name]: e.target.value };
    });
  };

  function checkField(e) {
    if (!username.match(usernameformate) && e.target.name === "username") {
      setError({
        ...validateError,
        [e.target.name]: true,
      });
    } else if (username.match(usernameformate)) {
      setError({
        ...validateError,
        [e.target.name]: false,
      });
    }

    if (!password.match(passwordformate) && e.target.name === "password") {
      setError({
        ...validateError,
        [e.target.name]: true,
      });
    } else if (password.match(passwordformate)) {
      setError({
        ...validateError,
        [e.target.name]: false,
      });
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };

  return (
    <div className="auth-container">
      <form>
        <h4> Welcome </h4>
        <h3> Log-In </h3>
        <div>
          Not registered yet?{" "}
          <span id="change" onClick={changeAuthMode}>
            Sign up
          </span>
        </div>
        <br></br>
        <div className="auth-form">
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            onBlur={checkField}
            value={username}
          />
          </div>
          {validateError.username ?<span className="text-danger">Please Enter Valid Username</span> : ""}
        <div className='auth-form'>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            onBlur={checkField}
            value={password}
          />
        </div>
        {validateError.password ? (<span className="text-danger">Invalid password</span>) : (" ")}
        <div className="auth-form">
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

