import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaUser, FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import './Register.css'
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate(); // Hook for navigation

  const handleRegisterClick = () => {
    navigate('/login'); // Navigate to register route on click
  };

  return (
    <div className="fondo">
            <div className="container-form-register">
                <div className="information">
                    <div className="info-childs">
                        <h2>Bienvenido</h2>
                        <p>Para unirte a nuestra comunidad por favor Inicia Sesión con tus datos</p>
                        <span onClick={handleRegisterClick}>
                        <input type="button" value="Iniciar Sesión" id="sign-in" />
                        </span>
                    </div>
                </div>
                <div className="form-information">
                    <div className="form-information-childs">
                        <h2>Crear una Cuenta</h2>
                        <div className="icons">
                            <i className=''><FaGoogle/></i>
                            <i className=''><FaGithub/></i>
                            <i className=''><FaLinkedinIn/></i>
                        </div>
                        <p>o usa tu email para registrarte</p>
                        <form className="form form-register" noValidate>
                            <div>
                                <label>
                                    <i className=''><FaUser/></i>
                                    <input type="text" placeholder="Nombre Usuario" name="userName" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <i className=''><IoIosMail /></i>
                                    <input type="email" placeholder="Correo Electronico" name="userEmail" />
                                </label>
                            </div>
                            <div>
                                <label>
                                    <i className=''><FaLock/></i>
                                    <input type="password" placeholder="Contraseña" name="userPassword" />
                                </label>
                            </div>

                            <input type="submit" value="Registrarse" />
                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register