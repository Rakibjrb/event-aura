import WelcomePic from "../../assets/images/welcome.jpg";

const Welcome = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
      <div className="flex flex-col-reverse md:flex-row justify-between md:items-start lg:items-center gap-5">
        <img
          src={WelcomePic}
          alt=""
          className="md:w-2/5 md:h-[300px] lg:h-auto"
        />
        <div className="md:w-3/5">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-robotoslab font-semibold">
            Welcome to <span className="text-blue-500">Event Aura</span>
          </h2>
          <p className="text-xl text-center md:text-left font-poppins mt-3">
            Making your events smarter & impactful by personalised event
            management
          </p>
          <div className="mt-5 text-justify md:text-left">
            <p>
              Welcome to our world of exquisite weddings! At{" "}
              <span className="text-blue-500">Event Aura</span>, we are
              dedicated to turning your dreams into reality. With meticulous
              planning, attention to detail, and a touch of magic, we craft
              unforgettable moments that celebrate love. {"Let's"} embark on
              this beautiful journey together, creating memories that last a
              lifetime.
            </p>
            <p className="mt-3 text-justify md:text-left">
              Event Aura transform your wedding dreams into enchanting
              realities. Our expert team ensures every detail shines, making
              your special day unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
