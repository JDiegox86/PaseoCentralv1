import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/fonAqp.png'})`,
    height: '760px',
    backgroundPosition: 'center',
    //backgroundColor: '#23394d',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  carta: {
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '5px',
    padding: '30px',
    backgroundColor: 'rgba(000, 000, 000, 0.2)',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 15px 25px rgba(000, 000, 000, 0.9)',
    color: '#fff',
    //opacity: '.5',
    // height: '300px',
    // width:'250px',
  }
}));
export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };
  const classes = useStyles();


  return (
    <div className={classes.root}>
      {error && <Alert message={error} />}

      <section className="vh-100">
        <div className="container py-5 h-100">
          {/* parte de imagen */}
          <div className="row d-flex align-items-center justify-content-center h-100">
            {/* <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="assets/PaseoCentral.png"
                class="img-fluid" alt="Phone image"></img>
            </div> */}
            {/* parte de formulario */}
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1"  >
              <div className={classes.carta}>
                
                <img src="/assets/Logo.png" width="200" height="100" alt="" />
                <hr></hr>
                <form onSubmit={handleSubmit}>
                  {/* Inicio de correo */}
                  <div className="form-outline mb-4">
                    <label
                      htmlFor="email"
                      className="form-label">
                      Correo electronico
                    </label>
                    <input
                      style={{ background: "transparent", color: "#fff" }}
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="correo@gmail.com"

                    />
                  </div>
                  {/* Fin de correo */}

                  {/* Inicio de password */}
                  <div className="form-outline mb-4">
                    <label
                      htmlFor="password"
                      className="form-label"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="*********"
                      style={{ background: "transparent", color: "#fff" }}
                    />
                  </div>
                  {/* Fin de password */}

                  {/* Inicio de botones */}
                  <div className="flex items-center justify-between">
                    <button
                      className="btn btn-primary d-grid gap-2 col-6 mx-auto btn-lg "
                      type="submit"
                      
                    >
                      Iniciar Sesion
                    </button>
                  </div>
                  <br></br>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleGoogleSignin}
                      className="btn btn-danger d-grid gap-2 col-6 mx-auto btn-lg"
                      
                    >
                      Google login
                    </button>
                  </div>
                  <br></br>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#!"
                    onClick={handleResetPassword}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>

                  <p className="my-4 text -sm flex ">
                    ¿No tienes cuenta?.
                    <Link to="/register" className="text-blue-700 hover:text-blue-900">
                      Registrarse
                    </Link>
                  </p>
                </form>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}
