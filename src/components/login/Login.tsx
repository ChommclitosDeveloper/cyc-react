import { FaUser, FaLock } from "react-icons/fa";
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to register route on click
  };

  const handleLoginClick = () => {
    navigate('/'); // Navigate to homepage on click
  };

  return (
    <div>
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="icons">
          <i className=''><FaGoogle/></i>
          <i className=''><FaGithub/></i>
          <i className=''><FaLinkedinIn/></i>
        </div>
        <div className='input-box'>
          <input type="text" placeholder='Usuario' required />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Contraseña' required />
          <FaLock className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox"/>Recordar</label>
          <a href="/">¿Olvido su contraseña?</a>
        </div>
        
        <button onClick={handleLoginClick} type='submit'>Login</button>

        <div className="register-link">
          <p>¿No tienes una cuenta? <span className='registro' onClick={handleRegisterClick} >Registrarse</span></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
