import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "../components/Alert";
import { makeStyles } from '@material-ui/core/styles';
export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {error && <Alert message={error} />}

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            {/* <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image"></img>
            </div> */}

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <div className={classes.carta}>
                <img src="/assets/Logo.png" width="200" height="100" alt="" />
                <hr></hr>
                <form onSubmit={handleSubmit}>

                  <div className="form-outline mb-4">
                    <label
                      htmlFor="email"
                      className="form-label"
                    >
                      Correo electronico
                    </label>
                    <input
                      style={{ background: "transparent", color: "#fff" }}
                      type="email"
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      className="form-control form-control-lg"
                      placeholder="correo@gmail.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="form-label"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      className="form-control form-control-lg"
                      placeholder="*********"
                      style={{ background: "transparent", color: "#fff" }}
                    />
                  </div>

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Registro
                  </button>
                </form>
                <p className="my-4 text-sm flex justify-between px-3">
                  Already have an Account?
                  <Link to="/login" className="text-blue-700 hover:text-blue-900">
                    Login
                  </Link>
                </p>
              </div>


            </div>

          </div>
        </div>

      </section>



    </div>
  );
}
