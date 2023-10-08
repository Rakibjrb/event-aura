import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="py-16 setbg bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex justify-center">
        <div className="max-w-screen-sm card flex-shrink-0 w-full shadow-2xl bg-[rgba(0,0,0,0.33)] pt-5">
          <h2 className="text-center text-3xl font-robotoslab font-bold text-white">
            Contact US
          </h2>
          <form className="card-body pb-8">
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="form-control w-auto flex-1">
                <label className="label">
                  <span className="label-text text-white">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  name="firstName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-auto flex-1">
                <label className="label">
                  <span className="label-text text-white">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  name="lastName"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
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
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                name="message"
                type="text"
                placeholder="Message"
                className="input input-bordered pt-3"
                required
              ></textarea>
            </div>
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary font-poppins">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
