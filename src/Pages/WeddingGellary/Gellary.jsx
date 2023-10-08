import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Gellary = () => {
  const [showAll, setshowAll] = useState(12);
  const data = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-10 xl:px-0">
      <h2 className="text-3xl font-robotoslab font-bold mb-5 text-center">
        Wedding <span className="text-blue-500">Gellary</span>
      </h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {data.slice(0, showAll).map((wedding) => {
          const { id, image, customer_name } = wedding;
          return (
            <div key={id}>
              <img src={image} alt={customer_name} />
            </div>
          );
        })}
      </div>
      {data.length === showAll ? (
        ""
      ) : (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setshowAll(data.length)}
            className="btn btn-primary"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default Gellary;
