import { useEffect, useState } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import "./ourteam.css";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("members.json")
      .then((res) => res.json())
      .then((resData) => setTeamMembers(resData));
  }, []);

  return (
    <div className="bg-blue-300 my-24 py-16">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
        <h2
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-center text-4xl font-robotoslab font-semibold"
        >
          Our team <span className="text-blue-500">members</span>
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => {
            const { id, name, social_media, image } = member;
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="rounded-md teammember relative overflow-hidden bg-base-100 py-10 hover:bg-base-300 hover:cursor-pointer transition-all"
                key={id}
              >
                <div>
                  <div>
                    <img
                      className="memberpic rounded-full w-40 mx-auto"
                      src={image}
                      alt={name}
                    />
                  </div>
                  <div className="font-poppins text-center">
                    <h3 className="font-bold text-2xl mt-5">{name}</h3>
                  </div>
                </div>
                <div className="flex items-center social-links transition-all w-full absolute h-1/3 -bottom-32 right-0 bg-[rgba(101,111,255,0.67)]">
                  <ul className="flex justify-between w-full items-center px-10 py-5">
                    <li>
                      <a href={social_media.facebook}>
                        <FaFacebookSquare className="text-white text-3xl hover:text-blue-500 transition-colors" />
                      </a>
                    </li>
                    <li>
                      <a href={social_media.instagram}>
                        <FaInstagram className="text-white text-3xl hover:text-blue-500 transition-colors" />
                      </a>
                    </li>
                    <li>
                      <a href={social_media.twitter}>
                        <FaTwitter className="text-white text-3xl hover:text-blue-500 transition-colors" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
