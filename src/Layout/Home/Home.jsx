import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="mt-24">
        <Services />
      </div>
    </>
  );
};

export default Home;
