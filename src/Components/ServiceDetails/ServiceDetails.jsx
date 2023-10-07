import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const serviceId = useParams();
  const clickedService = service.find((service) => service.id === serviceId.id);
  const { image, title, full_description } = clickedService;
  return (
    <div className="max-w-screen-md mx-auto px-4 py-5 lg:px-0">
      <div className="relative">
        <img className="" src={image} alt={title} />
        <div className="absolute bottom-0 w-full pb-10 pt-7 bg-[#080808c2]">
          <h3 className="text-white text-2xl md:text-4xl ml-4">{title}</h3>
        </div>
      </div>
      <p className="mt-5">{full_description}</p>
    </div>
  );
};

export default ServiceDetails;
