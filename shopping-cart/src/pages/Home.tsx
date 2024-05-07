import { NavLink } from "react-router-dom";
import HeroImg6 from "../assets/img-6.jpg";

function Home() {
  return (
    <div>
      <div className="bg-cover w-full bg-center h-screen bg-[url('./assets/img-3.jpg')]">
        <div className="text-black flex flex-col absolute top-[50%] right-[10%]">
          <h1 className="text-[1.5rem] md:text-[2.8rem] font-medium">
            New Rolex Series
          </h1>
          <div className="text-[1.2rem] md:text-[1.5rem] pt-2 hover:underline text-center">
            <NavLink to="/store">
              <button className="bg-[#0f4b0f] text-[#f0ece8e8] py-[10px] px-[20px] rounded-sm text-sm md:text-base">
                Explore
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
        <div className="w-[500px] m-auto mx-[50px] flex flex-col p-5">
          <h1 className="text-md sm:text-[1.5rem] md:text-[2.2rem] capitalize">
            160 years of expertise in the craft of jewellery-making
          </h1>
          <div className="text-sm md:text-[1.2rem] underline mt-2">
            <NavLink to="/about">Learn About Us</NavLink>
          </div>
        </div>
        <div>
          <img src={HeroImg6} className=" object-cover" />
        </div>
      </div>

      <div className="bg-cover w-full bg-center h-screen bg-[url('./assets/img-5.jpg')] relative">
        <div className="text-black flex flex-col absolute right-[5%] p-2 mt-[200px] md:w-[500px] backdrop-blur-md">
          <h1 className="text-[1.5rem] md:text-[2.8rem] font-medium">
            Engagement
          </h1>
          <p>
            Allow us to be part of the excitement of your engagement— one of
            life's most special moments
          </p>
          <div className="text-[1.2rem] md:text-[1.5rem] pt-2 hover:underline">
            <NavLink to="/rings">Explore</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
