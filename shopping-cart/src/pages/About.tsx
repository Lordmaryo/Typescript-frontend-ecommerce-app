import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HeroImg7 from "../assets/img-7.jpg";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function About() {
  return (
    <div>
      <div className="bg-cover w-full bg-center h-screen bg-[url('./assets/img-8.jpg')]">
        <div className="flex flex-col pt-[70px] md:pt-[100px] items-center px-10 bg-[#121212b0] text-[#faf7f3cf] w-full h-screen text-center">
          <h1 className="text-[1.5rem] md:text-[2.8rem] font-medium capitalize">
            We're not a normal jewellery company
          </h1>
          <p className="md:w-[900px] text-sm sm:text-lg md:text-lg">
            Normal was never good enough. Frustrated by compromises between
            quality, affordability, and convenience, our founders started Burrow
            with a new approach to Jewellry.
          </p>
          <NavLink to="/store">
            <div className="text-[1.2rem] md:text-[1.5rem] pt-2 hover:underline text-center flex flex-row gap-3 items-center">
              Shop and see
              <span>
                <FaArrowRight />
              </span>
            </div>
          </NavLink>
          <div
            className="mt-[25px] sm:mt-[80px] md:mt-[120px]"
            title="scroll down"
          >
            <div className="bouncing-icon">
              <IoIosArrowDown size={40} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between flex-wrap md:flex-nowrap">
        <div className="w-[500px] m-auto md:mx-[50px] flex flex-col p-5">
          <h2 className="text-lg sm:text-[1.2rem] md:text-[1.8rem] capitalize text-[#f4e2cc]">
            We pride ourselves on delivering the best service
          </h2>
          <p className="text-sm sm:text-md md:text-lg my-2">
            At Lord Maryo, we're passionate about crafting jewelry that embodies
            elegance and individuality. Our journey began with a vision to
            create timeless pieces that celebrate life's precious moments. We
            believe that jewelry is more than just an accessory; it's a
            reflection of one's style and personality. We invite you to explore
            our collection and find that perfect piece that resonates with you.
            Welcome to the world of Lord Maryo, where every piece tells a unique
            story.
          </p>
          <div className="text-sm md:text-[1.2rem] underline mt-2">
            <NavLink to="/store">Explore</NavLink>
          </div>
        </div>
        <div>
          <img src={HeroImg7} className="object-cover" />
        </div>
      </div>

      <div className="py-10 px-5 flex flex-col sm:flex-row md:flex-nowrap md:flex-row gap-5 justify-center items-center">
        <div className="md:w-[350px] md:block sm:block gap-20 flex flex-row items-center ">
          <MdOutlineLocalShipping size={40} className="hidden sm:flex" />
          <div>
            <h2 className="text-lg sm:text-[1.2rem] md:text-[1.8rem] capitalize text-[#eacba4] pt-4 sm:pb-2">
              Free shipping
            </h2>
            <p className="text-sm sm:text-md md:text-lg my-2">
              At LordMaryo, we're pleased to offer complimentary shipping on all
              jewelry orders, ensuring swift and secure delivery of your
              treasured pieces. Enjoy effortless elegance without extra costs.
            </p>
          </div>
        </div>
        <div className="md:w-[350px] md:block sm:block gap-20 flex flex-row items-center ">
          <MdOutlineVerified size={40} className="hidden sm:flex" />
          <div>
            <h2 className="text-lg sm:text-[1.2rem] md:text-[1.8rem] capitalize text-[#eacba4] pt-4 sm:pb-2">
              Delivering Quality
            </h2>
            <p className="text-sm sm:text-md md:text-lg my-2">
              We understand the significant value of our goods and products,
              which is why we are committed to ensuring that every penny spent
              is worth it by delivering exceptional quality services.
            </p>
          </div>
        </div>
        <div className="md:w-[350px] md:block sm:block gap-20 flex flex-row items-center ">
          <IoChatboxEllipsesOutline size={40} className="hidden sm:flex" />
          <div>
            <h2 className="text-lg sm:text-[1.2rem] md:text-[1.8rem] capitalize text-[#eacba4] pt-4 sm:pb-2">
              Direct customer relationship
            </h2>
            <p className="text-sm sm:text-md md:text-lg my-2">
              By doing everything ourselves — and selling directly to people —
              we can run a more nimble & efficient business. But it's not just
              about savings: it also allows us to have a close feedback loop
              with customers and iterate on our designs way faster than the
              competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
