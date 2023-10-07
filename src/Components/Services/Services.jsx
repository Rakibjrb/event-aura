import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((resData) => setServices(resData));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 my-12">
      <h2 className="text-4xl text-center font-robotoslab font-semibold">
        Our <span className="text-blue-500">Services</span>
      </h2>
      <p className="text-xl text-center font-poppins mt-4">
        Seamlessly orchestrate your dream day with our expert planners, <br />{" "}
        turning visions into reality, stress-free
      </p>
      <div className="mt-4 grid gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const { id, image, title, description } = service;
          return (
            <div
              key={id}
              className="card card-compact bg-base-100 shadow-xl rounded-md hover:bg-gray-200"
            >
              <figure>
                <img className="w-full h-60" src={image} alt={title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-poppins font-bold">{title}</h2>
                <p>{description.slice(0, 110)}...</p>
                <div className="card-actions mt-4 flex justify-between items-center">
                  <div className="rating gap-1">
                    <input
                      type="radio"
                      name={`rating-${id}`}
                      className="mask mask-heart bg-red-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${id}`}
                      className="mask mask-heart bg-red-400"
                      checked
                    />
                    <input
                      type="radio"
                      name={`rating-${id}`}
                      className="mask mask-heart bg-red-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${id}`}
                      className="mask mask-heart bg-red-400"
                      checked
                    />
                    <input
                      type="radio"
                      name={`rating-${id}`}
                      className="mask mask-heart bg-red-400"
                    />
                  </div>
                  <Link
                    to={`/service-details/${id}`}
                    className="btn btn-primary"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
