import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="w-full p-auto text-sm md:text-lg py-3 hidden md:block bg-[#121212]">
      <ul className="h-[20px] flex flex-row items-center justify-center gap-5">
        <li className="hover:underline">
          <NavLink to="/watches">watches</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/necklaces">Necklaces</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/rings">Rings</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Category;
