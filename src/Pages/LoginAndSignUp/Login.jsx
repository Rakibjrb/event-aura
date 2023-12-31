import PropTypes from "prop-types";
import ExtraLogin from "./ExtraLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ handleFormToggle }) => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(() => {
        toast.success("Login successfull ....");
        e.target.reset();
        location?.state ? navigate(location?.state) : navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="px-5 sm:px-0 hero bg-[rgb(78,78,78)] py-20">
      <div className="max-w-screen-sm card flex-shrink-0 w-full shadow-2xl  pt-5 bg-[#111111]">
        <h2 className="text-center text-3xl font-robotoslab font-bold text-white">
          User Login
        </h2>
        <form onSubmit={handleLogin} className="card-body pb-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-2">
            <button type="submit" className="btn btn-primary font-poppins">
              Login
            </button>
          </div>
        </form>
        <div className="card-body pt-0">
          <p className="flex justify-between text-white">
            {"Don't"} have any account?{" "}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleFormToggle();
              }}
              className="text-blue-500 ml-2"
            >
              Sign Up Now
            </button>
          </p>
          <ExtraLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
Login.propTypes = {
  handleFormToggle: PropTypes.func,
};
