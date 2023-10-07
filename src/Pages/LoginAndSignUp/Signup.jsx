import PropTypes from "prop-types";
import ExtraLogin from "./ExtraLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Signup = ({ handleFormToggle }) => {
  const { createAccountWithEmailAndPassword, setNameAndPhoto } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error("Password must have at least 6 digit");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have at least 1 Capital letter");
      return;
      //eslint-disable-next-line
    } else if (!/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)) {
      toast.error("Password must have 1 special character");
      return;
    }
    createAccountWithEmailAndPassword(email, password)
      .then(() => {
        setNameAndPhoto(name)
          .then(() => toast.success("Account Creation successfull...."))
          .catch(() => toast.error("something went wrong !!!"));
        e.target.reset();
      })
      .catch(() => toast.error("something went wrong !!!"));
  };
  return (
    <div className="px-5 sm:px-0 hero py-20 bg-base-200">
      <div className="max-w-screen-sm card flex-shrink-0 w-full shadow-2xl bg-base-100 pt-5">
        <h2 className="text-center text-3xl font-robotoslab font-bold">
          User Registration
        </h2>
        <form onSubmit={handleSignUp} className="card-body pb-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-2">
            <button type="submit" className="btn btn-primary font-poppins">
              Sign Up
            </button>
          </div>
        </form>
        <div className="card-body pt-0">
          <p>
            Do not hav any account?{" "}
            <button
              onClick={() => handleFormToggle()}
              className="text-blue-500"
            >
              Login
            </button>
          </p>
          <ExtraLogin />
        </div>
      </div>
    </div>
  );
};

export default Signup;
Signup.propTypes = {
  handleFormToggle: PropTypes.func,
};
