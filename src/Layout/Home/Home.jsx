import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Welcome from "../../Components/Welcome/Welcome";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className="mt-24">
        <Welcome />
      </div>
      <div className="mt-24">
        <Services />
      </div>
    </>
  );
};

export default Home;
