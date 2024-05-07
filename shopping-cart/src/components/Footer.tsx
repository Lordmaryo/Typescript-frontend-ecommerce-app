import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="max-w-[1240px] mt-[60px] px-4 py-8 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <NavLink to="/">
          <div className="px-4">
            <div className="logo-name">
              <span className="tracking-[10px] text-white font-bold text-[1rem] md:text-[1.8rem] sm:text-[1.5rem]">
                LordMaryo
              </span>
              <span className="tracking-[5px] text-md md:text-xl">
                Jewellers
              </span>
            </div>
          </div>
        </NavLink>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus
          nesciunt exercitationem unde reiciendis ratione odio quia eum, dicta
          enim.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-500">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-500">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Document</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-500">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-500">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
