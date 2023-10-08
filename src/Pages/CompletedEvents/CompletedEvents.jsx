import { useLoaderData } from "react-router-dom";

const CompletedEvents = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 mt-5 mb-16">
      <h2 className="text-4xl text-center font-robotoslab font-bold mb-6">
        Our Completed <span className="text-blue-500">Events</span>
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {data.map((event) => {
          const { id, image, finish_date, total_cast, customer_name } = event;
          return (
            <div key={id} className="bg-base-300 rounded-lg">
              <img src={image} alt={customer_name} />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  Buyer Name : {customer_name}
                </h3>
                <div className="flex justify-between">
                  <h4 className="font-bold">Completed on : {finish_date}</h4>
                  <h4 className="font-bold">Total Cast : {total_cast}$</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompletedEvents;
