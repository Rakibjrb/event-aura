import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const ExtraLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => toast.success("User creation successfull...."))
      .catch(() => toast.error("something went wrong !!!"));
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-6">
        <p className="w-1/3 h-[2px] bg-black"></p>
        <p className="text-center text-xl">Sign in Using</p>
        <p className="w-1/3 h-[2px] bg-black"></p>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline font-poppins w-full"
      >
        Google
      </button>
    </div>
  );
};

export default ExtraLogin;
