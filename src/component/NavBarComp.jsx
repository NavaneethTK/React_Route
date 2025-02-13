import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="flex justify-center gap-16 px-[10px] py-[15px] text-[16px]  text-sm font-normal bg-[#f4f4f4]">
        <NavLink to={"/"}>
          <p className="hover:text-[red]  px-[5px] py-[10px]">HOME</p>
        </NavLink>
        <NavLink to={"/jewelery"}>
          <p className="hover:text-[red]  px-[5px] py-[10px]">JEWELERY</p>
        </NavLink>
        <NavLink to={"/electronics"}>
          <p className="hover:text-[red]  px-[5px] py-[10px]">ELECTRONICS</p>
        </NavLink>
        <NavLink to={"/mensclothing"}>
          <p className="hover:text-[red]  px-[5px] py-[10px]">MENSCLOTHING</p>
        </NavLink>
        <NavLink to={"/womenscloting"}>
          <p className="hover:text-[red]  px-[5px] py-[10px]">WOMENSCLOTHING</p>
        </NavLink>
      </div>
    </>
  );
}
export default Nav;
