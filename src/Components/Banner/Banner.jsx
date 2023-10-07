import "./banner.css";

const Banner = () => {
  return (
    <div className="px-2 lg:px-0 banner h-[80vh] lg:h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-robotoslab text-white text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8">
          We personalize your <br />{" "}
          <span className="text-blue-500">Wedding</span> Events
        </h1>
        <h2 className="text-white text-xl lg:text-3xl font-poppins">
          We are event management spacialists
        </h2>

        <button className="btn btn-primary mt-10 px-10 font-poppins">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;
